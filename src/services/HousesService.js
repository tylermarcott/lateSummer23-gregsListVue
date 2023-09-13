import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { House } from "../models/House.js"


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
}

export const housesService = new HousesService()