// {
//     "productId": 1,
//     "productName": "Leaf Rake",
//     "productCode": "GDN-0011",
//     "releaseDate": "March 19, 2021",
//     "description": "Leaf rake with 48-inch wooden handle.",
//     "price": 19.95,
//     "starRating": 3.2,
//     "imageUrl": "assets/images/leaf_rake.png"
//   }

export interface IProduct {
    productId: number;
    productName: string,
    productCode: string,
    releaseDate: string,
    description: string,
    price: number,
    starRating: number,
    imageUrl: string    
}