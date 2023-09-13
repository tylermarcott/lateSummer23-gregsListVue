<template>
  <div class="row m-1 bg-primary text-light house-card">
    <div class="col-5">
      <img class="img" :src="house.imgUrl" alt="">
    </div>
    <div class="col-7">
      <div class="row p-2">
        <div class="col-4">
          Bedrooms: {{ house.bedrooms }}
        </div>
        <div class="col-4">
          Bathrooms: {{ house.bathrooms }}
        </div>
        <div class="col-4">
          Levels: {{ house.levels }}
        </div>
      </div>
      <div class="row p-2">
        <div class="col-6">
          Year: {{ house.year }}
        </div>
        <div class="col-6">
          Price: ${{ house.price }}
        </div>
      </div>
      <div class="row p-2">
        <div class="col-12">
          {{ house.description }}
        </div>
      </div>
      <div class="col-3">
        <button v-if="house.creatorId == account.id" @click="deleteHouse(house.id)" class="btn btn-light mt-2">Delete
          Listing <i class="mdi mdi-delete text-danger"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import { House } from "../models/House.js";
import Pop from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js";
import { AppState } from "../AppState.js";
import { computed } from "vue";
import { logger } from "../utils/Logger.js";

export default {
  props: { house: { type: House, required: true } },
  setup() {
    return {
      houses: computed(() => AppState.houses),
      account: computed(() => AppState.account),    //NOTE: this makes it so we can make sure that the delete button does not display for house listings that the user did not create
      //NOTE: jk this won't work, have to be able to display an individual component, can't compare the ids from all of the components. I'm sure there's a way to do it, but that's something to work on later.


      // NOTE: I forgot this. I can pass the house ID of the instance of the house through the function call in the HTML, DONT FORGOT THIS. Miles said you can also use props.house.id, but this way is easier for now.

      async deleteHouse(houseId) {
        try {
          logger.log('id of house:', houseId)

          if (await Pop.confirm('Are you sure you want to delete your listing?')) {
            await housesService.deleteHouse(houseId)
          }
        } catch (error) {
          Pop.error(error)
        }
      }
    };
  },
};
</script>


<style></style>