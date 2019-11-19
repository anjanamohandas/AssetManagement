import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssetDef } from '../asset-def';
import { AssetDefService } from '../asset-def.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asset-def',
  templateUrl: './asset-def.component.html',
  styleUrls: ['./asset-def.component.scss']
})
export class AssetDefComponent implements OnInit {

  assetForm: FormGroup;
  asset: AssetDef = new AssetDef();

  constructor(private formBuilder: FormBuilder, private service: AssetDefService, private toastr: ToastrService) { }

  ngOnInit() {

    this.assetForm = this.formBuilder.group({
      ad_name: ['', Validators.compose([Validators.required])],
      ad_type_id: ['', Validators.compose([Validators.required])],
      ad_class: ['', Validators.compose([Validators.required])]


    });
  }

  addAsset() {
    this.asset.ad_name = this.assetForm.controls.ad_name.value;
    this.asset.ad_type_id = this.assetForm.controls.ad_type_id.value;
    this.asset.ad_class = this.assetForm.controls.ad_class.value;


    this.service.addAsset(this.asset).subscribe();
    this.ngOnInit();

  }

}
