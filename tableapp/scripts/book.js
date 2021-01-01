function BookNow(guestName, guestEmail, guestpax) {
    let url = 'https://api.sheety.co/5ade2c1e4ef66f465fad1ece18a7fb1e/bookingApp/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            pax: guestpax,
            remarks: guestRemarks
        }
    }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.booking.name + " added!");
        });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPax = document.getElementById("userPax").value;
        let userRemarks = document.getElementById("userRemarks").value;

        bookNow(userName, userEmail, userPax, userRemarks);
    });
});
