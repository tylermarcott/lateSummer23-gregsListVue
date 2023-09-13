


export class House {
  constructor(data) {
    this.bedrooms = data.bedrooms,
      this.bathrooms = data.bathrooms,
      this.levels = data.levels,
      this.imgUrl = data.imgUrl,
      this.year = data.year,
      this.price = data.price,
      this.description = data.description,
      this.creatorId = data.creatorId
  }
}


// model:

// {
//   "bedrooms": {
//     "type": "Number",
//       "required": true
//   },
//   "bathrooms": {
//     "type": "Number",
//       "required": true
//   },
//   "levels": {
//     "type": "Number",
//       "required": true
//   },
//   "imgUrl": {
//     "type": "String"
//   },
//   "year": {
//     "type": "Number",
//       "required": true
//   },
//   "price": {
//     "type": "Number",
//       "required": true
//   },
//   "description": {
//     "type": "String"
//   },
//   "creatorId": {
//     "type": "ObjectId",
//       "required": true,
//         "ref": "Account"
//   }
// }