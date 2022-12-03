import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']


})

export class ReclamationComponent implements OnInit {
  myScriptElement:HTMLScriptElement;

  constructor() {
    this.myScriptElement=document.createElement("script");
    this.myScriptElement.src="assets/js/uploadimage.js"
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
  }
}
