<script>
import CaracteristicasProducto from '@/components/CaracteristicasProducto.vue'
import inicioImg from '@/assets/imgs/inicio.webp'
import linkYNaviImg from '@/assets/imgs/linkYNavi.webp'
import galeria1Img from '@/assets/imgs/galeria/galeria1.webp'
import galeria2Img from '@/assets/imgs/galeria/galeria2.webp'
import galeria3Img from '@/assets/imgs/galeria/galeria3.webp'
import galeria4Img from '@/assets/imgs/galeria/galeria4.webp'
import galeria5Img from '@/assets/imgs/galeria/galeria5.webp'
import galeria6Img from '@/assets/imgs/galeria/galeria6.webp'
import galeria7Img from '@/assets/imgs/galeria/galeria7.webp'

export default {
  name: 'InicioView',
  components: {
    CaracteristicasProducto
  },
  data() {
    return {
      inicioImg,
      linkYNaviImg,
      producto: {
        tamanio: '27 GB',
        modos: ['Modo TV', 'Modo Semiportátil', 'Modo Portátil'],
        jugadores: 1,
        online: 'Guardado de datos en la nube',
        consolas: ['Nintendo Switch 2'],
        editor: 'Nintendo',
        idiomas: [
          'Japonés',
          'Inglés (británico)',
          'Francés',
          'Alemán',
          'Italiano',
          'Español',
          'Coreano',
          'Holandés',
          'Ruso',
          'Chino (simplificado)',
          'Español (América Latina)',
          'Francés (Canadá)',
          'Portugués (Brasil)',
          'Chino (tradicional)',
          'Ingles (EE.UU.)',
          'Polaco'
        ],
        lanzamiento: '5 de noviembre de 2026',
        clasificacion: 'Everyone 10+'
      },
      imagenes: [
        {
          id: 1,
          img: galeria1Img,
          alt: 'Link sacando la Espada Maestra de su pedestal'
        },
        {
          id: 2,
          img: galeria2Img,
          alt: 'Despedida de Link y Saria en el bosque Kokiri'
        },
        {
          id: 3,
          img: galeria3Img,
          alt: 'Link tocando la nana de Zelda'
        },
        {
          id: 4,
          img: galeria4Img,
          alt: 'Zelda niña en el patio de la familia real'
        },
        {
          id: 5,
          img: galeria5Img,
          alt: 'Ganondorf en su caballo apareciendose frente a Link'
        },
        {
          id: 6,
          img: galeria6Img,
          alt: 'Link peleando contra Phantom Ganon'
        },
        {
          id: 7,
          img: galeria7Img,
          alt: 'Link arriba de su yegua Epona'
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <section id="inicio">
      <img :src="inicioImg" alt="Portada del Remake de The Legend of Zelda: Ocarina of Time" />

      <h2>La leyenda renace para una nueva generación</h2>

      <div class="contenedor-contenido">
        <p>
          Comienza la batalla por Hyrule.
          <strong
            >El malvado Ganondorf planea robar la mítica Trifuerza del Reino Sagrado y conquistar el
            mundo.</strong
          >
          Ahora Link debe convertirse en el héroe del tiempo y salvar el reino en esta historia
          clásica, creada desde cero para Nintendo Switch™ 2
        </p>

        <p>
          The Legend of Zelda es una de las sagas más reconocidas de Nintendo y una de las series
          más importantes dentro de los videojuegos de aventura.
          <em
            >Desde su primera entrega, la saga se ha caracterizado por combinar exploración,
            combates, resolución de acertijos y descubrimiento,</em
          >
          invitando al jugador a recorrer mundos llenos de secretos.
        </p>

        <p>
          Una de las características principales de Zelda es la libertad que ofrece al jugador para
          explorar. Bosques, montañas, templos, aldeas y mazmorras esconden secretos y desafíos que
          hacen que cada aventura sea diferente. Además, cada entrega introduce nuevos personajes,
          mecánicas y elementos que amplían el universo de la saga.
        </p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="producto-info">
        <div class="producto-datos">
          <h2>Acerca de este producto</h2>
          <CaracteristicasProducto
            :tamanio="producto.tamanio"
            :modos="producto.modos"
            :jugadores="producto.jugadores"
            :online="producto.online"
            :consolas="producto.consolas"
            :editor="producto.editor"
            :idiomas="producto.idiomas"
            :lanzamiento="producto.lanzamiento"
            :clasificacion="producto.clasificacion"
          />
        </div>

        <div class="producto-imagen">
          <img :src="linkYNaviImg" alt="Link y Navi sentados en un tronco" />
        </div>
      </div>
    </section>

    <section id="c_galeria">
      <h2>Galería</h2>

      <div class="galeria-principal">
        <div id="galeria" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(imagen, indice) in imagenes"
              :key="imagen.id"
              class="carousel-item"
              :class="{ active: indice == 0 }"
            >
              <img :src="imagen.img" :alt="imagen.alt" class="d-block w-100" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#galeria"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#galeria"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
