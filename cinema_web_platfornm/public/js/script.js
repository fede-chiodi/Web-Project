const show_modal = (seat) => {
    myModal.style.display = "block";
    seat_input.value = seat.toString();
}

const hide_modal = () => {
    myModal.style.display = "none";
}

const show_removeBooking_modal = (seat) => {
    myRemoveBookingModal.style.display = "block";
    rm_seat_input.value = seat.toString();
}

const  hide_removeBooking_modal = () => {
    myRemoveBookingModal.style.display = "none";
}

const handleClickSeat = (seatId, seatStatus) => {
    if (seatStatus === "booked") {
      show_removeBooking_modal(seatId)
    } else {
        show_modal(seatId);
    }
}