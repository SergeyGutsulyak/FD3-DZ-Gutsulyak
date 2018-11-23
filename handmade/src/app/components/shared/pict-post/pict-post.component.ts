import { Component, OnInit } from '@angular/core';

import {PostImage} from '../../../models/post-image.model';

@Component({
  selector: 'pict-post',
  templateUrl: './pict-post.component.html',
  styleUrls: ['./pict-post.component.scss']
})
export class PictPostComponent implements OnInit {
  private smallImageArray:string[];
  private mediumImageArray:string[];
  private largeImageArray:string[];
  private indexArray:number[];
  private isFirstClickSmall:boolean;//true if the small picture wasn't clicked
  private currentIndexImage:number;
  private preloadedImages:string[];


  imgURL='http://tattoo-katalog.ru/img_tatu/6QVI-_qZB1g.jpg';
  a:any;
  constructor() { 
    this.a=new PostImage(this.imgURL).loadImg();
    this.smallImageArray=[
      'https://im0-tub-by.yandex.net/i?id=5bd91358cc09969b5fe1c20d9445f70c&n=33&w=240&h=150',
      'https://im0-tub-by.yandex.net/i?id=caca9abdd22aed5a6da390a370add86e&n=33&w=267&h=150',
      'https://im0-tub-by.yandex.net/i?id=5e7ed2990d20eaca39a7cd7886bfb715&n=33&w=240&h=150',
      'https://im0-tub-by.yandex.net/i?id=5f4e17fc457b9ceebf9a042aebc30ce6&n=33&w=200&h=150'
    ]
    this.largeImageArray=this.smallImageArray;
    this.mediumImageArray=this.smallImageArray;
    this.isFirstClickSmall=true;
    this.indexArray=[...Array.from(Array(this.smallImageArray.length).keys())];//generate array from 0 to count images-1
    this.currentIndexImage=0;
    this.preloadedImages=[this.mediumImageArray[0]];
  }

  ngOnInit() {
  }
  
  getImg(){
    return this.imgURL;
  }
  getSmallImageUrl(index){
    return this.smallImageArray[index];
  }
  getMediumImageUrl(){
    return this.smallImageArray[this.currentIndexImage];
  }

  getIndexArray(){
    return this.indexArray;
  }

  preloadMediumImages():void{
    this.mediumImageArray.forEach(urlImg=>this.prelodImage(urlImg))
  }
  preloadLargeImages():void{
    this.largeImageArray.forEach(urlImg=>this.prelodImage(urlImg))
  }
  selectImage(index:number):void{
    // console.log(index);
    if (this.isFirstClickSmall){
      this.preloadMediumImages();
      this.isFirstClickSmall=false;
    }
    this.currentIndexImage=index;
  }

  prelodImage(urlImage:string):void{
    if (urlImage in this.preloadedImages) return;
    let im=new Image();
    im.src=urlImage;
  }
  checkCurrent(index:number):boolean{
    if (index==this.currentIndexImage) {
      return true;
    }
    else {
      return false;
    }
  }
  
}
