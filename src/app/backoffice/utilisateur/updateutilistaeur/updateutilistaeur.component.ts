import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-updateutilistaeur',
  templateUrl: './updateutilistaeur.component.html',
  styleUrls: ['./updateutilistaeur.component.scss']
})
export class UpdateutilistaeurComponent implements OnInit {
  val: any;
  getId: any;
  constructor(private service:  UserService ,
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
        nom:this.val.nom ,
        prenom:this.val.prenom,
        telephone:this.val.telephone,
        ville:this.val.ville,
        email:this.val.email,
        password:this.val.password
      });
    });
  }



  updateForm = new FormGroup({//ville
    'nom':new FormControl('',Validators.required),
    'prenom':new FormControl('',Validators.required),
    'telephone':new FormControl('',Validators.required),
    'ville':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required)

  })



  onUpdate(): any {
    console.log(this.updateForm.value)
    if (this.updateForm.valid)
    {
       this.service.updateUser(this.updateForm.value,this.getId).subscribe(
        (res) => {
          console.log(res,"update ok ok ok ")
          this.route.navigate(['/gestutilisateur'])
        })
    }else
    {
      console.log("update false ")
    }
}

}
