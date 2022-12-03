import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-gestutilisateur',
  templateUrl: './gestutilisateur.component.html',
  styleUrls: ['./gestutilisateur.component.scss']
})
export class GestutilisateurComponent implements OnInit {
  list :any;
  idf:any;
    constructor(private service:  UserService ,private route:Router) { }


  ngOnInit(): void {
    this.service.getAllUser().subscribe( (res)=>{
      {this.list=res}});
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?'))
    {
      this.service.remouveUser(id).subscribe(
       (res) => {this.list.splice(i, 1);
        this.route.navigate(['/showFournisseur'])
        //this.service.getAllFourniseur().subscribe( (res)=>{
        //{this.list=res}});
      })
    }
  }


}
