<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Gregslist
      </h1>
      <!-- NOTE router-link should be used whenever clicking something should take you to a new place -->
      <router-link :to="{ name: 'Cars' }">
        <div class="m-2">
          Cars 🚗
        </div>
      </router-link>
      <!-- <button class="btn btn-primary" @click="goToCarsPage">Cars link via Code</button> -->
      <!-- NOTE: commenting out the page link via code, only need to use one, the router-link works just fine for what we are doing and I don't need to create a function for it -->

      <router-link :to="{ name: 'Houses' }">
        <div class="m-2">
          Houses 🏚
        </div>
      </router-link>
      <!-- <button class="btn btn-secondary" @click="goToHousesPage">Houses link via Code</button> -->
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    const router = useRouter()
    return {
      goToCarsPage() {
        logger.log('Going to the cars page now')
        // NOTE router.push should be used only for automatically navigating the user when certain code process are done
        router.push({ name: 'Cars' })
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
