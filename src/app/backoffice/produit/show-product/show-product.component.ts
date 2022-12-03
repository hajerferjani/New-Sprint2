import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-gest-produit',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  constructor(private service:  ProductService ,private route:Router) { }
  list :any;
  idf:any;

  ngOnInit(): void {
    this.service.getAllProduct().subscribe( (res)=>{
      {this.list=res}});
  }


  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?'))
    {
      this.service.remouveProduct(id).subscribe(
       (res) => {this.list.splice(i, 1);
        this.route.navigate(['/showFournisseur'])
        //this.service.getAllFourniseur().subscribe( (res)=>{
        //{this.list=res}});
      })
    }
  }

}
