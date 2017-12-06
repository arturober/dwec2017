import { IProduct } from '../interfaces/i-product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    if (search === '') { return products; }
    return products.filter(p => p.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
