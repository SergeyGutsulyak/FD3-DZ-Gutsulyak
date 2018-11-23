export class PostImage{
    isReady:boolean;

    private url:string;
    private img:HTMLImageElement;
    constructor (_url:string){
        console.log('Init image')
        this.url=_url;
        this.isReady=false;
    }
    
    loadImg(){
        
        this.img=new Image();
        this.img.src=this.url;
        this.img.onload=()=>{
            console.log('Loaded complete')
            this.isReady=true;
        }
        this.img.onerror=()=>{
            console.log(`Image ${this.url} not loaded`)
        }

        return this.img;
    }
    getReady():boolean{
        return this.isReady;
    }

}