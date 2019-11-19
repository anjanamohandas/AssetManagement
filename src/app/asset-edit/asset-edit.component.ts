import { Component, OnInit } from '@angular/core';
import { AssetDef } from '../asset-def';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssetDefService } from '../asset-def.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit {

  asset: AssetDef = new AssetDef;

  assetform: FormGroup;


  constructor(private service: AssetDefService, private route: ActivatedRoute, private formBuilder: FormBuilder, private toastr: ToastrService) { }
  ad_id: number;


  ngOnInit() {

    this.ad_id = this.route.snapshot.params["ad_id"];
    console.log(this.ad_id);
    this.assetform = this.formBuilder.group({
      pid: null,
      pname: [Validators.compose([Validators.required])],
      pdesc: [Validators.compose([Validators.required])],
      price: [Validators.compose([Validators.required])],
      pdate: [Validators.compose([Validators.required])],
    });
    this.service.GetAsset(this.ad_id).subscribe(x => {
      this.asset = x;
      console.log(x)

    });


  }

  get formControl() {
    return this.assetform.controls;
  }
  updateProduct() {
    this.asset.ad_id = this.assetform.controls.pid.value;
    this.asset.ad_name = this.assetform.controls.pname.value;
    this.asset.ad_type_id = this.assetform.controls.pdesc.value;
    this.asset.ad_class = this.assetform.controls.price.value;
    this.service.UpdateAsset(this.ad_id, this.asset).subscribe(res => {
      this.toastr.warning('Update successfull', 'yipee!')
    })


  }

}
