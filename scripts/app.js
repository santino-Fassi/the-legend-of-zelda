const app = Vue.createApp({
    data() {
        return {
            producto: {
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
        }
    },
    methods: {

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
                <p class="fst-italic">
                    Antes de que el tiempo comenzara, antes de que los espíritus y la vida existieran... <strong>Tres diosas
                    doradas descendieron sobre el caos que era Hyrule: Din, la diosa del Poder... Nayru, la diosa de
                    la Sabiduría... y Farore, la diosa del Valor.</strong><br>
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

        <img src="imgs/historia/las-tres-diosas.webp" alt="Ilustración de las tres diosas creando el mundo">

        <h3>Una tierra dividida</h3>

        <div class="contenedor-contenido">
            <p>Antes de la aventura de Link, Hyrule atravesó una época de enfrentamientos que cambiaría para siempre
                el destino de sus pueblos.</p>

            <p>Hace mucho tiempo, el reino de Hyrule se vio envuelta en una gran guerra, muchos afirman que se
                inició gracias a la codicia de la gente. Querían los tres triángulos dorados, la Trifuerza.<br>
                <em>En medio del caos, una mujer huyó del campo de batalla llevando consigo a su bebé. En el camino
                hacia un lugar seguro, fue gravemente herida, pero pudo llegar hasta el Bosque Kokiri.</em> Allí, con su
                último aliento, dejó al niño al cuidado del Gran Árbol Deku, esperando que pudiera crecer lejos de
                la guerra. El nombre del bebé era Link.<br>
                Este chico creció en el bosque junto con los Kokiri, una raza de niños eternos que viven dentro del
                bosque al cuidado del Gran Árbol y sus hadas compañeras. <strong>La infancia de Link no fue fácil, puesto
                que como no era uno de ellos y no tenía su propia hada, siempre lo trataron diferente.</strong>
            </p>
        </div>

        <img src="imgs/historia/conflicto.webp" alt="Ilustración de la Gran Guerra Civil de Hyrule">

        <h3>Una terrible visión</h3>
        <div class="contenedor-contenido">
            <p>
                Años después de la terrible guerra de Hyrule, <em>Link tuvo una extraña pesadilla cuya gravedad aún no era capaz de comprender.</em><br>
                Una mujer con ropajes de guerrera huía a caballo junto a una niña, perseguidas desde el castillo por un oscuro jinete. Cuando el jinete las perdió de vista, reparó en Link y lo observó con una sonrisa temible, justo antes de que despertara.<br>
                Link aún no sabía quiénes eran aquellas personas ni qué significaba aquel sueño. Solo sabía que algo estaba a punto de comenzar. Ya que, al despertar, descubrió que por fin había recibido a su hada.<br>
                Navi, la pequeña hada enviada para ser la compañera de Link, le explica que el Árbol Deku lo necesita.
            </p>
        </div>

        <img src="imgs/historia/link-durmiendo.webp" alt="Link durmiendo en su casa antes de comenzar su aventura">

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
                    img: "imgs/mejoras/ocarina.webp",
                    alt: "Ocarina del Tiempo junto con las tres piedras espirituales"
                },
                {
                    id: 2,
                    titulo: "Link se mueve de una forma diferente",
                    texto: "El control fue rediseñado para una experiencia más moderna: movimiento más suave, salto manual y cámara libre para explorar Hyrule con mayor libertad.",
                    img: "imgs/mejoras/templo-agua.webp",
                    alt: "Link usando el gancho en el Templo del Agua"
                },
                {
                    id: 3,
                    titulo: "Hyrule nunca estático",
                    texto: "El ciclo de día y noche ahora continúa también dentro de los pueblos, haciendo que lugares como la Ciudadela de Hyrule se sientan más vivos mientras los recorrés.",
                    img: "imgs/mejoras/ciudadela.webp",
                    alt: "Link recorriendo la Ciudadela de Hyrule"
                },
                {
                    id: 4,
                    titulo: "Cinemáticas reimaginadas y con doblajes de voz",
                    texto: "Las cinemáticas cuentan con actuaciones de voz y los personajes reciben nuevos diálogos, aportando otra dimensión a momentos que los fans recuerdan desde hace años.",
                    img: "imgs/mejoras/darunia.webp",
                    alt: "Link y Darunia forjando una hermandad"
                },
                {
                    id: 5,
                    titulo: "Canta las canciones y descubre sus efectos",
                    texto: "Con el micrófono de Switch 2, podés tararear una melodía aprendida para que Link la toque dentro del juego.",
                    img: "imgs/mejoras/sheik.webp",
                    alt: "Sheik tocando su instrumento ancestral"
                },
                {
                    id: 6,
                    titulo: "Tu historia, reunida en un solo lugar",
                    texto: "Una nueva función permite consultar tu progreso y el próximo objetivo de la aventura. A medida que avances en el juego, un gran tapiz de la historia se va completando y convierte tu recorrido en una verdadera leyenda.",
                    img: "imgs/mejoras/progreso.webp",
                    alt: "Menú 'Hilos del Tiempo' que registra el progreso del jugador"
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

        }
    },
    props: ['tamanio', 'modos', 'jugadores', 'online', 'consolas', 'editor', 'idiomas', 'lanzamiento', 'clasificacion'],
    template: `

    <div>
        <ul class="lista-datos">
            <li class="card-dato">
                <h3>Tamaño del archivo (estimado)</h3>
                <p>{{tamanio}}</p>
            </li>

            <li class="card-dato">
                <h3>Modos de juego compatibles</h3>

                <ul>
                    <li v-for="modo in modos" :key="modo">
                    {{modo}}
                    </li>
                </ul>
            </li>

            <li class="card-dato">
                <h3>Número de jugadores</h3>
                <p>{{jugadores}}</p>
            </li>

            <li class="card-dato">
                <h3>Nintendo Switch Online</h3>
                <p>{{online}}</p>
            </li>

            <li class="card-dato">
                <h3>Consolas</h3>
                <p>{{consolas.join(", ")}}</p>
            </li>

            <li class="card-dato">
                <h3>Editor</h3>
                <p>{{editor}}</p>
            </li>

            <li class="card-dato">
                <h3>Idiomas compatibles</h3>
                <p>{{idiomas.join(", ")}}</p>
            </li>

            <li class="card-dato">
                <h3>Fecha de lanzamiento</h3>
                <p>{{lanzamiento}}</p>
            </li>

            <li class="card-dato">
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
                    alt: "Link sacando la Espada Maestra de su pedestal"
                },
                {
                    id: 2,
                    img: "imgs/galeria/galeria2.webp",
                    alt: "Despedida de Link y Saria en el bosque Kokiri"
                },
                {
                    id: 3,
                    img: "imgs/galeria/galeria3.webp",
                    alt: "Link tocando la nana de Zelda"
                },
                {
                    id: 4,
                    img: "imgs/galeria/galeria4.webp",
                    alt: "Zelda niña en el patio de la familia real"
                },
                {
                    id: 5,
                    img: "imgs/galeria/galeria5.webp",
                    alt: "Ganondorf en su caballo apareciendose frente a Link"
                },
                {
                    id: 6,
                    img: "imgs/galeria/galeria6.webp",
                    alt: "Link peleando contra Phantom Ganon"
                },
                {
                    id: 7,
                    img: "imgs/galeria/galeria7.webp",
                    alt: "Link arriba de su yegua Epona"
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
            <a tabindex="0" class="btn" type="button" data-bs-custom-class="pop-overs" data-bs-trigger="focus" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" :data-bs-content="mensaje()" @click="rebotar()">
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
            },
            porcentajes: {},
            haciendoFormulario: true,
            perfil: {
                nombre: "",
                personalidad: null,
                raza: null,
                trifuerza: null
            }
        }
    },

    mounted() {
        this.cargarPerfil();
    },

    template: `
        <div v-if="haciendoFormulario == true">
            <h2 class="h1">¿Qué destino te depara?</h2>
            <p>Las decisiones que tomes determinarán qué clase de aventurero serías, a qué pueblo pertenecerías y qué fragmento de la Trifuerza resonaría contigo.</p>
            <form class="row g-3" action="#" method="post" enctype="multipart/form-data" @submit.prevent="calcularResultado">
                <div class="col-12">
						<label class="form-label" for="inputNombre">¿Cómo te gustaría que te llamen?</label>
						<input class="form-control" type="text" id="inputNombre" name="nombre" required v-model.trim.lazy="perfil.nombre">
                </div>
                <div class="col-md-6 d-flex flex-column" v-for="(pregunta, index) in preguntas" :key="index">
                    <h3>{{pregunta.titulo}}</h3>
                    <label :for="'inputPregunta' + index" class="form-label mb-2">{{pregunta.texto}}</label>
                    <select class="form-select mt-auto" :id="'inputPregunta' + index" required v-model="respuestas[index]">
                        <option selected disabled value="">Elige...</option>
                        <option v-for="(opcion, index2) in pregunta.opciones" :value="opcion.valor" :key="index2">{{opcion.texto}}</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Ver resultados</button>
            </form>
        </div>

        <div v-else>
            <h2 class="h1">Tu Perfil</h2>
            <p class="h2">{{perfil.nombre}}</p>

            <section class="personalidad">
                <h3 class="fw-bold">Tu Personalidad</h3>
                <h4>{{perfil.personalidad.simbolo}}{{perfil.personalidad.nombre}}</h4>
                <h5 class="fst-italic border-bottom">{{perfil.personalidad.subtitulo}}</h5>
                <p>{{perfil.personalidad.descripcion}}</p>
            </section>

            <section class="raza">
                <h3 class="fw-bold">Tu Raza</h3>
                <h4>{{perfil.raza.simbolo}}{{perfil.raza.nombre}}</h4>
                <h5 class="fst-italic border-bottom">{{perfil.raza.subtitulo}}</h5>
                <p>{{perfil.raza.descripcion}}</p>
            </section>

            <section class="trifuerza">
                <h3 class="fw-bold">Tu Trifuerza</h3>
                <h4>{{perfil.trifuerza.simbolo}}{{perfil.trifuerza.nombre}}</h4>
                <h5 class="fst-italic border-bottom">{{perfil.trifuerza.subtitulo}}</h5>
                <p>{{perfil.trifuerza.descripcion}}</p>
            </section>

            <section class="resultados">
                <h3>Tus Resultados</h3>
                <ul>
                    <li v-for="(porcentaje, index) in Object.entries(porcentajes)" :key="index">
                        <h4>{{nombreAtributos(porcentaje[0])}}</h4>
                        <div class="progress dark-bar" role="progressbar" :aria-label="'Porcentaje de atributo' + nombreAtributos(porcentaje[0])" :aria-valuenow="porcentaje[1]" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" :style="'width: ' + porcentaje[1] + '%'" :class="porcentaje[0]"></div>
                        </div>
                    </li>
                </ul>
            </section>

            <section class="respuestas">
                <h3>Tus Respuestas</h3>
                <ol>
                    <li v-for="(pregunta, index) in preguntas" :key="index">
                        <h4>{{pregunta.titulo}}</h4>
                        <p>{{pregunta.texto}}</p>

                        <p><strong>{{obtenerTextoRespuesta(index)}}</strong></p>
                    </li>
                </ol>
            </section>

            <button type="button" class="btn btn-primary" @click="reiniciarQuiz()">Hacer el cuestionario de nuevo</button>
        </div>
    `,
    methods: {
        nombreAtributos(atributo) {
            const nombres = {
                coraje: "Coraje",
                sabiduria: "Sabiduría",
                poder: "Poder",
                inteligencia: "Inteligencia",
                curiosidad: "Curiosidad",
                empatia: "Empatía",
                astucia: "Astucia"
            };

            return nombres[atributo] || atributo;
        },

        calcularResultado() {
            this.reiniciarAtributos();

            for (const respuesta of this.respuestas) {
                if (!respuesta) continue;
                const resultado = JSON.parse(respuesta);
                this.sumarAtributos(resultado);
            }

            this.normalizarAtributos();
            this.perfil.personalidad = this.determinarPersonalidad();
            this.perfil.raza = this.determinarRaza();
            this.perfil.trifuerza = this.determinarTrifuerza();

            this.haciendoFormulario = false;

            this.imprimirAtributos();

            this.guardarPerfil();
        },

        sumarAtributos(atributos) {
            for (const [clave, valor] of Object.entries(atributos)) {
                if (clave in this.atributos) {
                    this.atributos[clave] += valor;
                }
                else {
                    console.warn("No deberías ver esto. Algo salió mal!");
                }
            }
        },

        imprimirAtributos() {
            for (const [clave, valor] of Object.entries(this.atributos)) {
                console.log(`${clave}: ${valor}`);
            }
            console.log("\n\n");
        },

        guardarPerfil() {
            const str_perfil = JSON.stringify(this.perfil);
            localStorage.setItem("perfil", str_perfil);

            const str_atributos = JSON.stringify(this.atributos);
            localStorage.setItem("atributos", str_atributos);

            const str_porcentajes = JSON.stringify(this.porcentajes);
            localStorage.setItem("porcentajes", str_porcentajes);

            const str_respuestas = JSON.stringify(this.respuestas);
            localStorage.setItem("respuestas", str_respuestas);

        },

        cargarPerfil() {
            if (localStorage.getItem("perfil")) {
                this.perfil = JSON.parse(localStorage.getItem("perfil"));
            }
            if (localStorage.getItem("atributos")) {
                this.atributos = JSON.parse(localStorage.getItem("atributos"));
            }
            if (localStorage.getItem("porcentajes")) {
                this.porcentajes = JSON.parse(localStorage.getItem("porcentajes"));
            }
            if (localStorage.getItem("respuestas")) {
                this.respuestas = JSON.parse(localStorage.getItem("respuestas"));
            }
            if (this.perfil.nombre != "") {
                this.haciendoFormulario = false;
            }
            

        },

        obtenerPosiblesAtributosMaximos() {
            const maximos = {};

            for (const clave in this.atributos) {
                maximos[clave] = 0;
            }

            for (const pregunta of this.preguntas) {

                const maximoPregunta = {};

                for (const opcion of pregunta.opciones) {
                    const valores = JSON.parse(opcion.valor);

                    for (const clave in valores) {
                        maximoPregunta[clave] = Math.max(maximoPregunta[clave] || 0, valores[clave]);
                    }
                }

                for (const clave in maximos) {
                    maximos[clave] += maximoPregunta[clave] || 0;
                }
            }

            return maximos;
        },

        normalizarAtributos() {
            const maximos = this.obtenerPosiblesAtributosMaximos();

            for (const clave in this.atributos) {
                const maximo = maximos[clave];

                this.porcentajes[clave] = Math.min(100, Math.round((this.atributos[clave] / maximo) * 100));
            }
        },

        calcularAfinidad(combinacion) {
            return combinacion.reduce((total, [atributo, peso]) => {
                return total + this.porcentajes[atributo] * peso;
            }, 0);
        },

        determinarPersonalidad() {
            const virtudes = [
                this.porcentajes.coraje,
                this.porcentajes.sabiduria,
                this.porcentajes.poder
            ];

            const maxVirtud = Math.max(...virtudes);
            const minVirtud = Math.min(...virtudes);

            if (maxVirtud - minVirtud <= 10 && maxVirtud >= 40) {
                return {
                    nombre: "El Héroe",
                    subtitulo: "El equilibrio entre las tres virtudes",
                    simbolo: "⭐",
                    descripcion: "No hay una sola virtud que defina tu camino. Coraje, Sabiduría y Poder conviven en equilibrio, y tu fortaleza nace de saber cuándo utilizar cada una."
                };
            }

            const personalidades = [
                {
                    nombre: "El Explorador",
                    subtitulo: "Nada permanece desconocido por mucho tiempo",
                    simbolo: "🌿",
                    descripcion: "La curiosidad te lleva más lejos que cualquier mapa. Preferís descubrir secretos, recorrer caminos desconocidos y encontrar cosas que otros pasaron por alto.",
                    afinidad: this.calcularAfinidad([
                        ["curiosidad", 0.6],
                        ["inteligencia", 0.4]
                    ])
                },
                {
                    nombre: "El Guerrero",
                    subtitulo: "El peligro es un desafío, no un obstáculo",
                    simbolo: "⚔️",
                    descripcion: "No dudás cuando llega el momento de actuar. Te atraen los desafíos y confías en tu determinación para superar aquello que se interponga en tu camino.",
                    afinidad: this.calcularAfinidad([
                        ["coraje", 0.6],
                        ["poder", 0.4]
                    ])
                },
                {
                    nombre: "El Estratega",
                    subtitulo: "La mente también puede ser un arma",
                    simbolo: "🧠",
                    descripcion: "Preferís comprender antes de actuar. Observás, analizás y buscás una solución inteligente antes de entrar en combate o tomar una decisión difícil.",
                    afinidad: this.calcularAfinidad([
                        ["inteligencia", 0.6],
                        ["astucia", 0.4]
                    ])
                },
                {
                    nombre: "El Sabio",
                    subtitulo: "Comprender es la primera forma de vencer",
                    simbolo: "🔮",
                    descripcion: "Tu paciencia y sensibilidad te llevan a buscar respuestas antes de actuar. Te importa tanto entender el mundo como entender a quienes te rodean.",
                    afinidad: this.calcularAfinidad([
                        ["sabiduria", 0.6],
                        ["empatia", 0.4]
                    ])
                },
                {
                    nombre: "El Pícaro",
                    subtitulo: "Siempre existe otro camino",
                    simbolo: "🦊",
                    descripcion: "Sos adaptable y difícil de predecir. Cuando aparece un problema, preferís usar el ingenio, improvisar y encontrar una solución que nadie más había considerado.",
                    afinidad: this.calcularAfinidad([
                        ["astucia", 0.6],
                        ["curiosidad", 0.4]
                    ])
                },
                {
                    nombre: "El Guardián",
                    subtitulo: "Tu mayor fuerza es proteger a los demás",
                    simbolo: "🛡️",
                    descripcion: "Las personas que te importan ocupan un lugar central en tus decisiones. Tenés el valor necesario para ponerte en peligro cuando alguien necesita tu ayuda.",
                    afinidad: this.calcularAfinidad([
                        ["empatia", 0.6],
                        ["coraje", 0.4]
                    ])
                },
                {
                    nombre: "El Conquistador",
                    subtitulo: "El destino está ahí para ser cambiado",
                    simbolo: "👑",
                    descripcion: "Tenés una voluntad fuerte y una gran determinación. Cuando querés alcanzar algo, utilizás todos los recursos disponibles para convertir tu objetivo en realidad.",
                    afinidad: this.calcularAfinidad([
                        ["poder", 0.6],
                        ["astucia", 0.4]
                    ])
                }

            ];

            return personalidades.sort((a, b) => b.afinidad - a.afinidad)[0];
        },

        determinarRaza() {
            const razas = [
                {
                    nombre: "Kokiri",
                    subtitulo: "Hijos del bosque",
                    simbolo: "🌳",
                    descripcion: "Tu curiosidad y tu conexión con los demás te harían sentir como en casa bajo la protección del Gran Árbol Deku.",
                    afinidad: this.calcularAfinidad([
                        ["curiosidad", 0.45],
                        ["empatia", 0.35],
                        ["sabiduria", 0.2]
                    ])
                },
                {
                    nombre: "Goron",
                    subtitulo: "Espíritus de la montaña",
                    simbolo: "🔥",
                    descripcion: "Directo, resistente y decidido. Los desafíos difíciles no te intimidan y preferís enfrentarlos de frente.",
                    afinidad: this.calcularAfinidad([
                        ["coraje", 0.45],
                        ["poder", 0.35],
                        ["empatia", 0.2]
                    ])
                },
                {
                    nombre: "Zora",
                    subtitulo: "Guardianes de las aguas",
                    simbolo: "💧",
                    descripcion: "Tu paciencia y sensibilidad encajan con los Zora. Observás antes de actuar y valorás el conocimiento.",
                    afinidad: this.calcularAfinidad([
                        ["sabiduria", 0.45],
                        ["empatia", 0.35],
                        ["inteligencia", 0.2]
                    ])
                },
                {
                    nombre: "Gerudo",
                    subtitulo: "Guerreras del desierto",
                    simbolo: "🏜️",
                    descripcion: "Independiente y decidido, no necesitás seguir el camino marcado. Tu astucia y ambición te permiten adaptarte incluso a las situaciones más difíciles.",
                    afinidad: this.calcularAfinidad([
                        ["astucia", 0.45],
                        ["poder", 0.35],
                        ["curiosidad", 0.2]
                    ])
                },
                {
                    nombre: "Sheikah",
                    subtitulo: "Servidores de la oscuridad",
                    simbolo: "👁️",
                    descripcion: "Tu forma de observar, analizar y buscar respuestas te convertiría en un guardían natural de los secretos de Hyrule.",
                    afinidad: this.calcularAfinidad([
                        ["sabiduria", 0.4],
                        ["inteligencia", 0.35],
                        ["astucia", 0.25]
                    ])
                },
                {
                    nombre: "Hyliano",
                    subtitulo: "Habitantes del reino",
                    simbolo: "🏰",
                    descripcion: "Tu personalidad combina distintas virtudes. Sos adaptable y podés desenvolverte tanto frente al peligro como en situaciones que requieren reflexión.",
                    afinidad: this.calcularAfinidad([
                        ["coraje", 0.35],
                        ["sabiduria", 0.35],
                        ["inteligencia", 0.3]
                    ])
                }
            ];

            return razas.sort((a, b) => b.afinidad - a.afinidad)[0];
        },

        determinarTrifuerza() {
            const virtudes = [
                {
                    atributo: "coraje",
                    nombre: "Trifuerza del Coraje",
                    subtitulo: "El valor para avanzar",
                    simbolo: "💚",
                    descripcion: "Tu mayor virtud es el Coraje. No significa que nunca tengas miedo, sino que estás dispuesto a avanzar incluso cuando el camino resulta peligroso."
                },
                {
                    atributo: "sabiduria",
                    nombre: "Trifuerza de la Sabiduría",
                    subtitulo: "El conocimiento para entender",
                    simbolo: "💙",
                    descripcion: "Tu mayor virtud es la Sabiduría. Preferís comprender una situación antes de actuar y encontrar respuestas donde otros solo ven obstáculos."
                },
                {
                    atributo: "poder",
                    nombre: "Trifuerza del Poder",
                    subtitulo: "La voluntad para cambiar el destino",
                    simbolo: "💗",
                    descripcion: "Tu mayor virtud es el Poder. Tenés una voluntad firme y la determinación necesaria para perseguir aquello que te proponés."
                }
            ];

            const diffCS = Math.abs(this.porcentajes.coraje - this.porcentajes.sabiduria);
            const diffSP = Math.abs(this.porcentajes.sabiduria - this.porcentajes.poder);
            const diffCP = Math.abs(this.porcentajes.coraje - this.porcentajes.poder);

            if (diffCS <= 5 && diffSP <= 5 && diffCP <= 5) {
                return {
                    atributo: "La Trifuerza Reunida",
                    nombre: "La Trifuerza Reunida",
                    subtitulo: "El equilibrio de un alma pura",
                    simbolo: "💛",
                    descripcion: "Tus virtudes están perfectamente equilibradas. Eres una persona digna de obtener la Trifuerza completa, y así, traer a Hyrule una nueva era."
                }
            }

            return virtudes.sort((a, b) => this.porcentajes[b.atributo] - this.porcentajes[a.atributo])[0];
        },

        obtenerTextoRespuesta(indice) {
            const valorSeleccionado = this.respuestas[indice];
            const pregunta = this.preguntas[indice];
            const opcion = pregunta.opciones.find(opcion => opcion.valor === valorSeleccionado);

            return opcion? opcion.texto : "";
        },

        reiniciarAtributos() {
            for (const clave in this.atributos) {
                this.atributos[clave] = 0;
                this.porcentajes[clave] = 0;
            }
        },

        reiniciarQuiz() {
            this.respuestas = [];
            this.reiniciarAtributos();
            this.haciendoFormulario = true;
            this.perfil = {
                nombre: "",
                personalidad: null,
                raza: null,
                trifuerza: null
            };

            localStorage.clear();
        }
    }
});

const viewModel = app.mount('#app');

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {trigger: "focus"}));
