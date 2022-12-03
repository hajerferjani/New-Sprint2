import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service:  ProductService,
    private route:Router) { }

  ngOnInit(): void {
   }

   save(f:any){
    this.service.addProduct(f).subscribe(
      ()=>this.route.navigate(['/showProduct']))


    console.log("secces");

  }
}
