import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';
//import { SharedModule } from './saas/shared/shared.module'
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular';
import { CentralbankDashboardComponent } from './centralbank-dashboard/centralbank-dashboard.component';
import { CommercialbankDashboardComponent } from './commercialbank-dashboard/commercialbank-dashboard.component';


// import { DefaultComponent } from './default/default.component';
// //import { SaasComponent } from './saas/saas.component';
// //import { CryptoComponent } from './crypto/crypto.component';
// //import { BlogComponent } from './blog/blog.component';
// import { UserComponent } from './user/user.component';
// import { WalletComponent } from './wallet/wallet.component';

@NgModule({
  declarations: [CentralbankDashboardComponent, CommercialbankDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,
    //SharedModule,
    SimplebarAngularModule,

  ]
})

export class DashboardsModule { }
