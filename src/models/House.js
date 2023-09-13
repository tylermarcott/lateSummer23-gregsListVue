


export class House {
  constructor(data) {
    this.bedrooms = data.bedrooms,
      this.bathrooms = data.bathrooms,
      this.levels = data.levels,
      this.imgUrl = data.imgUrl || 'https://www.tuftandpaw.com/cdn/shop/products/06-Stellar-Bed-Ivory-10997-web-min.jpg?v=1647499180'  //NOTE: did this to fill the broken images we get through the api, replace with cat house lol
      ,
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