


export class Car{
  constructor(data){
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.color = data.color
    this.description = data.description
    this.price = data.price
    this.creatorId = data.creatorId
    this.isNew = data.isNew
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
  }
}
