class ProductsService {
    constructor() {
        if (!ProductsService._instance) ProductsService._instance = this;
        return ProductsService._instance;
    }
    async getProducts() {
        if (!this.products) {
            this.products = [
                {   "id": "111",
                    "title": "Here we go!!!",
                    "description": "Good mugs for you, your family or friends",
                    "price": 14,
                    "image": "img/img-vlada/t-short_for_shop.jpg"
                },
            
                {   "id": "222",
                    "title": "Colora Podcast T-Shirts",
                    "description": "Good T-shirt for you, your family or friends",
                    "price": 40,
                    "image": "img/img-vlada/t-short_for_shop.jpg"
                },
            
                {   "id": "333",
                    "title": "Colora Podcast Postcards",
                    "description": "Good postcards for you, your family or friends",
                    "price": 60,
                    "image": "img/img-vlada/photocamera_for_shop.jpg"
                },
                {   "id": "444",
                    "title": "Colora Podcast Bags",
                    "description": "Good bag for you, your family or friends",
                    "price": 35,
                    "image": "img/img-vlada/bag_for_shop.jpg"
                },
            
                {   "id": "555",
                    "title": "Colora Podcast Books",
                    "description": "Good books for you, your family or friends",
                    "price": 20,
                    "image": "img/img-vlada/books_for_shop.jpg"
                },
            
                {   "id": "666",
                    "title": "Colora Podcast Stickers",
                    "description": "Good stickers for you, your family or friends",
                    "price": 20,
                    "image": "img/img-vlada/stickers_for_shop.jpg"
                }
            
            ]
        }
        return this.products;
    }
    async getProductById(id) {
        const products = await this.getProducts();
        return products.find( product => product.id === id );
    }
}
