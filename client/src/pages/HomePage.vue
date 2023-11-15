<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">

      <h1 class="display-1">
        <i class="mdi" :class="isOn ? 'mdi-lightbulb-on-outline text-warning' : 'mdi-lightbulb'"></i>
      </h1>

      <button class="btn btn-dark" @click="flipTheSwitch()">Flip the Switch</button>



    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js'
import { lightHandler } from '../handlers/LightHandler.js'

export default {
  setup() {

    onMounted(() => {
      lightHandler.emit('getLightStatus')
    })


    return {
      isOn: computed(() => AppState.isOn),
      flipTheSwitch() {
        lightHandler.emit('flipTheSwitch')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
