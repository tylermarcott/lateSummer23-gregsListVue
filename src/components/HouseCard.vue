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
    </div>
  </div>
</template>

<script>
import { House } from "../models/House.js";

export default {
  props: { house: { type: House, required: true } },
  setup() {
    return {};
  },
};
</script>


<style></style>