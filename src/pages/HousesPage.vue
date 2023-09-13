

<!-- TODO: now I need to create a form component so I can do my create! -->


<template>
  <div class="container">

    <HouseForm />

    <div class="col-12">
      <div v-for="house in houses" :key="house.id">
        <HouseCard :house="house" />
      </div>
    </div>
  </div>
</template>





<script>
import { computed, onMounted } from "vue";
import { housesService } from "../services/HousesService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { AppState } from '../AppState.js'

export default {
  setup() {

    onMounted(() => {
      getHouses()
    })

    async function getHouses() {
      try {
        logger.log('getting some houses here in Houses comp')
        await housesService.getHouses()   // make sure to invoke this function here, or you won't get connection with service
      } catch (error) {
        Pop.error(error)
      }
    }

    // TODO: now I have to create a compute in order to bring in the data from the appstate, which goe sin the return

    return {
      houses: computed(() => AppState.houses)
    }



  },
};
</script>


<style>
.img {
  height: 20vh;
  width: 20vh;
}

.house-card {
  background-color: #ede2e2;
  border: solid #0e0d0d 2px;
  border-radius: 14px;
  overflow: hidden;
  transition: all .1s ease;
  cursor: pointer;


  &:hover {
    transition: all .2s ease;
    transform: scale(1.05);
  }

}
</style>