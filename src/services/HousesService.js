import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"


class HousesService {

  async getHouses() {
    const res = await api.get('api/houses')
    AppState.houses = res.data.map(house => new House(house))
  }

  async createHouse(houseData) {
    const res = await api.post('api/houses', houseData)

    const newHouse = new House(res.data)
    AppState.houses.push(newHouse)
    return newHouse
  }

  async deleteHouse(houseId) {
    // first step, I have to find the house I want to delete

    const foundHouse = AppState.houses.find(house => house.id == houseId)

    logger.log('found the following house:', foundHouse)

    //now I have to delete the house in the appstate

    await api.delete(`api/houses/${houseId}`, foundHouse)   // <----- have to make sure to include the house id in the URL

    //now I have to find the index of the house I want to be able to delete

    let indexToRemove = AppState.houses.findIndex(house => house.id == houseId)

    if (indexToRemove >= 0) {
      AppState.houses.splice(indexToRemove, 1)  // delete house from local state at the index we found of the corresponding house
    }
  }
}

export const housesService = new HousesService()