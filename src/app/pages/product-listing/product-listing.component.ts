import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ApplicationService } from 'src/app/services/application.service';
import { ProductListHandler } from 'src/app/services/product/product-list.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent {
  constructor(
    private appService : ApplicationService
  ){}

  products : Product[] = [];

  ngOnInit() {

    let handler : ProductListHandler = {
      success: (prodList: Product[]) => {
        this.products = prodList;
      },
      failure: (error: any) => {
      },
      complete: () => {}
    }

    this.appService.getProductList(handler);

  }
}
