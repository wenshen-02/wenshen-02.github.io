function GetBookings() {
    let url = "https://api.sheety.co/5ade2c1e4ef66f465fad1ece18a7fb1e/bookingApp/bookings";
    fetch(url)
        .then((Response) => Response.json())
        .then(json => {
            //do something with the data
            console.log(json.GetBookings);
            let bookingList = getElementById("bookingList");
            bookingList.innerHTML = "";

            let jsonDiv = document.getElementById("json");
            jsonDiv.innerHTML = "";
            jsonDiv.innerHTML = json.bookings;

            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gpax = json.bookings[i].pax;
                let gId = json.bookings[i].id;

                bookingList.innerHTML += gId + "-" + gName + ", " + gEmail + ", pax:" + gpax + "<br>";
            }
        });
}

let getBookingBtn = document.getElementById("getBookings");
getBookingBtn.addEventListener("click", function () {
    GetBookings();
});