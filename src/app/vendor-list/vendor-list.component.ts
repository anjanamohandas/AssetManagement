import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Do you want to delete?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;


  vendors: Observable<Vendor[]>;

  constructor(private assetService: VendorService, private router: Router, private toastr: ToastrService) { }


  ngOnInit() {
    this.reloadData();

  }

  reloadData() {
    this.vendors = this.assetService.getVendorList();
  }


  deleteVendor(id: number) {


    this.assetService.deleteVendor(id).subscribe(data => {
      console.log(data);
      this.toastr.success('Deleted Successfully');

      this.reloadData();
    })

  }

 




}
