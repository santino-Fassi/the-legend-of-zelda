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

app.component("caracteristicas", {
    data() {
        return {
            tamanio: "27 GB",
            modos: ["Modo TV", "Modo Semiportátil", "Modo Portátil"],
            jugadores: 1,
            online: "Guardado de datos en la nube",
            consolas: ["Nintendo Switch 2"],
            editor: "Nintendo",
            idiomas: ["Japonés", "Inglés (británico)", "Francés", "Alemán", "Italiano", "Español", "Coreano", "Holandés", "Ruso", "Chino (simplificado)", "Español (América Latina)", "Francés (Canadá)", "Portugués (Brasil)", "Chino (tradicional)", "Ingles (EE.UU.)", "Polaco"],
            lanzamiento: "5 de noviembre de 2026",
            clasificacion: "Everyone 10+"
        }
    },
    template: `
    <div>
        <h2>Acerca de este producto</h2>
        <ul>
            <li>
                <h3>Tamaño del archivo (estimado)</h3>
                <p>{{tamanio}}</p>
            </li>
            <li>
                <h3>Modos de juego compatibles</h3>
                <ul>
                    <li v-for="modo in modos" :key="modo">
                    {{modo}}
                    </li>
                </ul>
            </li>
            <li>
                <h3>Número de jugadores</h3>
                <p>{{jugadores}}</p>
            </li>
            <li>
                <h3>Nintendo Switch Online</h3>
                <p>{{online}}</p>
            </li>
            <li>
                <h3>Consolas</h3>
                <p>{{consolas.join(", ")}}</p>
            </li>
            <li>
                <h3>Editor</h3>
                <p>{{editor}}</p>
            </li>
            <li>
                <h3>Idiomas compatibles</h3>
                <p>{{idiomas.join(", ")}}</p>
            </li>
            <li>
                <h3>Fecha de lanzamiento</h3>
                <p>{{lanzamiento}}</p>
            </li>
            <li>
                <h3>Clasificación ESRB</h3>
                <p>{{clasificacion}}</p>
            </li>
        </ul>
    </div>
    `
});

app.component("carousel", {
    data() {
        return {
            imagenes: [
                {
                    id: 1,
                    img: "imgs/galeria/galeria1.webp",
                    alt: ""
                },
                {
                    id: 2,
                    img: "imgs/galeria/galeria2.webp",
                    alt: ""
                },
                {
                    id: 3,
                    img: "imgs/galeria/galeria3.webp",
                    alt: ""
                },
                {
                    id: 4,
                    img: "imgs/galeria/galeria4.webp",
                    alt: ""
                },
                {
                    id: 5,
                    img: "imgs/galeria/galeria5.webp",
                    alt: ""
                },
                {
                    id: 6,
                    img: "imgs/galeria/galeria6.webp",
                    alt: ""
                },
                {
                    id: 7,
                    img: "imgs/galeria/galeria7.webp",
                    alt: ""
                }
            ]
        }
    },
    template: `
        <div id="galeria" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <template v-for="(imagen, indice) in imagenes" :key="imagen.id">
                    <div class="carousel-item" :class="{active: indice == 0}">
                        <img :src="imagen.img" :alt="imagen.alt" class="d-block w-100 ">
                    </div>
                </template>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#galeria" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#galeria" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `,
    methods: {

    }
});

const viewModel = app.mount('#app');


viewModel.mensaje = "mesi";