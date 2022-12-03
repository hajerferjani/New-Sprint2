import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NOMEM } from 'dns';
import { FourniseurService } from '../services/fourniseur.service';

@Component({
  selector: 'app-update-fourniseur',
  templateUrl: './update-fourniseur.component.html',
  styleUrls: ['./update-fourniseur.component.scss']
})
export class UpdateFourniseurComponent implements OnInit {
  val: any;
  getId: any;
 // updateForm: FormGroup;

  constructor(private service:  FourniseurService ,
             public formBuilder: FormBuilder,
             private activatedRoute: ActivatedRoute,
             private route:Router)
    {  }

  ngOnInit(): void {

    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log(this.getId)
    this.service.getById(this.getId).subscribe((res) => {
      console.log(res,"get ok ok ok ")
      this.val = res;

      this.updateForm.patchValue({
        nom:this.val.nom ,
        adresse:this.val.adresse,
        telephone:this.val.telephone,
        email:this.val.email
      });
    });
  }

  updateForm = new FormGroup({
    'nom':new FormControl('',Validators.required),
    'adresse':new FormControl('',Validators.required),
    'telephone':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required)
  })





  onUpdate(): any {
    console.log(this.updateForm.value)
    if (this.updateForm.valid)
    {
       this.service.updateFourniseur(this.updateForm.value,this.getId).subscribe(
        (res) => {
          console.log(res,"update ok ok ok ")
          this.route.navigate(['/showFournisseur'])
        })
    }else
    {
      console.log("update false ")
    }
}
}
