function GetBookings() {
    let url = "https://api.sheety.co/5ade2c1e4ef66f465fad1ece18a7fb1e/bookingApp/bookings";
    fetch(url)
        .then((Response) => Response.json())
        .then(json => {
            //do something with the data
            console.log(json.GetBookings);
        });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function () {
    GetBookings();
});