import { Component, OnInit } from '@angular/core';
import { Sidebar } from './sidebar';

@Component({
  selector: 'app-backsidebar',
  templateUrl: './backsidebar.component.html',
  styleUrls: ['./backsidebar.component.scss']
})
export class BacksidebarComponent implements OnInit {

  public menus  :Sidebar  = {
     id:'1',
     titre: 'products',
     icone: '',
     url: '',
     sousMenu:[
      {
        id:'11',
        titre: 'kkkk',
        icone: '',
        url: ''
      },

      {
        id:'12',
        titre: 'llllll',
        icone: '',
        url: ''
      },


     ]

  }
  constructor() { }

  ngOnInit(): void {
  }

}
