let app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!"
    }
});

let app2 = new Vue({
    el: "#app2",
    data: {
        message: "You loaded this page on " + new Date().toLocaleString(),
        linkURL: "https://bbc.in/2LAnJs8",
        linkText: "Google is down!"
    }
});

let app3 = new Vue({
    el: "#app3",
    data: {
        seen: true
    }
});

let app4 = new Vue({
    el: "#app4",
    data: {
        todos: [
            {
                text: "Learn JavaScript"
            },
            {
                text: "Learn Vue"
            },
            {
                text: "Build something awesome!"
            }
        ]
    }
});