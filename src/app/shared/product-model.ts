export class ProductModel {
    constructor(
        public id:number, 
        public productId: number, 
        public categoryId: number, 
        public productName: string, 
        public unitPrice: number, 
        public unitsInStock: number, 
        public discontinued: boolean
        
    ){
        
    }
}
