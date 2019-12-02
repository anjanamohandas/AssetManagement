import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseService } from '../purchase.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { PurchaseOrder } from '../purchase-order';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssetType } from '../asset-type';
import { VendorAddComponent } from '../vendor-add/vendor-add.component';
import { Vendor } from '../vendor';
import { element } from 'protractor';

@Component({
  selector: 'app-purchase-manager',
  templateUrl: './purchase-manager.component.html',
  styleUrls: ['./purchase-manager.component.scss']
})
export class PurchaseManagerComponent implements OnInit {

purchaseForm: FormGroup;
assettypes: Observable<AssetType[]>;
vendors: Observable<Vendor[]>;
assetId: number;
purchaseorder: PurchaseOrder=new PurchaseOrder();


  constructor(private purchaseService: PurchaseService, 
    private router: Router, private formBuilder: FormBuilder, private toastr:ToastrService,private authService: AuthService) { }

  ngOnInit() {

    this.reloadData();

  }


  reloadData(){

    this.purchaseForm=this.formBuilder.group({
      pd_order_no : ['ORD'+Math.floor((Math.random() * 10000) + 1),Validators.compose([Validators.required])],
      pd_type_id: ['',Validators.compose([Validators.required])],
      pd_qty: ['',Validators.compose([Validators.required])],
      pd_vendor_id: ['',Validators.compose([Validators.required])]
     
     
    });  
    
  }


  
  onOptionsSelected(value: number){
    
    this.vendors=this.purchaseService.getVendorList(value);
    this.purchaseService.getVendorList(value).subscribe(data=>{
      
    })
   
  }


  searchAssetType(na: string){
    this.assettypes=this.purchaseService.getAssettypes(na);
    this.purchaseService.getAsset(na).subscribe(x=>{
      x.forEach(element =>{
        console.log(element["ad_id"]);
        this.assetId=element["ad_id"];
      })
      

    })
    console.log(this.assettypes);
  }

  addOrder(){
    console.log(this.assetId);

    this.purchaseorder.pd_order_no=this.purchaseForm.controls.pd_order_no.value;
    this.purchaseorder.pd_ad_id=this.assetId; 
    this.purchaseorder.pd_qty=this.purchaseForm.controls.pd_qty.value;
    this.purchaseorder.pd_type_id=this.purchaseForm.controls.pd_type_id.value;
    this.purchaseorder.pd_vendor_id=this.purchaseForm.controls.pd_vendor_id.value;
    this.purchaseorder.pd_status='PO-Raised with Supplier';

    this.purchaseService.postPurchase(this.purchaseorder).subscribe(res=>{
      this.toastr.success('Order Placed');
      this.reloadData();
    })

  }


  Search(name:string)
  {
  
      this.assettypes=this.purchaseService.searchPurchase(name);
      
    
  }
 

  Logout(){
    this.authService.logout();
    this.router.navigateByUrl("login");
  }

}
