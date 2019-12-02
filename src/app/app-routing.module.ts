import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetDefComponent } from './asset-def/asset-def.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authh.guard';
import { UserComponent } from './user/user.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { AdminComponent } from './admin/admin.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { PurchaseManagerComponent } from './purchase-manager/purchase-manager.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { AssetMasterComponent } from './asset-master/asset-master.component';
import { AssetMasterListComponent } from './asset-master-list/asset-master-list.component';
import { MasterOrderListComponent } from './master-order-list/master-order-list.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'create', component: AssetDefComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: AssetEditComponent, canActivate: [AuthGuard] },
  { path: 'assets', component: AssetListComponent, canActivate: [AuthGuard] },
  { path: 'user', component: PurchaseManagerComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'Asset Definition', component: AssetDefComponent, canActivate: [AuthGuard] },
  { path: 'vendor', component: VendorAddComponent, canActivate: [AuthGuard] },
  { path: 'Vendorlist', component: VendorListComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: VendorEditComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'purchaseorder', component: PurchaseManagerComponent, canActivate: [AuthGuard] },
  { path: 'orderhistory', component: PurchaseListComponent, canActivate: [AuthGuard] },
  {path:'editPurchase/:id',component:PurchaseEditComponent},
  {path:'assetmaster/:id',component:AssetMasterComponent,canActivate:[AuthGuard]},
  {path:'masterlist',component:AssetMasterListComponent,canActivate:[AuthGuard]},
  {path:'masterorderlist',component:MasterOrderListComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
