import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';




@Component({
  selector: 'app-ajouteruser',
  templateUrl: './ajouteruser.component.html',
  styleUrls: ['./ajouteruser.component.scss']
})
export class AjouteruserComponent implements OnInit {


  constructor(private service:  UserService,
    private route:Router
     )
     {

  }

  ngOnInit(): void {
  }


  save(f:any){
    this.service.addUser(f).subscribe(
      (res) => {
        console.log(res,"ajouter ok ok ok ")
      this.route.navigate(['/gestutilisateur'])})


    console.log("secces");

  }
}
