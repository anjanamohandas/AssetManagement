import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { VendorService } from '../vendor.service';
import { ToastrService } from 'ngx-toastr';
import { Vendor } from '../vendor';
import { Observable } from 'rxjs';
import { AssetType } from '../asset-type';



@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.scss']
})
export class VendorAddComponent implements OnInit {
  vendorForm: FormGroup;
  vendor: Vendor = new Vendor();
  assettypes: Observable<AssetType[]>;

  constructor(private router: Router, private authservice: AuthService, private formBuilder: FormBuilder, private service: VendorService, private toastr: ToastrService) { }

  ngOnInit() {

    

    this.vendorForm = this.formBuilder.group({
      vd_name: ['', Validators.compose([Validators.required])],
      vd_type: ['Supplier'],
      vd_atype_id: ['', Validators.compose([Validators.required])],
      vd_addr: ['', Validators.compose([Validators.required])],
      vd_from: ['', Validators.compose([Validators.required])],
      vd_to: ['', Validators.compose([Validators.required])],

      

   });
   this.assettypes = this.service.getAssetTypes();

   this.assettypes.forEach(x=>{
     x.forEach(res=>{
       console.log(res["at_name"]);
     })
   })
  

}

addVendor() {
  this.vendor.vd_name = this.vendorForm.controls.vd_name.value;
  this.vendor.vd_type= this.vendorForm.controls.vd_type.value;
  this.vendor.vd_atype_id = this.vendorForm.controls.vd_atype_id.value;
  this.vendor.vd_from = this.vendorForm.controls.vd_from.value;
  this.vendor.vd_to = this.vendorForm.controls.vd_to.value;
  this.vendor.vd_addr = this.vendorForm.controls.vd_addr.value;


  this.service.addVendor(this.vendor).subscribe(res => {
    if (res == 1) {
      
      this.toastr.success("Vendor added");
    }
    else {
      this.toastr.error("Vendor already exist");
    }
  });


  this.ngOnInit();

}
Logout() {
  this.authservice.logout();
  this.router.navigateByUrl('login');

}
}
