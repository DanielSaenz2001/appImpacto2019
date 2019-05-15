import { Component } from '@angular/core';
import { DownloadService } from '../app/download.service'
import { element } from '@angular/core/src/render3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cont=0;
  contList: Object[];

  constructor(private downloadService:DownloadService){}
  ngOnInit(){
    this.downloadService.getContador().snapshotChanges().subscribe(item=>{
      this.contList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$Key"]=element.key;
          this.contList.push(x as object);
      })
    })
  }
}
