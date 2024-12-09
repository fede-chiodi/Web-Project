import nodemailer from 'nodemailer';

let transporter;

export const init_transporter = () => {
    transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'your email for the cinema', 
            pass: 'your-psw for the email account' 
        }
    });

    console.log("Transport initialized");

    return transporter;
}

export const inviaRicevutaEmail = (nome, cognome, email, telefono, posto, film, prezzo) => {
    const mailOptions = {
        from: 'your email fo the cinema', 
        to: email,
        subject: `Conferma Prenotazione Biglietto - ${film}`,
        text: `
            Grazie per aver prenotato il tuo biglietto per ${film}!

            Dettagli della prenotazione:
            Nome: ${nome} ${cognome}
            Email: ${email}
            Telefono: ${telefono}
            Posto: ${posto}
            Prezzo del biglietto: ${prezzo}€

            Buona visione al cinema!
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Errore nell\'invio dell\'email:', error);
        } else {
            console.log('Email inviata:', info.response);
        }
    });
};

export const inviaDisdettaEmail = (nome, cognome, email, telefono, posto, film, data) => {
    const mailOptions = {
        from: 'your email fo the cinema', 
        to: email,
        subject: `Conferma Disdetta del Biglietto - ${film}`,
        text: `
            DIsdetta avvenuta con successo del biglietto per ${film}!

            Dettagli del biglietto disdetto:
            Nome: ${nome} ${cognome}
            Email: ${email}
            Telefono: ${telefono}
            Posto: ${posto}
            Data: ${data}

            Speriamo di rivederci al più presto.
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Errore nell\'invio dell\'email:', error);
        } else {
            console.log('Email inviata:', info.response);
        }
    });
}

export const inviaConfermaCinema = (nome, cognome, email, telefono, posto, film) => {
    const mailOptions = {
        from: email, 
        to: 'your email fo the cinema',
        subject: `Conferma prenotazione del Biglietto - ${film}`,
        text: `
            Prenotazione avvenuta con successo del biglietto per ${film}, 
            da parte di ${nome} ${cognome}!

            Dettagli del biglietto prenotato:
            Telefono: ${telefono}
            Posto: ${posto}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Errore nell\'invio dell\'email:', error);
        } else {
            console.log('Email inviata:', info.response);
        }
    });
}

export const inviaDisdettaCinema = (nome, cognome, email, telefono, posto, film, data) => {
    const mailOptions = {
        from: email, 
        to: 'your email fo the cinema',
        subject: `Conferma Disdetta del Biglietto - ${film}`,
        text: `
            Disdetta avvenuta con successo del biglietto per ${film}, 
            da parte di ${nome} ${cognome}!

            Dettagli del biglietto disdetto:
            Telefono: ${telefono}
            Posto: ${posto}
            Data: ${data}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Errore nell\'invio dell\'email:', error);
        } else {
            console.log('Email inviata:', info.response);
        }
    });
}
