import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  contador: AngularFireList<any>;
  constructor(private db:AngularFireDatabase) { }
  
  getContador(){
    return this.db.list('descargas/contador');
  }
}
