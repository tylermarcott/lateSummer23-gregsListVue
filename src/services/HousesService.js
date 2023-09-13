import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js"
import { House } from "../models/House.js"


class HousesService {

  async getHouses() {
    const res = await api.get('api/houses')

    logger.log('houses data here:', res.data)



    AppState.houses = res.data.map(house => new House(house))
  }
}

export const housesService = new HousesService()