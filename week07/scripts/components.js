Vue.component("todo-item", {
    props: ["todo"],
    template: "<li>{{ todo.text }}</li>"
});

let app7 = new Vue({
    el: "#app7",
    data: {
        grocerylist: [
            {
                id: 0,
                text: "Vegetables"
            },
            {
                id: 1,
                text: "Cheese"
            },
            {
                id: 3,
                text: "Drinks"
            },
            {
                id: 4,
                text: "Proteins"
            }
        ]
    }
});