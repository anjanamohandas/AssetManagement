import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PurchaseService } from '../purchase.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { PurchaseOrder } from '../purchase-order';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {

 /*  purchase:Observable<PurchaseOrder>;
  purchases:Observable<PurchaseOrder[]>; */
  public popoverTitle: string = 'Cancel Order???';
  public popoverMessage: string = 'If sure, click Confirm...';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  purchases: Observable<PurchaseOrder[]>;



  constructor(private authService:AuthService, private toastr: ToastrService, private router:Router, private purchaseService: PurchaseService) { }

  ngOnInit() {
    this.reloadData();
  }

 
  reloadData(){
    this.purchases=this.purchaseService.getPurchaseList();
    this.purchases.forEach(x=>{
      x.forEach(element=>{
        console.log(element["pd_ad_name"]);
      })
    })
  }
  
  cancelOrder(id: number){
    this.purchaseService.cancelPurchase(id).subscribe(res=>{
      this.toastr.success('Order Cancelled');
      this.reloadData();
    })

  }

}
