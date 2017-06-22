import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano ">
      Hola mundo... esta es una etiqueta
    </p>
    <button class="btn btn-danger" (click)="disminuye()"> 
      <i class="fa fa-minus"></i>
    </button>
    <button class="btn btn-success" (click)="aumenta()"> 
      <i class="fa fa-plus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number=50;
  constructor() { }
  aumenta(){
    if(this.tamano<70)
    this.tamano+=10;    
  }
  disminuye(){
    if(this.tamano>10)
    this.tamano-=10;
  }

  ngOnInit() {
  }

}
