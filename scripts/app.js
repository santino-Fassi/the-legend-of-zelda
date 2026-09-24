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

app.component("descubre", {
    data() {
        return {

        };
    },
    template: `
        <div>
			<nav>
				<div class="nav nav-tabs" id="nav-tab" role="tablist">
					<button class="nav-link active" id="nav-historia-tab" data-bs-toggle="tab" data-bs-target="#historia" type="button" role="tab" aria-controls="nav-historia" aria-selected="true">Historia del mundo</button>
					<button class="nav-link" id="nav-mejoras-tab" data-bs-toggle="tab" data-bs-target="#mejoras" type="button" role="tab" aria-controls="nav-mejoras" aria-selected="false">Cambios y Mejoras</button>
				</div>
			</nav>
			<div class="tab-content" id="nav-tabContent">
				<section id="historia" class="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-historia-tab" tabindex="0">
					<historia></historia>
				</section>

				<section id="mejoras" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-mejoras-tab" tabindex="1">
					<mejoras></mejoras>
				</section>
			</div>
        </div>
    `,
    methods: {

    }
});

app.component("historia", {
    data() {
        return {

        };

    },
    template: `
    <div>
        <h2>Descubre la historia</h2>
        <h3>El nacimiento del reino de Hyrule</h3>
        <blockquote>
            <div class="contenedor-contenido">
                <p>
                    Antes de que el tiempo comenzara, antes de que los espíritus y la vida existieran... Tres diosas
                    doradas descendieron sobre el caos que era Hyrule: Din, la diosa del Poder... Nayru, la diosa de
                    la Sabiduría... y Farore, la diosa del Valor.<br>
                    Din, con sus fuertes brazos de fuego, cultivó la tierra y creó el suelo rojo. Nayru derramó su
                    sabiduría sobre la tierra y dio el espíritu de la ley al mundo. Farore, con su rica alma,
                    produjo todas las formas de vida que mantendrían la ley.<br>
                    Las tres grandes diosas, habiendo completado su trabajo, partieron hacia los cielos. Y en el
                    punto de donde salieron, dejaron tres triángulos dorados, la Trifuerza. Un triangulo sagrado capaz de hacer realidad cualquier deseo. Desde entonces, el lugar donde se
                    encuentra la Trifuerza ha sido el Reino Sagrado.
                </p>
                <p>-El Gran Árbol Deku</p>
            </div>
        </blockquote>

        <img src="imgs/historia/las-tres-diosas.webp" alt="">

        <h3>Una tierra dividida</h3>

        <div class="contenedor-contenido">
            <p>Antes de la aventura de Link, Hyrule atravesó una época de enfrentamientos que cambiaría para siempre
                el destino de sus pueblos.</p>

            <p>Hace mucho tiempo, el reino de Hyrule se vio envuelta en una gran guerra, muchos afirman que se
                inició gracias a la codicia de la gente. Querían los tres triángulos dorados, la Trifuerza.<br>
                En medio del caos, una mujer huyó del campo de batalla llevando consigo a su bebé. En el camino
                hacia un lugar seguro, fue gravemente herida, pero pudo llegar hasta el Bosque Kokiri. Allí, con su
                último aliento, dejó al niño al cuidado del Gran Árbol Deku, esperando que pudiera crecer lejos de
                la guerra. El nombre del bebé era Link.<br>
                Este chico creció en el bosque junto con los Kokiri, una raza de niños eternos que viven dentro del
                bosque al cuidado del Gran Árbol y sus hadas compañeras. La infancia de Link no fue fácil, puesto
                que como no era uno de ellos y no tenía su propia hada, siempre lo trataron diferente.
            </p>
        </div>

        <img src="imgs/historia/conflicto.webp" alt="">

        <h3>Una terrible visión</h3>
        <div class="contenedor-contenido">
            <p>
                Años después de la terrible guerra de Hyrule, Link tuvo una extraña pesadilla cuya gravedad aún no era capaz de comprender.<br>
                Una mujer con ropajes de guerrera huía a caballo junto a una niña, perseguidas desde el castillo por un oscuro jinete. Cuando el jinete las perdió de vista, reparó en Link y lo observó con una sonrisa temible, justo antes de que despertara.<br>
                Link aún no sabía quiénes eran aquellas personas ni qué significaba aquel sueño. Solo sabía que algo estaba a punto de comenzar. Ya que, al despertar, descubrió que por fin había recibido a su hada.<br>
                Navi, la pequeña hada enviada para ser la compañera de Link, le explica que el Árbol Deku lo necesita.
            </p>
        </div>

        <img src="imgs/historia/link-durmiendo.webp" alt="">

    </div>

    `,
    methods: {

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