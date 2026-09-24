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

app.component("mejoras", {
    data() {
        return {
            tarjetas: [
                {
                    id: 1,
                    titulo: "Una Hyrule completamente renovada",
                    texto: "El reino de Hyrule ha sido reconstruido con nuevos gráficos, texturas, iluminación y materiales. Lugares que reconocés al instante vuelven a la vida con mucho más detalle.",
                    img: "imgs/ocarina.webp",
                    alt: ""
                },
                {
                    id: 2,
                    titulo: "Link se mueve de una forma diferente",
                    texto: "El control fue rediseñado para una experiencia más moderna: movimiento más suave, salto manual y cámara libre para explorar Hyrule con mayor libertad.",
                    img: "imgs/templo-agua.avif",
                    alt: ""
                },
                {
                    id: 3,
                    titulo: "Hyrule nunca estático",
                    texto: "El ciclo de día y noche ahora continúa también dentro de los pueblos, haciendo que lugares como la Ciudadela de Hyrule se sientan más vivos mientras los recorrés.",
                    img: "imgs/ciudadela.avif",
                    alt: ""
                },
                {
                    id: 4,
                    titulo: "Cinemáticas reimaginadas y con doblajes de voz",
                    texto: "Las cinemáticas cuentan con actuaciones de voz y los personajes reciben nuevos diálogos, aportando otra dimensión a momentos que los fans recuerdan desde hace años.",
                    img: "imgs/darunia.avif",
                    alt: ""
                },
                {
                    id: 5,
                    titulo: "Canta las canciones y descubre sus efectos",
                    texto: "Con el micrófono de Switch 2, podés tararear una melodía aprendida para que Link la toque dentro del juego.",
                    img: "imgs/sheik.avif",
                    alt: ""
                },
                {
                    id: 6,
                    titulo: "Tu historia, reunida en un solo lugar",
                    texto: "Una nueva función permite consultar tu progreso y el próximo objetivo de la aventura. A medida que avances en el juego, un gran tapiz de la historia se va completando y convierte tu recorrido en una verdadera leyenda.",
                    img: "imgs/progreso.avif",
                    alt: ""
                }
            ]

        };
    },
    template: `
        <div>
            <h2>¿Qué trae este remake?</h2>
            <p>Mirá de cerca cómo esta nueva versión reconstruye la aventura que ya conocés y la adapta a una nueva generación.</p>

            <div class="row justify-content-center g-4">
                <div class="col-12">
                    <div class="card h-100">
                        <img :src="tarjetas[0].img" :alt="tarjetas[0].alt" class="card-img-top">
                        <div class="card-body">
                            <h3 class="card-title">{{tarjetas[0].titulo}}</h3>
                            <p class="card-text">{{tarjetas[0].texto}}</p>
                        </div>
                    </div>
                </div>


                <div class="col-12 col-md-6 col-lg-4" v-for="tarjeta in tarjetas.slice(1)" :key="tarjeta.id">
                    <div class="card h-100">
                        <img :src="tarjeta.img" :alt="tarjeta.alt" class="card-img-top">
                        <div class="card-body">
                            <h3 class="card-title">{{tarjeta.titulo}}</h3>
                            <p class="card-text">{{tarjeta.texto}}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    `,
    methods: {

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