<script>
import castilloImg from '@/assets/imgs/historia/castillo.webp'

export default {
  name: 'QuizView',
  data() {
    return {
      castilloImg,
      nombre: '',
      respuestas: [],
      haciendoFormulario: true,
      preguntas: [
        {
          titulo: 'El camino desconocido',
          texto: 'Encontrás un sendero que no aparece en ningún mapa. ¿Qué hacés?',
          opciones: [
            {
              valor: '{"curiosidad": 2, "coraje": 1}',
              texto: 'A. Lo sigo inmediatamente. Quiero saber a dónde lleva.',
            },
            {
              valor: '{"sabiduria": 2, "inteligencia": 1}',
              texto: 'B. Primero observo el entorno y busco posibles peligros.',
            },
            {
              valor: '{"astucia": 2, "poder": 1}',
              texto: 'C. Sigo cautelosamente el camino, pero desde las sombras.',
            },
            {
              valor: '{"empatia": 2, "sabiduria": 1}',
              texto:
                'D. Marco un cartel en la entrada del sendero para futuros aventureros antes de continuar.',
            },
          ],
        },
        {
          titulo: 'Frente al peligro',
          texto: 'Un enemigo mucho más fuerte que vos bloquea el camino.',
          opciones: [
            {
              valor: '{"coraje": 2, "poder": 1}',
              texto: 'A. Me enfrento a él. Retroceder no es una opción.',
            },
            {
              valor: '{"inteligencia": 2, "sabiduria": 1}',
              texto: 'B. Estudio sus movimientos antes de atacar.',
            },
            {
              valor: '{"astucia": 2, "inteligencia": 1}',
              texto: 'C. Busco una forma de distraerlo o engañarlo.',
            },
            {
              valor: '{"sabiduria": 2, "curiosidad": 1}',
              texto:
                'D. Intento encontrar otro camino. No tiene sentido arriesgarse innecesariamente.',
            },
          ],
        },
        {
          titulo: 'Un objeto misterioso',
          texto: 'Encontrás una reliquia antigua. Nadie sabe para qué sirve.',
          opciones: [
            {
              valor: '{"curiosidad": 2, "inteligencia": 1}',
              texto: 'A. Intento descubrir su función por mi cuenta.',
            },
            {
              valor: '{"sabiduria": 2, "curiosidad": 1}',
              texto: 'B. Investigo a mi alrededor en busca de más información.',
            },
            {
              valor: '{"poder": 2, "astucia": 1}',
              texto: 'C. Me la quedo. Mejor tenerlo yo antes que mis enemigos.',
            },
            {
              valor: '{"empatia": 2, "sabiduria": 1}',
              texto: 'D. Busco a alguien que me pueda ayudar a entenderla.',
            },
          ],
        },
        {
          titulo: 'Tu compañero',
          texto: '¡Tu compañero está en peligro! ¿Qué hacés?',
          opciones: [
            {
              valor: '{"coraje": 2, "empatia": 1}',
              texto: 'A. Voy directamente a rescatarlo, aunque sea peligroso.',
            },
            {
              valor: '{"inteligencia": 2, "empatia": 1}',
              texto: 'B. Busco la manera más segura de salvarlo.',
            },
            {
              valor: '{"astucia": 2, "inteligencia": 1}',
              texto:
                'C. Planeo una trampa o distracción para rescatarlo sin enfrentar al enemigo directamente.',
            },
            {
              valor: '{"poder": 2, "astucia": 1}',
              texto: 'D. Si no se puede defender solo, no me sirve.',
            },
          ],
        },
        {
          titulo: '¿Qué buscás en una aventura?',
          texto: '¿Qué es lo que más te atrae de una aventura?',
          opciones: [
            {
              valor: '{"curiosidad": 2, "sabiduria": 1}',
              texto: 'A. Descubrir lugares que nadie conoce.',
            },
            {
              valor: '{"coraje": 2, "poder": 1}',
              texto: 'B. Superar desafíos cada vez más difíciles.',
            },
            {
              valor: '{"inteligencia": 2, "curiosidad": 1}',
              texto: 'C. Resolver misterios y descubrir cómo funcionan las cosas.',
            },
            {
              valor: '{"empatia": 2, "sabiduria": 1}',
              texto: 'D. Conocer personas y aprender sus historias.',
            },
            {
              valor: '{"poder": 2, "coraje": 1}',
              texto: 'E. Convertirme en alguien capaz de cambiar el destino.',
            },
          ],
        },
        {
          titulo: 'Tu lugar en Hyrule',
          texto: '¿Dónde te gustaría pasar una tarde?',
          opciones: [
            { valor: '{"curiosidad": 2, "empatia": 1}', texto: 'A. Bosque Kokiri.' },
            { valor: '{"coraje": 2, "poder": 1}', texto: 'B. Montaña de la Muerte.' },
            { valor: '{"sabiduria": 2, "empatia": 1}', texto: 'C. Dominio Zora.' },
            { valor: '{"poder": 2, "astucia": 1}', texto: 'D. Fortaleza Gerudo.' },
            { valor: '{"inteligencia": 2, "sabiduria": 1}', texto: 'E. Ciudadela de Hyrule' },
            { valor: '{"astucia": 2, "poder": 1}', texto: 'F. Aldea Kakariko' },
          ],
        },
        {
          titulo: 'Una decisión difícil',
          texto:
            'Tenés que elegir entre dos caminos. El camino A tiene poco riesgo pero menor recompensa, y el camino B tiene mayor riesgo pero mayor recompensa.',
          opciones: [
            {
              valor: '{"sabiduria": 2, "inteligencia": 1}',
              texto: 'A. Camino A. Prefiero ir a lo seguro siempre.',
            },
            {
              valor: '{"coraje": 2, "poder": 1}',
              texto: 'B. Camino B. Las mejores oportunidades siempre implican riesgos.',
            },
            {
              valor: '{"inteligencia": 2, "curiosidad": 1, "astucia": 1}',
              texto: 'C. Intento descubrir ambas recompensas antes de decidir.',
            },
            {
              valor: '{"empatia": 2, "sabiduria": 1}',
              texto: 'D. Dejo que otro decida y sigo con su plan.',
            },
          ],
        },
        {
          titulo: 'Tu forma de resolver problemas',
          texto: 'Una puerta está cerrada y no encontrás la llave.',
          opciones: [
            {
              valor: '{"curiosidad": 2, "inteligencia": 1}',
              texto: 'A. Busco alrededor. Seguro hay algún mecanismo oculto.',
            },
            {
              valor: '{"poder": 2, "coraje": 1}',
              texto: 'B. Intento abrirla por la fuerza.',
            },
            {
              valor: '{"inteligencia": 2, "astucia": 1}',
              texto: 'C. Pienso en qué otra forma podría pasar.',
            },
            {
              valor: '{"sabiduria": 2, "curiosidad": 1}',
              texto: 'D. Exploro el resto a ver si descubro otra cosa.',
            },
          ],
        },
        {
          titulo: 'El poder de la Trifuerza',
          texto: 'Frente tuyo aparece la Trifuerza. ¿Qué deseo pedirías?',
          opciones: [
            {
              valor: '{"coraje": 3, "empatia": 1}',
              texto: 'A. Lo necesario para poder defender a quienes quiero.',
            },
            {
              valor: '{"sabiduria": 3, "inteligencia": 1}',
              texto: 'B. Conocimiento infinito para comprender al mundo.',
            },
            {
              valor: '{"poder": 2, "coraje": 1}',
              texto: 'C. Moldear al mundo a mi semejanza.',
            },
            {
              valor: '{"curiosidad": 1, "poder": 1, "coraje": 1, "sabiduria": 1}',
              texto: 'D. No pediría nada. Prefiero forjar mi propio destino.',
            },
          ],
        },
        {
          titulo: 'Tu legado',
          texto: '¿Cómo te gustaría ser recordado?',
          opciones: [
            {
              valor: '{"coraje": 2, "empatia": 1}',
              texto: 'A. Como alguien que siempre estuvo ahí para los demás.',
            },
            {
              valor: '{"sabiduria": 2, "inteligencia": 1}',
              texto: 'B. Como alguien que descubrió lugares nunca antes vistos.',
            },
            {
              valor: '{"poder": 2, "astucia": 1}',
              texto: 'C. Como alguien que consiguió cambiar al mundo.',
            },
            { valor: '{"empatia": 2, "coraje": 1}', texto: 'D. Como un héroe.' },
            {
              valor: '{"astucia": 2, "curiosidad": 1}',
              texto: 'E. No me gustaría ser recordado.',
            },
          ],
        },
      ],
    }
  },
  computed: {
    atributos() {
      const suma = {
        coraje: 0,
        sabiduria: 0,
        poder: 0,
        inteligencia: 0,
        curiosidad: 0,
        empatia: 0,
        astucia: 0,
      }

      for (const respuesta of this.respuestas) {
        if (!respuesta) continue
        const resultado = JSON.parse(respuesta)
        for (const [clave, valor] of Object.entries(resultado)) {
          if (clave in suma) {
            suma[clave] += valor
          }
        }
      }

      return suma
    },

    posiblesAtributosMaximos() {
      const maximos = {
        coraje: 0,
        sabiduria: 0,
        poder: 0,
        inteligencia: 0,
        curiosidad: 0,
        empatia: 0,
        astucia: 0,
      }

      for (const pregunta of this.preguntas) {
        const maximoPregunta = {}

        for (const opcion of pregunta.opciones) {
          const valores = JSON.parse(opcion.valor)

          for (const clave in valores) {
            maximoPregunta[clave] = Math.max(maximoPregunta[clave] || 0, valores[clave])
          }
        }

        for (const clave in maximos) {
          maximos[clave] += maximoPregunta[clave] || 0
        }
      }

      return maximos
    },

    porcentajes() {
      const resultado = {}
      const maximos = this.posiblesAtributosMaximos

      for (const clave in this.atributos) {
        const maximo = maximos[clave]
        resultado[clave] = maximo
          ? Math.min(100, Math.round((this.atributos[clave] / maximo) * 100))
          : 0
      }

      return resultado
    },

    personalidad() {
      const virtudes = [this.porcentajes.coraje, this.porcentajes.sabiduria, this.porcentajes.poder]

      const maxVirtud = Math.max(...virtudes)
      const minVirtud = Math.min(...virtudes)

      if (maxVirtud - minVirtud <= 10 && maxVirtud >= 40) {
        return {
          nombre: 'El Héroe',
          subtitulo: 'El equilibrio entre las tres virtudes',
          simbolo: '⭐',
          descripcion:
            'No hay una sola virtud que defina tu camino. Coraje, Sabiduría y Poder conviven en equilibrio, y tu fortaleza nace de saber cuándo utilizar cada una.',
        }
      }

      const personalidades = [
        {
          nombre: 'El Explorador',
          subtitulo: 'Nada permanece desconocido por mucho tiempo',
          simbolo: '🌿',
          descripcion:
            'La curiosidad te lleva más lejos que cualquier mapa. Preferís descubrir secretos, recorrer caminos desconocidos y encontrar cosas que otros pasaron por alto.',
          afinidad: this.calcularAfinidad([
            ['curiosidad', 0.6],
            ['inteligencia', 0.4],
          ]),
        },
        {
          nombre: 'El Guerrero',
          subtitulo: 'El peligro es un desafío, no un obstáculo',
          simbolo: '⚔️',
          descripcion:
            'No dudás cuando llega el momento de actuar. Te atraen los desafíos y confías en tu determinación para superar aquello que se interponga en tu camino.',
          afinidad: this.calcularAfinidad([
            ['coraje', 0.6],
            ['poder', 0.4],
          ]),
        },
        {
          nombre: 'El Estratega',
          subtitulo: 'La mente también puede ser un arma',
          simbolo: '🧠',
          descripcion:
            'Preferís comprender antes de actuar. Observás, analizás y buscás una solución inteligente antes de entrar en combate o tomar una decisión difícil.',
          afinidad: this.calcularAfinidad([
            ['inteligencia', 0.6],
            ['astucia', 0.4],
          ]),
        },
        {
          nombre: 'El Sabio',
          subtitulo: 'Comprender es la primera forma de vencer',
          simbolo: '🔮',
          descripcion:
            'Tu paciencia y sensibilidad te llevan a buscar respuestas antes de actuar. Te importa tanto entender el mundo como entender a quienes te rodean.',
          afinidad: this.calcularAfinidad([
            ['sabiduria', 0.6],
            ['empatia', 0.4],
          ]),
        },
        {
          nombre: 'El Pícaro',
          subtitulo: 'Siempre existe otro camino',
          simbolo: '🦊',
          descripcion:
            'Sos adaptable y difícil de predecir. Cuando aparece un problema, preferís usar el ingenio, improvisar y encontrar una solución que nadie más había considerado.',
          afinidad: this.calcularAfinidad([
            ['astucia', 0.6],
            ['curiosidad', 0.4],
          ]),
        },
        {
          nombre: 'El Guardián',
          subtitulo: 'Tu mayor fuerza es proteger a los demás',
          simbolo: '🛡️',
          descripcion:
            'Las personas que te importan ocupan un lugar central en tus decisiones. Tenés el valor necesario para ponerte en peligro cuando alguien necesita tu ayuda.',
          afinidad: this.calcularAfinidad([
            ['empatia', 0.6],
            ['coraje', 0.4],
          ]),
        },
        {
          nombre: 'El Conquistador',
          subtitulo: 'El destino está ahí para ser cambiado',
          simbolo: '👑',
          descripcion:
            'Tenés una voluntad fuerte y una gran determinación. Cuando querés alcanzar algo, utilizás todos los recursos disponibles para convertir tu objetivo en realidad.',
          afinidad: this.calcularAfinidad([
            ['poder', 0.6],
            ['astucia', 0.4],
          ]),
        },
      ]

      return personalidades.sort((a, b) => b.afinidad - a.afinidad)[0]
    },

    raza() {
      const razas = [
        {
          nombre: 'Kokiri',
          subtitulo: 'Hijos del bosque',
          simbolo: '🌳',
          descripcion:
            'Tu curiosidad y tu conexión con los demás te harían sentir como en casa bajo la protección del Gran Árbol Deku.',
          afinidad: this.calcularAfinidad([
            ['curiosidad', 0.45],
            ['empatia', 0.35],
            ['sabiduria', 0.2],
          ]),
        },
        {
          nombre: 'Goron',
          subtitulo: 'Espíritus de la montaña',
          simbolo: '🔥',
          descripcion:
            'Directo, resistente y decidido. Los desafíos difíciles no te intimidan y preferís enfrentarlos de frente.',
          afinidad: this.calcularAfinidad([
            ['coraje', 0.45],
            ['poder', 0.35],
            ['empatia', 0.2],
          ]),
        },
        {
          nombre: 'Zora',
          subtitulo: 'Guardianes de las aguas',
          simbolo: '💧',
          descripcion:
            'Tu paciencia y sensibilidad encajan con los Zora. Observás antes de actuar y valorás el conocimiento.',
          afinidad: this.calcularAfinidad([
            ['sabiduria', 0.45],
            ['empatia', 0.35],
            ['inteligencia', 0.2],
          ]),
        },
        {
          nombre: 'Gerudo',
          subtitulo: 'Guerreras del desierto',
          simbolo: '🏜️',
          descripcion:
            'Independiente y decidido, no necesitás seguir el camino marcado. Tu astucia y ambición te permiten adaptarte incluso a las situaciones más difíciles.',
          afinidad: this.calcularAfinidad([
            ['astucia', 0.45],
            ['poder', 0.35],
            ['curiosidad', 0.2],
          ]),
        },
        {
          nombre: 'Sheikah',
          subtitulo: 'Servidores de la oscuridad',
          simbolo: '👁️',
          descripcion:
            'Tu forma de observar, analizar y buscar respuestas te convertiría en un guardían natural de los secretos de Hyrule.',
          afinidad: this.calcularAfinidad([
            ['sabiduria', 0.4],
            ['inteligencia', 0.35],
            ['astucia', 0.25],
          ]),
        },
        {
          nombre: 'Hyliano',
          subtitulo: 'Habitantes del reino',
          simbolo: '🏰',
          descripcion:
            'Tu personalidad combina distintas virtudes. Sos adaptable y podés desenvolverte tanto frente al peligro como en situaciones que requieren reflexión.',
          afinidad: this.calcularAfinidad([
            ['coraje', 0.35],
            ['sabiduria', 0.35],
            ['inteligencia', 0.3],
          ]),
        },
      ]

      return razas.sort((a, b) => b.afinidad - a.afinidad)[0]
    },

    trifuerza() {
      const virtudes = [
        {
          atributo: 'coraje',
          nombre: 'Trifuerza del Coraje',
          subtitulo: 'El valor para avanzar',
          simbolo: '💚',
          descripcion:
            'Tu mayor virtud es el Coraje. No significa que nunca tengas miedo, sino que estás dispuesto a avanzar incluso cuando el camino resulta peligroso.',
        },
        {
          atributo: 'sabiduria',
          nombre: 'Trifuerza de la Sabiduría',
          subtitulo: 'El conocimiento para entender',
          simbolo: '💙',
          descripcion:
            'Tu mayor virtud es la Sabiduría. Preferís comprender una situación antes de actuar y encontrar respuestas donde otros solo ven obstáculos.',
        },
        {
          atributo: 'poder',
          nombre: 'Trifuerza del Poder',
          subtitulo: 'La voluntad para cambiar el destino',
          simbolo: '💗',
          descripcion:
            'Tu mayor virtud es el Poder. Tenés una voluntad firme y la determinación necesaria para perseguir aquello que te proponés.',
        },
      ]

      const diffCS = Math.abs(this.porcentajes.coraje - this.porcentajes.sabiduria)
      const diffSP = Math.abs(this.porcentajes.sabiduria - this.porcentajes.poder)
      const diffCP = Math.abs(this.porcentajes.coraje - this.porcentajes.poder)

      if (diffCS <= 5 && diffSP <= 5 && diffCP <= 5) {
        return {
          atributo: 'La Trifuerza Reunida',
          nombre: 'La Trifuerza Reunida',
          subtitulo: 'El equilibrio de un alma pura',
          simbolo: '💛',
          descripcion:
            'Tus virtudes están perfectamente equilibradas. Eres una persona digna de obtener la Trifuerza completa, y así, traer a Hyrule una nueva era.',
        }
      }

      return virtudes.sort((a, b) => this.porcentajes[b.atributo] - this.porcentajes[a.atributo])[0]
    },

    resumenRespuestas() {
      return this.preguntas.map((pregunta, index) => {
        const valorElegido = this.respuestas[index]
        const opcionElegida = pregunta.opciones.find((opcion) => opcion.valor === valorElegido)

        return {
          titulo: pregunta.titulo,
          texto: pregunta.texto,
          respuestaTexto: opcionElegida ? opcionElegida.texto : 'Sin responder',
        }
      })
    },
  },
  mounted() {
    this.cargarPerfil()
  },
  methods: {
    nombreAtributos(atributo) {
      const nombres = {
        coraje: 'Coraje',
        sabiduria: 'Sabiduría',
        poder: 'Poder',
        inteligencia: 'Inteligencia',
        curiosidad: 'Curiosidad',
        empatia: 'Empatía',
        astucia: 'Astucia',
      }

      return nombres[atributo] || atributo
    },
    calcularAfinidad(combinacion) {
      return combinacion.reduce((total, [atributo, peso]) => {
        return total + this.porcentajes[atributo] * peso
      }, 0)
    },
    calcularResultado() {
      this.haciendoFormulario = false
      this.imprimirAtributos()
      this.guardarPerfil()
    },
    imprimirAtributos() {
      for (const [clave, valor] of Object.entries(this.atributos)) {
        console.log(`${clave}: ${valor}`)
      }
      console.log('\n\n')
    },
    guardarPerfil() {
      localStorage.setItem('nombre', this.nombre)
      localStorage.setItem('respuestas', JSON.stringify(this.respuestas))
    },
    cargarPerfil() {
      const nombreGuardado = localStorage.getItem('nombre')
      const respuestasGuardadas = localStorage.getItem('respuestas')

      if (nombreGuardado) {
        this.nombre = nombreGuardado
      }
      if (respuestasGuardadas) {
        this.respuestas = JSON.parse(respuestasGuardadas)
      }
      if (this.nombre !== '' && this.respuestas.length > 0) {
        this.haciendoFormulario = false
      }
    },
    reiniciarQuiz() {
      this.nombre = ''
      this.respuestas = []
      this.haciendoFormulario = true
      localStorage.clear()
    },
  },
}
</script>

