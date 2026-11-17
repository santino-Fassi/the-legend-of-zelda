<script>
import { RouterLink, RouterView } from 'vue-router'
import PiedraChismosa from './components/PiedraChismosa.vue'
import logoImg from '@/assets/imgs/logo.webp'
import fassiImg from '@/assets/imgs/fassi.webp'
import gastagerImg from '@/assets/imgs/gastager.webp'

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView,
    PiedraChismosa,
  },
  data() {
    return {
      logoImg,
      fassiImg,
      gastagerImg,
    }
  },
}
</script>

<template>
  <header class="sticky-top">
    <h1 class="d-none">The Legend of Zelda - Ocarina of Time</h1>
    <nav class="navbar navbar-expand-lg px-md-4" data-bs-theme="dark">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">
          <img class="d-none d-lg-block logo d-inline-block" :src="logoImg" alt="Logo de Zelda" />
          <span class="d-lg-none h1 py-3 text-light">Nintendo</span>
        </RouterLink>
        <PiedraChismosa class="order-lg-last ms-auto me-2 me-lg-0 ms-lg-3" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Inicio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/descubre">Descubre</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/quiz">Quiz de Personalidad</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container-fluid">
    <RouterView />
  </main>

  <footer class="py-2 mt-4 container-fluid rounded-bottom rounded-4">
    <div class="row">
      <div class="c_autor text-center col-12 col-md-6">
        <img
          class="mb-3 border-2"
          :src="fassiImg"
          alt="Fotografía de uno de los autores de esta página web, Santino Fassi"
        />
        <ul class="text-light">
          <li>Nombre: Santino Fassi</li>
          <li>Edad: 20 años</li>
          <li>
            <a class="btn btn-dark" href="mailto:santino.fassi@davinci.edu.ar">Contacto</a>
          </li>
        </ul>
      </div>
      <div class="c_autor text-center col-12 col-md-6 flex-md-row-reverse">
        <img
          class="mb-3 border-2"
          :src="gastagerImg"
          alt="Fotografía de uno de los autores de esta página web, Camila Gastager"
        />
        <ul class="text-light">
          <li>Nombre: Camila Gastager</li>
          <li>Edad: 20 años</li>
          <li>
            <a class="btn btn-dark" href="mailto:camila.gastager@davinci.edu.ar">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
