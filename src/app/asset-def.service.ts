import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AssetDef } from './asset-def';

@Injectable({
  providedIn: 'root'
})
export class AssetDefService {
  private baseUrl='http://localhost:51734/api';

  constructor(private http:HttpClient) { }

  getAssetList():Observable<any>{
    return this.http.get(this.baseUrl+'/AssetDef');
  }

  deleteAsset(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'/AssetDef/'+id);

  } 

  addAsset(pdt:AssetDef){
    return this.http.post(this.baseUrl+'/AssetDef',pdt);
  }

  GetAsset(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/AssetDef/'+id);
  }
  
  UpdateAsset(id:number,asset:AssetDef){
    return this.http.put(this.baseUrl+'/AssetDef/'+id,asset);
  }
  searchAsset(name:string):Observable<any>
  {
    return this.http.get(this.baseUrl+'/AssetDef?name='+name);
  }

  getAssetType(id: number):Observable<any>{
    return this.http.get(this.baseUrl+'/AssetType/'+id);
  }

  getAssetTypes():Observable<any>{
    return this.http.get(this.baseUrl+'/AssetType');
  }
  putAssetDef(id:number, asset: AssetDef):Observable<any>{
    return this.http.put(this.baseUrl+'/AssetDef/'+id,asset);
  }


}


