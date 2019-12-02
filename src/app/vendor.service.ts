import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private baseUrl = 'http://localhost:51734/api';


  constructor(private http: HttpClient) { }


  getVendorList(): Observable<any> {
    return this.http.get(this.baseUrl + '/Vendors');
  }

  deleteVendor(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/Vendors/' + id);

  }

  addVendor(pdt: Vendor) {
    return this.http.post(this.baseUrl + '/Vendors', pdt);
  }

  GetVendor(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/Vendors/' + id);
  }

  UpdateVendor(id: number, vendor: Vendor) {
    return this.http.put(this.baseUrl + '/Vendors/' + id, vendor);
  }
  searchVendor(name: string): Observable<any> {
    return this.http.get(this.baseUrl + '/assets?name=' + name);
  }

  getAssetType(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetType/' + id);
  }

  getAssetTypes(): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetType');
  }
  putVendor(id: number, vendor: Vendor): Observable<any> {
    return this.http.put(this.baseUrl + '/Vendors/' + id, vendor);
  }



}
