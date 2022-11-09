import { Component, OnInit } from '@angular/core';
import { ScriptService }  from '../script-handler/script.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers : [ScriptService]
})
export class MenuComponent implements OnInit {

  constructor(private script:ScriptService) {
    this.script.load('caroussel2', 'caroussel','caroussel1','caroussel4','caroussel5','caroussel6').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
   

   }

  ngOnInit(): void {
    
    
  }

}
