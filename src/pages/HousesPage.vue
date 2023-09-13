

<!-- TODO: now I want to be able to draw the raw data of the houses to the page. Start by creating a service and getting some houses -->


<template>
  <!-- <div v-for="house in houses" :key="house.id">
    {{ house }}
  </div> -->

  {{ houses }}

  <div>hey</div>
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


<style></style>