<template>
  <section id="quiz">
    <img :src="castilloImg" alt="Castillo de Hyrule" class="mb-4 rounded-4 shadow" />

    <div v-if="haciendoFormulario == true">
      <h2 class="h1">¿Qué destino te depara?</h2>
      <p>
        Las decisiones que tomes determinarán qué clase de aventurero serías, a qué pueblo
        pertenecerías y qué fragmento de la Trifuerza resonaría contigo.
      </p>
      <form
        class="row g-3"
        action="#"
        method="post"
        enctype="multipart/form-data"
        @submit.prevent="calcularResultado"
      >
        <div class="col-12">
          <label class="form-label" for="inputNombre">¿Cómo te gustaría que te llamen?</label>
          <input
            id="inputNombre"
            v-model.trim.lazy="nombre"
            class="form-control"
            type="text"
            name="nombre"
            required
          />
        </div>
        <div
          v-for="(pregunta, index) in preguntas"
          :key="index"
          class="col-md-6 d-flex flex-column"
        >
          <h3>{{ pregunta.titulo }}</h3>
          <label :for="'inputPregunta' + index" class="form-label mb-2">{{ pregunta.texto }}</label>
          <select
            :id="'inputPregunta' + index"
            v-model="respuestas[index]"
            class="form-select mt-auto"
            required
          >
            <option selected disabled value="">Elige...</option>
            <option
              v-for="(opcion, index2) in pregunta.opciones"
              :key="index2"
              :value="opcion.valor"
            >
              {{ opcion.texto }}
            </option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">Ver resultados</button>
      </form>
    </div>

    <div v-else>
      <h2 class="h1">Tu Perfil</h2>
      <p class="h2">{{ nombre }}</p>

      <section class="personalidad">
        <h3 class="fw-bold">Tu Personalidad</h3>
        <h4>{{ personalidad.simbolo }}{{ personalidad.nombre }}</h4>
        <h5 class="fst-italic border-bottom">{{ personalidad.subtitulo }}</h5>
        <p>{{ personalidad.descripcion }}</p>
      </section>

      <section class="raza">
        <h3 class="fw-bold">Tu Raza</h3>
        <h4>{{ raza.simbolo }}{{ raza.nombre }}</h4>
        <h5 class="fst-italic border-bottom">{{ raza.subtitulo }}</h5>
        <p>{{ raza.descripcion }}</p>
      </section>

      <section class="trifuerza">
        <h3 class="fw-bold">Tu Trifuerza</h3>
        <h4>{{ trifuerza.simbolo }}{{ trifuerza.nombre }}</h4>
        <h5 class="fst-italic border-bottom">{{ trifuerza.subtitulo }}</h5>
        <p>{{ trifuerza.descripcion }}</p>
      </section>

      <section class="resultados">
        <h3>Tus Resultados</h3>
        <ul>
          <li v-for="(porcentaje, index) in Object.entries(porcentajes)" :key="index">
            <h4>{{ nombreAtributos(porcentaje[0]) }}</h4>
            <div
              class="progress dark-bar"
              role="progressbar"
              :aria-label="'Porcentaje de atributo' + nombreAtributos(porcentaje[0])"
              :aria-valuenow="porcentaje[1]"
              aria-valuemax="100"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                :style="'width: ' + porcentaje[1] + '%'"
                :class="porcentaje[0]"
              ></div>
            </div>
          </li>
        </ul>
      </section>

      <section class="respuestas">
        <h3>Tus Respuestas</h3>
        <ol>
          <li v-for="(item, index) in resumenRespuestas" :key="index">
            <h4>{{ item.titulo }}</h4>
            <p>{{ item.texto }}</p>

            <p>
              <strong>{{ item.respuestaTexto }}</strong>
            </p>
          </li>
        </ol>
      </section>

      <button type="button" class="btn btn-primary" @click="reiniciarQuiz()">
        Hacer el cuestionario de nuevo
      </button>
    </div>
  </section>
</template>
