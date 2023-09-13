import { reactive } from 'vue'
import { Car } from './models/Car.js'
// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},


  /**@type {Car[]} */
  cars: [],
  /**@type {Car} */
  activeCar: null,


  /**@type {House[]} */
  houses: []
})
