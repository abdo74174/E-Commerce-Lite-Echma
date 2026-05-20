// E-commerce Classes
// You can define your object-oriented structure here.

export class Product {
  constructor(id, name, price, category, image, description, size, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.image = image;
    this.description = description;
    this.size = size;
    this.quantity = quantity;
  }
}

export class Cart {
  constructor() {
    this.items = [];
  }
  // Cart methods here
}

export class User {
  constructor(name) {
    this.name = name;
  }
}
