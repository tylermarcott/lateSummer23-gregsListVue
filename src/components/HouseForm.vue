<template>
  <h3>Create a house listing:</h3>

  <form class="row p-1 m-2" @submit.prevent="createHouse">
    <div class="col-3">
      <label for="house-bedrooms">Bedrooms</label>
      <input v-model="houseData.bedrooms" type="number" class="form-control" placeholder="house bedrooms" maxlength="2"
        required>
    </div>

    <div class="col-3">
      <label for="house-bathrooms">Bathrooms</label>
      <input v-model="houseData.bathrooms" type="number" class="form-control" placeholder="house bathrooms" maxlength="2"
        required>
    </div>

    <div class="col-3">
      <label for="house-levels">Levels</label>
      <input v-model="houseData.levels" type="number" class="form-control" placeholder="house levels" maxlength="2"
        required>
    </div>

    <div class="col-6">
      <label for="house-year">Year</label>
      <input v-model="houseData.year" type="number" class="form-control" placeholder="house year" min="1700" required>
    </div>

    <div class="col-6">
      <label for="house-levels">Price</label>
      <input v-model="houseData.price" type="number" class="form-control" placeholder="house price" max="10000000"
        required>
    </div>

    <div class="col-12">
      <label for="house-imgUrl">Image URL</label>
      <input v-model="houseData.imgUrl" type="url" class="form-control" placeholder="house imgUrl" max="10000000"
        required>
    </div>

    <div class="col-12">
      <label for="house-description">House Description</label>
      <input v-model="houseData.description" type="string" class="form-control" placeholder="house description" max="1000"
        required>
    </div>

    <div class="col-3">
      <button class="btn btn-secondary m-2" title="submit house data to database">Submit</button>
    </div>
  </form>
</template>

<script>

import { ref } from "vue";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { housesService } from "../services/HousesService.js";



export default {
  setup() {
    const houseData = ref({})

    return {
      houseData,

      async createHouse() {
        try {
          await housesService.createHouse(houseData.value)

        } catch (error) {
          Pop.error(error)
        }
      }
    };
  },
};
</script>


<style></style>