import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FourniseurService } from '../services/fourniseur.service';

@Component({
  selector: 'app-show-fourniseur',
  templateUrl: './show-fourniseur.component.html',
  styleUrls: ['./show-fourniseur.component.css']
})
export class ShowFourniseurComponent implements OnInit {

  constructor(private service:  FourniseurService ,private route:Router) { }

  list :any;
  idf:any;
  ngOnInit(): void {
  this.service.getAllFourniseur().subscribe( (res)=>{
    {this.list=res}});
  }


    delete(id:any, i:any) {
      console.log(id);
      if(window.confirm('Do you want to go ahead?'))
      {
        this.service.remouveFourniseur(id).subscribe(
         (res) => {this.list.splice(i, 1);
          this.route.navigate(['/showFournisseur'])
          //this.service.getAllFourniseur().subscribe( (res)=>{
          //{this.list=res}});
        })
      }
    }
}
