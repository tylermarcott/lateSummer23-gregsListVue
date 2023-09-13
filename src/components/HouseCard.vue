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
        <button @click="deleteHouse" class="btn btn-light mt-2">Delete Listing <i
            class="mdi mdi-delete text-danger"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import { House } from "../models/House.js";
import Pop from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js";

export default {
  props: { house: { type: House, required: true } },
  setup() {
    return {


      // TODO: need to be able to pull the id of which house is going to get deleted!

      async deleteHouse() {
        try {
          if (await Pop.confirm('Are you sure you want to delete your listing?')) {
            await housesService.deleteHouse()
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