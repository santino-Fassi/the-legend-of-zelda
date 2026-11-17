<script>
import lasTresDiosasImg from '@/assets/imgs/historia/las-tres-diosas.webp'
import conflictoImg from '@/assets/imgs/historia/conflicto.webp'
import linkDurmiendoImg from '@/assets/imgs/historia/link-durmiendo.webp'
import ocarinaImg from '@/assets/imgs/mejoras/ocarina.webp'
import temploAguaImg from '@/assets/imgs/mejoras/templo-agua.webp'
import ciudadelaImg from '@/assets/imgs/mejoras/ciudadela.webp'
import daruniaImg from '@/assets/imgs/mejoras/darunia.webp'
import sheikImg from '@/assets/imgs/mejoras/sheik.webp'
import progresoImg from '@/assets/imgs/mejoras/progreso.webp'

export default {
  name: 'DescubreView',
  data() {
    return {
      lasTresDiosasImg,
      conflictoImg,
      linkDurmiendoImg,
      tarjetas: [
        {
          id: 1,
          titulo: 'Una Hyrule completamente renovada',
          texto:
            'El reino de Hyrule ha sido reconstruido con nuevos gráficos, texturas, iluminación y materiales. Lugares que reconocés al instante vuelven a la vida con mucho más detalle.',
          img: ocarinaImg,
          alt: 'Ocarina del Tiempo junto con las tres piedras espirituales',
        },
        {
          id: 2,
          titulo: 'Link se mueve de una forma diferente',
          texto:
            'El control fue rediseñado para una experiencia más moderna: movimiento más suave, salto manual y cámara libre para explorar Hyrule con mayor libertad.',
          img: temploAguaImg,
          alt: 'Link usando el gancho en el Templo del Agua',
        },
        {
          id: 3,
          titulo: 'Hyrule nunca estático',
          texto:
            'El ciclo de día y noche ahora continúa también dentro de los pueblos, haciendo que lugares como la Ciudadela de Hyrule se sientan más vivos mientras los recorrés.',
          img: ciudadelaImg,
          alt: 'Link recorriendo la Ciudadela de Hyrule',
        },
        {
          id: 4,
          titulo: 'Cinemáticas reimaginadas y con doblajes de voz',
          texto:
            'Las cinemáticas cuentan con actuaciones de voz y los personajes reciben nuevos diálogos, aportando otra dimensión a momentos que los fans recuerdan desde hace años.',
          img: daruniaImg,
          alt: 'Link y Darunia forjando una hermandad',
        },
        {
          id: 5,
          titulo: 'Canta las canciones y descubre sus efectos',
          texto:
            'Con el micrófono de Switch 2, podés tararear una melodía aprendida para que Link la toque dentro del juego.',
          img: sheikImg,
          alt: 'Sheik tocando su instrumento ancestral',
        },
        {
          id: 6,
          titulo: 'Tu historia, reunida en un solo lugar',
          texto:
            'Una nueva función permite consultar tu progreso y el próximo objetivo de la aventura. A medida que avances en el juego, un gran tapiz de la historia se va completando y convierte tu recorrido en una verdadera leyenda.',
          img: progresoImg,
          alt: "Menú 'Hilos del Tiempo' que registra el progreso del jugador",
        },
      ],
    }
  },
}
</script>

