<script>
import { Popover } from 'bootstrap'
import gossipStoneImg from '@/assets/imgs/gossip-stone.webp'

export default {
  name: 'PiedraChismosa',
  data() {
    return {
      gossipStoneImg,
      hoy: new Date(),
      lanzamiento: new Date(2026, 10, 5),
      rebotando: false,
    }
  },
  computed: {
    diasRestantes() {
      const diferencia = this.lanzamiento - this.hoy
      return Math.ceil(diferencia / (1000 * 60 * 60 * 24))
    },
    mensaje() {
      if (this.diasRestantes > 0) {
        return `¡BOINNG! ¡BOINNG! ¡Faltan ${this.diasRestantes} días para el lanzamiento!`
      } else {
        return '¡BOINNG! ¡BOINNG! ¡El juego ya está disponible!'
      }
    },
  },
  mounted() {
    this.inicializarPopover()
  },
  methods: {
    inicializarPopover() {
      if (this.$refs.popoverBtn) {
        new Popover(this.$refs.popoverBtn, { trigger: 'focus' })
      }
    },
    rebotar() {
      if (!this.rebotando) this.rebotando = true
    },
    finRebote() {
      this.rebotando = false
    },
  },
}
</script>

<template>
  <div>
    <a
      ref="popoverBtn"
      tabindex="0"
      class="btn"
      type="button"
      data-bs-custom-class="pop-overs"
      data-bs-trigger="focus"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="left"
      :data-bs-content="mensaje"
      @click="rebotar"
    >
      <img
        class="piedra-chismosa"
        :class="{ rebotar: rebotando }"
        :src="gossipStoneImg"
        alt="Piedra Chismosa"
        @animationend="finRebote"
      />
    </a>
  </div>
</template>
