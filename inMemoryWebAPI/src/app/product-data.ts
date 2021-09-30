import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

    createDb() {
        const products: Product[] = [
            {
                id: 1,
                productName: 'Leaf Rake',
                productCode: 'GDN-0011',
                description: 'Leaf rake with 48-inch wooden handle',
                starRating: 3.2
            },
            {
                id: 2,
                productName: 'Garden Cart',
                productCode: 'GDN-0023',
                description: '15 gallon capacity rolling garden cart',
                starRating: 4.2
            }
        ];
        return { products };
    }
}
