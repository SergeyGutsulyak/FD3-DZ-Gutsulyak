import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-css-sprite',
  templateUrl: './css-sprite.component.html',
  styleUrls: ['./css-sprite.component.css']
})
export class CssSpriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input("paramCSS")
  private paramCSS:object;
  
  

  getCSS():object{
    let heshCSS:object={'border-width':'1px'}
    return heshCSS;
  }
  setClicked():void{
    this.clickOutputEE.emit();
  }
}
