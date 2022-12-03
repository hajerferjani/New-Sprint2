import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-prduct',
  templateUrl: './update-prduct.component.html',
  styleUrls: ['./update-prduct.component.scss']
})
export class UpdatePrductComponent implements OnInit {
  val: any;
  getId: any;
  constructor(private service:  ProductService ,
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route:Router) { }

  ngOnInit(): void {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log(this.getId)
    this.service.getById(this.getId).subscribe((res) => {
      console.log(res,"get ok ok ok ")
      this.val = res;

      this.updateForm.patchValue({
        reference:this.val.reference ,
        nom:this.val.nom ,
        marque:this.val.marque,
        description:this.val.description,
        image:this.val.image,
        famille:this.val.famille ,
        categorie:this.val.categorie,
        Prix:this.val.Prix,
        etat:this.val.etat
      });
    });
  }

  updateForm = new FormGroup({
    'reference':new FormControl('',Validators.required),
    'nom':new FormControl('',Validators.required),
    'marque':new FormControl('',Validators.required),
    'description':new FormControl('',Validators.required),
    'image':new FormControl('',Validators.required),
    'famille':new FormControl('',Validators.required),
    'categorie':new FormControl('',Validators.required),
    'Prix':new FormControl('',Validators.required),
    'etat':new FormControl('',Validators.required)
  })

  onUpdate(): any {
    console.log(this.updateForm.value)
    if (this.updateForm.valid)
    {
       this.service.updateProduct(this.updateForm.value,this.getId).subscribe(
        (res) => {
          console.log(res,"update ok ok ok ")
          this.route.navigate(['/showProduct'])
        })
    }else
    {
      console.log("update false ")
    }
}


}
