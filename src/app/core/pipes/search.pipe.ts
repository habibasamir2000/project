import { Pipe, PipeTransform } from '@angular/core';
import { products } from '../interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: products[], term: string): products[] {
    return products.filter((product)=>product.title.toLowerCase().includes(term.toLowerCase()));
  }

}
