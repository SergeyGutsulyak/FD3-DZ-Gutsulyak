import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input("width")
  private sprWidth:number;

  @Input("height")
  private sprHeight:number;

  @Input("offset-x")
  private offsetX:number;

  @Input("offset-y")
  private offsetY:number;

  @Input("url")
  private urlSrcImg:string;

  @Output("change-card")
  private  changeCard:EventEmitter<void>=new EventEmitter<void>()
  
  getParams():object{
      return {"background-image":`url(${this.urlSrcImg})`,
            "width":this.sprWidth+"px",
            "height":this.sprHeight+"px",
            "background-position":`${this.offsetX}px ${this.offsetY}px`}
  }
}
