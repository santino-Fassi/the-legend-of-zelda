<script>
export default {
  name: 'CaracteristicasProducto',
  props: [
    'tamanio',
    'modos',
    'jugadores',
    'online',
    'consolas',
    'editor',
    'idiomas',
    'lanzamiento',
    'clasificacion'
  ],
  data() {
    return {
      expandir: false
    }
  },
  methods: {
    toggle() {
      this.expandir = !this.expandir
    }
  }
}
</script>

<template>
  <div>
    <ul class="lista-datos">
      <li class="card-dato">
        <h3>Tamaño del archivo (estimado)</h3>
        <p>{{ tamanio }}</p>
      </li>

      <li class="card-dato">
        <h3>Modos de juego compatibles</h3>

        <ul>
          <li v-for="modo in modos" :key="modo">
            {{ modo }}
          </li>
        </ul>
      </li>

      <li class="card-dato">
        <h3>Número de jugadores</h3>
        <p>{{ jugadores }}</p>
      </li>

      <li class="card-dato animate__animated animate__fadeInUp" v-if="expandir == true">
        <h3>Nintendo Switch Online</h3>
        <p>{{ online }}</p>
      </li>

      <li class="card-dato animate__animated animate__fadeInUp" v-if="expandir == true">
        <h3>Consolas</h3>
        <p>{{ consolas.join(', ') }}</p>
      </li>

      <li class="card-dato animate__animated animate__fadeInUp" v-if="expandir == true">
        <h3>Editor</h3>
        <p>{{ editor }}</p>
      </li>

      <li class="card-dato animate__animated animate__fadeInUp" v-if="expandir == true">
        <h3>Idiomas compatibles</h3>
        <p>{{ idiomas.join(', ') }}</p>
      </li>

      <li class="card-dato animate__animated animate__fadeInUp" v-if="expandir == true">
        <h3>Fecha de lanzamiento</h3>
        <p>{{ lanzamiento }}</p>
      </li>

      <li class="card-dato animate__animated animate__fadeInUp" v-if="expandir == true">
        <h3>Clasificación ESRB</h3>
        <p>{{ clasificacion }}</p>
      </li>

      <li>
        <button class="btn btn-success" type="button" @click="toggle">
          {{ expandir ? 'Contraer' : 'Expandir' }}
        </button>
      </li>
    </ul>
  </div>
</template>
