import { Injectable } from '@angular/core';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PurchaseOrder } from './purchase-order';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private baseUrl = 'http://localhost:51734/api';

  constructor(private http: HttpClient) { }

  getAssettypes(na: string): Observable<any>{
    return this.http.get(this.baseUrl+'/Purchase_order?na='+na);
  }

  getAllAssettypes(): Observable<any>{
    return this.http.get(this.baseUrl+'/AssetType');
  }

  getVendorList(id: number): Observable<any>{
    console.log(id);
    return this.http.get(this.baseUrl+'/Purchase_order/'+ id);
  }

  getAsset(na: string): Observable<any>{
    return this.http.get(this.baseUrl+'/AssetDef?name='+na);
  }

  postPurchase(po: PurchaseOrder){
    return this.http.post(this.baseUrl+'/Purchase_order',po);
  }

  getPurchaseList(): Observable<any>{
    return this.http.get(this.baseUrl+'/Purchase_order');
  }

  getPurchase(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/PurchaseEdit/'+id)
  }

  updatePurchase(id:number,purchase:PurchaseOrder):Observable<any>{
    return this.http.put(this.baseUrl+'/PurchaseEdit/'+id,purchase);
  }

  cancelPurchase(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'/Purchase_order/'+id);
  }

  searchPurchase(name: string): Observable<any> {
    return this.http.get(this.baseUrl + '/Purchase_order?na=' + name);
  }


}
