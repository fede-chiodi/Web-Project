import { Router } from 'express';
import { Movie } from './models/Movie.js';
import { Booking } from './models/Booking.js';
import { inviaConfermaCinema, inviaDisdettaCinema, inviaRicevutaEmail, inviaDisdettaEmail } from './mailer_system.js';



const router = new Router();

router.post('/invia-conferma-email', (req, res) => {
    const booking_datas = req.body;
    console.log(booking_datas);
    inviaRicevutaEmail(booking_datas.name, booking_datas.surname, booking_datas.email, booking_datas.number, booking_datas.seat, booking_datas.movie, booking_datas.price);
    inviaConfermaCinema(booking_datas.name, booking_datas.surname, booking_datas.email, booking_datas.number, booking_datas.seat, booking_datas.movie);
    console.log("Confirm Email sent!!");
    res.status(200).redirect('/landing/' + booking_datas.movie);
});

router.post('/invia-disdetta-email', (req, res) => {
    const booking_datas = req.body;
    console.log(booking_datas)
    const dataDisdetta = new Date().toLocaleDateString();
    inviaDisdettaEmail(booking_datas[0].name, booking_datas[0].surname, booking_datas[0].email, booking_datas[0].phone, booking_datas[0].seat, booking_datas[1].title, dataDisdetta);
    inviaDisdettaCinema(booking_datas[0].name, booking_datas[0].surname, booking_datas[0].email, booking_datas[0].phone, booking_datas[0].seat, booking_datas[1].title, dataDisdetta);
    console.log("Cancellation Email sent!!");
    res.status(200).redirect('/landing/' + booking_datas[1].routename);
});



router.get('/', (req, res) => {
    res.redirect('/landing');
});

router.get('/404', (req, res) => {
    res.render('404');
});

router.get('/landing', async (req, res) => {
    const movies = await Movie.findAll();
    res.render('landing', {
        title: "PRENOTAZIONE CINEMA",
        message: "effettua la prenotazione per il film che più desideri vedere in questo momento",
        movies: movies,
    })
});

router.get('/landing/:movie', async (req, res) => {
    const movie = await Movie.findOne({ where: { routename: req.params.movie } });
    if(movie === null) {
        res.redirect('/404');
        return;
    }
    const bookings = await Booking.findAll({ where: { movie_id: movie.id } });
    if(bookings === null) {
        bookings = [];
    }
    res.render('movie', {
        movie: movie,
        bookings: bookings,
        occupiedSeats: bookings.map(booking => booking.seat),
    })
});

router.post('/add_booking', async (req, res, next) => {
    const booking_datas = req.body;
    const movie = await Movie.findOne({ where: { routename: booking_datas.movie } });
    if(movie === null) {
        res.status(400).send("Invalid request");
        return;
    }
    const bookings = await Booking.findAll({ where: { movie_id: movie.id } });
    if(bookings === null) {
        bookings = [];
    }
    const seat = parseInt(booking_datas.seat);
    if(bookings.find((book) => book.seat === seat) || seat >= 200 || seat < 0) {
        res.status(400).send("Seat already booked or invalid");
        return;
    }
    const newBooking = await Booking.create({
        movie_id: movie.id,
        name: booking_datas.name,
        surname: booking_datas.surname,
        email: booking_datas.email,
        phone: booking_datas.number,
        price: movie.price,
        seat: parseInt(booking_datas.seat),
    })
    req.url = '/invia-conferma-email';
    req.method = 'POST';    
    return router.handle(req, res, next);
});

router.post('/cancel_booking', async (req, res, next) => {
    const booking_datas = req.body;
    const seat = parseInt(booking_datas.rm_seat);
    const movie = await Movie.findOne({ where: { routename: booking_datas.rm_movie } });
    if(movie === null) {
        res.status(400).send("Invalid request");
        return;
    }
    const booking = await Booking.findOne({ where: { movie_id: movie.id, seat: seat } });
    if(booking === null) {
        res.status(400).send("Booking not found");
        return;
    }
    req.body = [booking.dataValues, movie.dataValues];
    await booking.destroy();
    req.url = '/invia-disdetta-email';
    req.method = 'POST';
    return router.handle(req, res, next);
});



router.get('/get-local-ip', (req, res) => {
    const os = require('os');
    const networkInterfaces = os.networkInterfaces();
    let localIP = '';

    for (let interfaceName in networkInterfaces) {
        for (let i = 0; i < networkInterfaces[interfaceName].length; i++) {
            const iface = networkInterfaces[interfaceName][i];
            if (iface.family === 'IPv4' && !iface.internal) {
                localIP = iface.address;
                break;
            }
        }
    }

    if (localIP) {
        res.json({ ip: localIP });
    } else {
        res.status(500).json({ error: 'Impossibile ottenere l\'IP locale' });
    }
});

export default router;