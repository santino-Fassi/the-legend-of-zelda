const app = Vue.createApp({
    data() {
        return {
            mensaje: "Aprendiendo Vue",
            visible: true
        }
    },
    methods: {
        holaMundo() {
            console.log("Hola mundo");
        }
    }
});

app.component("mi-componente", {
    data() {
        return {
            saludo: "hola"
        };
    },
    template: `
    <div>
        <h3>{{saludo}}</h3>
    </div>
    `,
    methods: {
        holaMundo() {
            console.log("Hola mundo");
        }
    }
    
});



const viewModel = app.mount('#app');


viewModel.mensaje = "mesi";