<template>
  <div id="descubre">
    <nav>
      <div id="nav-tab" class="nav nav-tabs" role="tablist">
        <button
          id="nav-historia-tab"
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#historia"
          type="button"
          role="tab"
          aria-controls="historia"
          aria-selected="true"
        >
          Historia del mundo
        </button>
        <button
          id="nav-mejoras-tab"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#mejoras"
          type="button"
          role="tab"
          aria-controls="mejoras"
          aria-selected="false"
        >
          Cambios y Mejoras
        </button>
      </div>
    </nav>
    <div id="nav-tabContent" class="tab-content">
      <section
        id="historia"
        class="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="nav-historia-tab"
        tabindex="0"
      >
        <div>
          <h2>Descubre la historia</h2>
          <h3>El nacimiento del reino de Hyrule</h3>
          <blockquote>
            <div class="contenedor-contenido">
              <p class="fst-italic">
                Antes de que el tiempo comenzara, antes de que los espíritus y la vida existieran...
                <strong
                  >Tres diosas doradas descendieron sobre el caos que era Hyrule: Din, la diosa del
                  Poder... Nayru, la diosa de la Sabiduría... y Farore, la diosa del Valor.</strong
                ><br />
                Din, con sus fuertes brazos de fuego, cultivó la tierra y creó el suelo rojo. Nayru
                derramó su sabiduría sobre la tierra y dio el espíritu de la ley al mundo. Farore,
                con su rica alma, produjo todas las formas de vida que mantendrían la ley.<br />
                Las tres grandes diosas, habiendo completado su trabajo, partieron hacia los cielos.
                Y en el punto de donde salieron, dejaron tres triángulos dorados, la Trifuerza. Un
                triangulo sagrado capaz de hacer realidad cualquier deseo. Desde entonces, el lugar
                donde se encuentra la Trifuerza ha sido el Reino Sagrado.
              </p>
              <p>-El Gran Árbol Deku</p>
            </div>
          </blockquote>

          <img :src="lasTresDiosasImg" alt="Ilustración de las tres diosas creando el mundo" />

          <h3>Una tierra dividida</h3>

          <div class="contenedor-contenido">
            <p>
              Antes de la aventura de Link, Hyrule atravesó una época de enfrentamientos que
              cambiaría para siempre el destino de sus pueblos.
            </p>

            <p>
              Hace mucho tiempo, el reino de Hyrule se vio envuelta en una gran guerra, muchos
              afirman que se inició gracias a la codicia de la gente. Querían los tres triángulos
              dorados, la Trifuerza.<br />
              <em
                >En medio del caos, una mujer huyó del campo de batalla llevando consigo a su bebé.
                En el camino hacia un lugar seguro, fue gravemente herida, pero pudo llegar hasta el
                Bosque Kokiri.</em
              >
              Allí, con su último aliento, dejó al niño al cuidado del Gran Árbol Deku, esperando
              que pudiera crecer lejos de la guerra. El nombre del bebé era Link.<br />
              Este chico creció en el bosque junto con los Kokiri, una raza de niños eternos que
              viven dentro del bosque al cuidado del Gran Árbol y sus hadas compañeras.
              <strong
                >La infancia de Link no fue fácil, puesto que como no era uno de ellos y no tenía su
                propia hada, siempre lo trataron diferente.</strong
              >
            </p>
          </div>

          <img :src="conflictoImg" alt="Ilustración de la Gran Guerra Civil de Hyrule" />

          <h3>Una terrible visión</h3>
          <div class="contenedor-contenido">
            <p>
              Años después de la terrible guerra de Hyrule,
              <em>Link tuvo una extraña pesadilla cuya gravedad aún no era capaz de comprender.</em
              ><br />
              Una mujer con ropajes de guerrera huía a caballo junto a una niña, perseguidas desde
              el castillo por un oscuro jinete. Cuando el jinete las perdió de vista, reparó en Link
              y lo observó con una sonrisa temible, justo antes de que despertara.<br />
              Link aún no sabía quiénes eran aquellas personas ni qué significaba aquel sueño. Solo
              sabía que algo estaba a punto de comenzar. Ya que, al despertar, descubrió que por fin
              había recibido a su hada.<br />
              Navi, la pequeña hada enviada para ser la compañera de Link, le explica que el Árbol
              Deku lo necesita.
            </p>
          </div>

          <img
            :src="linkDurmiendoImg"
            alt="Link durmiendo en su casa antes de comenzar su aventura"
          />
        </div>
      </section>

      <section
        id="mejoras"
        class="tab-pane fade"
        role="tabpanel"
        aria-labelledby="nav-mejoras-tab"
        tabindex="0"
      >
        <div>
          <h2>¿Qué trae este remake?</h2>
          <p>
            Mirá de cerca cómo esta nueva versión reconstruye la aventura que ya conocés y la adapta
            a una nueva generación.
          </p>

          <div class="row justify-content-center g-4">
            <div class="col-12">
              <div class="card h-100">
                <img :src="tarjetas[0].img" :alt="tarjetas[0].alt" class="card-img-top" />
                <div class="card-body">
                  <h3 class="card-title">{{ tarjetas[0].titulo }}</h3>
                  <p class="card-text">{{ tarjetas[0].texto }}</p>
                </div>
              </div>
            </div>

            <div
              v-for="tarjeta in tarjetas.slice(1)"
              :key="tarjeta.id"
              class="col-12 col-md-6 col-lg-4"
            >
              <div class="card h-100">
                <img :src="tarjeta.img" :alt="tarjeta.alt" class="card-img-top" />
                <div class="card-body">
                  <h3 class="card-title">{{ tarjeta.titulo }}</h3>
                  <p class="card-text">{{ tarjeta.texto }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
