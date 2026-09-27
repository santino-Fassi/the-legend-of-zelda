const app = Vue.createApp({
    data() {
        return {
            mensaje: "Aprendiendo Vue",
            visible: true,
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
					<button class="nav-link active" id="nav-historia-tab" data-bs-toggle="tab" data-bs-target="#historia" type="button" role="tab" aria-controls="historia" aria-selected="true">Historia del mundo</button>
					<button class="nav-link" id="nav-mejoras-tab" data-bs-toggle="tab" data-bs-target="#mejoras" type="button" role="tab" aria-controls="mejoras" aria-selected="false">Cambios y Mejoras</button>
				</div>
			</nav>
			<div class="tab-content" id="nav-tabContent">
				<section id="historia" class="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-historia-tab" tabindex="0">
					<historia></historia>
				</section>

				<section id="mejoras" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-mejoras-tab" tabindex="0">
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

app.component("piedra", {
    data() {
        return {
            hoy: new Date(),
            lanzamiento: new Date(2026, 10, 5),
            rebotando: false
        }
    },
    template: `
        <div>
            <a tabindex="0" class="btn" type="button" data-bs-custom-class="pop-overs" data-bs-trigger="focus" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" :data-bs-content="this.mensaje()" @click="rebotar()">
                <img class="piedra-chismosa" :class="{'rebotar': rebotando}" @animationend="finRebote" src="imgs/gossip-stone.webp" alt="Piedra Chismosa">
            </a>
        </div>
    `,
    methods: {
        rebotar() {
            if (!this.rebotando) this.rebotando = true;
        },

        finRebote() {
            this.rebotando = false;
        },

        diasRestantes() {
            const diferencia = this.lanzamiento - this.hoy;
            const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

            return dias;
        },
        mensaje() {
            const dias = this.diasRestantes();
            if (dias > 0) {
                return `¡BOINNG! ¡BOINNG! ¡Faltan ${dias} días para el lanzamiento!`
            }
            else {
                return `¡BOINNG! ¡BOINNG! ¡El juego ya está disponible!`
            }
        }
    }
});

app.component("quiz-personalidad", {
    data() {
        return {
            nombre: "",
            respuestas: [],
            preguntas: [
                {
                    titulo: "El camino desconocido",
                    texto: "Encontrás un sendero que no aparece en ningún mapa. ¿Qué hacés?",
                    opciones: [
                        {valor: '{"curiosidad": 2, "coraje": 1}', texto: "A. Lo sigo inmediatamente. Quiero saber a dónde lleva."},
                        {valor: '{"sabiduria": 2, "inteligencia": 1}', texto: "B. Primero observo el entorno y busco posibles peligros."},
                        {valor: '{"astucia": 2, "poder": 1}', texto: "C. Sigo cautelosamente el camino, pero desde las sombras."},
                        {valor: '{"empatia": 2, "sabiduria": 1}', texto: "D. Marco un cartel en la entrada del sendero para futuros aventureros antes de continuar."}
                    ]
                },
                {
                    titulo: "Frente al peligro",
                    texto: "Un enemigo mucho más fuerte que vos bloquea el camino.",
                    opciones: [
                        {valor: '{"coraje": 2, "poder": 1}', texto: "A. Me enfrento a él. Retroceder no es una opción."},
                        {valor: '{"inteligencia": 2, "sabiduria": 1}', texto: "B. Estudio sus movimientos antes de atacar."},
                        {valor: '{"astucia": 2, "inteligencia": 1}', texto: "C. Busco una forma de distraerlo o engañarlo."},
                        {valor: '{"sabiduria": 2, "curiosidad": 1}', texto: "D. Intento encontrar otro camino. No tiene sentido arriesgarse innecesariamente."}
                    ]
                },
                {
                    titulo: "Un objeto misterioso",
                    texto: "Encontrás una reliquia antigua. Nadie sabe para qué sirve.",
                    opciones: [
                        {valor: '{"curiosidad": 2, "inteligencia": 1}', texto: "A. Intento descubrir su función por mi cuenta."},
                        {valor: '{"sabiduria": 2, "curiosidad": 1}', texto: "B. Investigo a mi alrededor en busca de más información."},
                        {valor: '{"poder": 2, "astucia": 1}', texto: "C. Me la quedo. Mejor tenerlo yo antes que mis enemigos."},
                        {valor: '{"empatia": 2, "sabiduria": 1}', texto: "D. Busco a alguien que me pueda ayudar a entenderla."}
                    ]
                },
                {
                    titulo: "Tu compañero",
                    texto: "¡Tu compañero está en peligro! ¿Qué hacés?",
                    opciones: [
                        {valor: '{"coraje": 2, "empatia": 1}', texto: "A. Voy directamente a rescatarlo, aunque sea peligroso."},
                        {valor: '{"inteligencia": 2, "empatia": 1}', texto: "B. Busco la manera más segura de salvarlo."},
                        {valor: '{"astucia": 2, "inteligencia": 1}', texto: "C. Planeo una trampa o distracción para rescatarlo sin enfrentar al enemigo directamente."},
                        {valor: '{"poder": 2, "astucia": 1}', texto: "D. Si no se puede defender solo, no me sirve."}
                    ]
                },
                {
                    titulo: "¿Qué buscás en una aventura?",
                    texto: "¿Qué es lo que más te atrae de una aventura?",
                    opciones: [
                        {valor: '{"curiosidad": 2, "sabiduria": 1}', texto: "A. Descubrir lugares que nadie conoce."},
                        {valor: '{"coraje": 2, "poder": 1}', texto: "B. Superar desafíos cada vez más difíciles."},
                        {valor: '{"inteligencia": 2, "curiosidad": 1}', texto: "C. Resolver misterios y descubrir cómo funcionan las cosas."},
                        {valor: '{"empatia": 2, "sabiduria": 1}', texto: "D. Conocer personas y aprender sus historias."},
                        {valor: '{"poder": 2, "coraje": 1}', texto: "E. Convertirme en alguien capaz de cambiar el destino."}
                    ]
                },
                {
                    titulo: "Tu lugar en Hyrule",
                    texto: "¿Dónde te gustaría pasar una tarde?",
                    opciones: [
                        {valor: '{"curiosidad": 2, "empatia": 1}', texto: "A. Bosque Kokiri."},
                        {valor: '{"coraje": 2, "poder": 1}', texto: "B. Montaña de la Muerte."},
                        {valor: '{"sabiduria": 2, "empatia": 1}', texto: "C. Dominio Zora."},
                        {valor: '{"poder": 2, "astucia": 1}', texto: "D. Fortaleza Gerudo."},
                        {valor: '{"inteligencia": 2, "sabiduria": 1}', texto: "E. Ciudadela de Hyrule"},
                        {valor: '{"astucia": 2, "poder": 1}', texto: "F. Aldea Kakariko"}
                    ]
                },
                {
                    titulo: "Una decisión difícil",
                    texto: "Tenés que elegir entre dos caminos. El camino A tiene poco riesgo pero menor recompensa, y el camino B tiene mayor riesgo pero mayor recompensa.",
                    opciones: [
                        {valor: '{"sabiduria": 2, "inteligencia": 1}', texto: "A. Camino A. Prefiero ir a lo seguro siempre."},
                        {valor: '{"coraje": 2, "poder": 1}', texto: "B. Camino B. Las mejores oportunidades siempre implican riesgos."},
                        {valor: '{"inteligencia": 2, "curiosidad": 1, "astucia": 1}', texto: "C. Intento descubrir ambas recompensas antes de decidir."},
                        {valor: '{"empatia": 2, "sabiduria": 1}', texto: "D. Dejo que otro decida y sigo con su plan."}
                    ]
                },
                {
                    titulo: "Tu forma de resolver problemas",
                    texto: "Una puerta está cerrada y no encontrás la llave.",
                    opciones: [
                        {valor: '{"curiosidad": 2, "inteligencia": 1}', texto: "A. Busco alrededor. Seguro hay algún mecanismo oculto."},
                        {valor: '{"poder": 2, "coraje": 1}', texto: "B. Intento abrirla por la fuerza."},
                        {valor: '{"inteligencia": 2, "astucia": 1}', texto: "C. Pienso en qué otra forma podría pasar."},
                        {valor: '{"sabiduria": 2, "curiosidad": 1}', texto: "D. Exploro el resto a ver si descubro otra cosa."}
                    ]
                },
                {
                    titulo: "El poder de la Trifuerza",
                    texto: "Frente tuyo aparece la Trifuerza. ¿Qué deseo pedirías?",
                    opciones: [
                        {valor: '{"coraje": 3, "empatia": 1}', texto: "A. Lo necesario para poder defender a quienes quiero."},
                        {valor: '{"sabiduria": 3, "inteligencia": 1}', texto: "B. Conocimiento infinito para comprender al mundo."},
                        {valor: '{"poder": 2, "coraje": 1}', texto: "C. Moldear al mundo a mi semejanza."},
                        {valor: '{"curiosidad": 1, "poder": 1, "coraje": 1, "sabiduria": 1}', texto: "D. No pediría nada. Prefiero forjar mi propio destino."}
                    ]
                },
                {
                    titulo: "Tu legado",
                    texto: "¿Cómo te gustaría ser recordado?",
                    opciones: [
                        {valor: '{"coraje": 2, "empatia": 1}', texto: "A. Como alguien que siempre estuvo ahí para los demás."},
                        {valor: '{"sabiduria": 2, "inteligencia": 1}', texto: "B. Como alguien que descubrió lugares nunca antes vistos."},
                        {valor: '{"poder": 2, "astucia": 1}', texto: "C. Como alguien que consiguió cambiar al mundo."},
                        {valor: '{"empatia": 2, "coraje": 1}', texto: "D. Como un héroe."},
                        {valor: '{"astucia": 2, "curiosidad": 1}', texto: "E. No me gustaría ser recordado."}
                    ]
                }
            ],
            atributos: {
                coraje: 0,
                sabiduria: 0,
                poder: 0,
                inteligencia: 0,
                curiosidad: 0,
                empatia: 0,
                astucia: 0
            }
        }
    },
    template: `
        <div>
            <h2>¿Qué destino te depara?</h2>
            <p>Las decisiones que tomes determinarán qué clase de aventurero serías, a qué pueblo pertenecerías y qué fragmento de la Trifuerza resonaría contigo.</p>
            <form class="row g-3" action="#" method="post" enctype="multipart/form-data" @submit.prevent="calcularResultado">
                <div class="col-12">
						<label class="form-label" for="inputNombre">¿Cómo te gustaría que te llamen?</label>
						<input class="form-control" type="text" id="inputNombre" name="nombre" required v-model="nombre">
                </div>
                <span>{{nombre}}</span>
                <span>{{respuestas}}</span>
                <div class="col-md-6" v-for="(pregunta, index) in preguntas" :key="index">
                    <h3>{{pregunta.titulo}}</h3>
                    <label :for="'inputPregunta' + index">{{pregunta.texto}}</label>
                    <select class="form-select" :id="'inputPregunta' + index" requiered v-model="respuestas[index]">
                        <option selected disabled value="">Elige...</option>
                        <option v-for="(opcion, index2) in pregunta.opciones" :value="opcion.valor" :key="index2">{{opcion.texto}}</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Ver resultados</button>
            </form>
        </div>
    `,
    methods: {
        calcularResultado() {
            for (respuesta of this.respuestas) {
                if (!respuesta) continue;
                const resultado = JSON.parse(respuesta);
                this.sumarAtributos(resultado);
            }
            //const resultados = JSON.parse(this.respuestas[0]);
            //this.sumarAtributos(prueba);

            this.imprimirAtributos();
        },

        sumarAtributos(atributos) {
            for (const [clave, valor] of Object.entries(atributos)) {
                if (clave in this.atributos) {
                    this.atributos[clave] += valor;
                }
                else {
                    alert("algo ta mal pibe");
                }
            }
        },

        imprimirAtributos() {
            for (const [clave, valor] of Object.entries(this.atributos)) {
                console.log(`${clave}: ${valor}`);
            }
            console.log("\n\n");
        }
    }
});

const viewModel = app.mount('#app');

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl), {
    trigger: "focus"
});
