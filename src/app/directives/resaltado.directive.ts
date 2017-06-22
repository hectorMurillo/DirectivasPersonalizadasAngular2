import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementR:ElementRef) { 
    console.log("Directiva llamado")
    elementR.nativeElement.style.backgroundColor ="green";
  }
  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){    
    this.resaltar(this.nuevoColor || 'yellow');
  }
  @HostListener('mouseleave') mouseSalio(){
    this.elementR.nativeElement.style.backgroundColor =null;
  }
  private resaltar(color:string){
    this.elementR.nativeElement.style.backgroundColor=color;
  }
}
