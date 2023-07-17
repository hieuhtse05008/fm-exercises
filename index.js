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
    computed:{
        
    },
    methods:{
    },
    data() {
        return {
        }
    }
}).mount('#app');