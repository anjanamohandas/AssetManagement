import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AssetDef } from './asset-def';

@Injectable({
  providedIn: 'root'
})
export class AssetDefService {
  private baseUrl='http://localhost:56120/api';

  constructor(private http:HttpClient) { }

  getAssetList():Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_def');
  }

  deleteAsset(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'/Asset_def/'+id);

  } 

  addAsset(pdt:AssetDef){
    return this.http.post(this.baseUrl+'/Asset_def',pdt);
  }

  GetAsset(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_def/'+id)
  }
  
  UpdateAsset(id:number,asset:AssetDef){
    return this.http.put(this.baseUrl+'/Asset_def/'+id,asset);
  }
  searchAsset(name:string):Observable<any>
  {
    return this.http.get(this.baseUrl+'/assets?name='+name);
  }

  getAssetType(id: number):Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_type/'+id);
  }

  getAssetTypes():Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_type');
  }


}


