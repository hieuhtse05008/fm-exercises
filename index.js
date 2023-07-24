function setState(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function getState(key) {
    return JSON.parse(localStorage.getItem(key));
}

function render(key) {
    let tab = data[key];
    let container = document.getElementById("content");
    container.appendChild
}


const app = Vue.createApp({
    mounted() {
    },
    computed: {},
    methods: {
        next(mod = 1) {
            let res = this.current + mod;
            if (res < 0) res = this.items.length - 1;
            if (res >= this.items.length) res = 0;
            this.current = res;
        },
    },
    data() {
        return {
            current: 0,
            items: [
                {id: "7eBxlQd6tWI", name: 'kick back', rep: 10, t: 10, start: 30},
                {id: "H8RrfDOLiZU", name: 'sides raise', rep: 10, t: 10,},
                {id: "gwWv7aPcD88", name: 'sides lunge', rep: 10, t: 10, start: 11},
                {id: "Ne8yvlyiO-s", name: 'lunge', rep: 10, t: 10, start: 210},
                {id: "VE7q7sJ-zOQ", name: 'pistol squat', rep: 10, t: 10, start: 1},
                {id: "BRfxI2Es2lE", name: 'jump squat', rep: 10, t: 10, start: 2},
                {id: "pvIjsG5Svck", name: 'plank', rep: 10, t: 10, start: 13},
                {id: "x2bgCg5Q0E0", name: 'down dog to high plank', rep: 10, t: 10, start: 0},
                {id: "tqp5XQPpTxY", name: 'glute bridge', rep: 10, t: 10, start: 0},
                {id: "0t4t3IpiEao", name: 'crunch', rep: 10, t: 10, start: 0},
                {id: "jWxvty2KROs", name: 'knees push up', rep: 10, t: 10, start: 0},
                {id: "JB2oyawG9KI", name: 'legs raise', rep: 10, t: 10, start: 10},
                {id: "tyrVtwE8Gv0", name: 'legs raise', rep: 10, t: 10, start: 0},
            ],
        }
    }
}).mount('#app');