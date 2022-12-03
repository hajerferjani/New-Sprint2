import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FourniseurService } from '../services/fourniseur.service';

@Component({
  selector: 'app-add-fourniseur',
  templateUrl: './add-fourniseur.component.html',
  styleUrls: ['./add-fourniseur.component.css']
})
export class AddFourniseurComponent implements OnInit {

  constructor(private service:  FourniseurService,
    private route:Router
     ) { }

  ngOnInit(): void {
  }
  save(f:any){
    this.service.addFourniseur(f).subscribe(
      ()=>this.route.navigate(['/showFournisseur']))


    console.log("secces");

  }
}
