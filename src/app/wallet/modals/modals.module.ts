import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeModule } from 'angular2-qrcode';

import { MaterialModule } from '../../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClipboardModule } from 'ngx-clipboard';
import { ModalsComponent } from './modals.component';
import { ModalsService } from './modals.service';
import { SendComponent } from './send/send.component';
import { ReceiveComponent } from './receive/receive.component';
import { SuccessComponent } from './success/success.component';
import { TransactionComponent } from './transaction/transaction.component';
import { EditNodeComponent } from './edit-node/edit-node.component';
import { GhostNode1Component } from './ghost-node1/ghost-node1.component';
import { CancelNodeComponent } from './cancel-node/cancel-node.component';
import { WithdrawRewardsComponent } from './withdraw-rewards/withdraw-rewards.component';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { PasswordInputComponent } from './passwordinput/passwordinput.component';
import { OptimizeStakingComponent } from './optimize-staking/optimize-staking.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { AddaddressComponent } from './addaddress/addaddress.component';
import { SyncingWalletComponent } from './syncing-wallet/syncing-wallet.component';
import { RestoreWalletComponent } from './restore-wallet/restore-wallet.component';
import { CreateWalletComponent } from './create-wallet/create-wallet.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { GhostnodeInfoInputComponent } from './ghostnode-info-input/ghostnode-info-input.component';
import { VpsPasswordComponent } from './vps-password/vps-password.component';
import { LeasingContractComponent } from './leasing-contract/leasing-contract.component';
import { LeasingAmountComponent } from './leasing-amount/leasing-amount.component';
import { StakingDetailComponent } from './staking-detail/staking-detail.component';

@NgModule({
  declarations: [
    ModalsComponent,
    SendComponent,
    ReceiveComponent,
    SuccessComponent,
	  TransactionComponent,
    GhostNode1Component,
    EditNodeComponent,
    CancelNodeComponent,
    TransactionComponent,
    WithdrawRewardsComponent,
    PasswordchangeComponent,
    PasswordInputComponent,
    OptimizeStakingComponent,
    RecoveryComponent,
    AddaddressComponent,
    SyncingWalletComponent,
    RestoreWalletComponent,
    CreateWalletComponent,
    TransactionDetailComponent,
    GhostnodeInfoInputComponent,
    VpsPasswordComponent,
    LeasingContractComponent,
    LeasingAmountComponent,
    StakingDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    ClipboardModule,
    QRCodeModule
  ],
  exports: [
    ModalsComponent
  ],
  providers: [
    ModalsService,
  ],
  entryComponents: [
    ModalsComponent,
    SendComponent,
    ReceiveComponent,
    SuccessComponent,
    GhostNode1Component,
    EditNodeComponent,
    CancelNodeComponent,
    TransactionComponent,
    WithdrawRewardsComponent,
    SyncingWalletComponent,
    RestoreWalletComponent,
    CreateWalletComponent,
    TransactionDetailComponent,
    GhostnodeInfoInputComponent,
    VpsPasswordComponent,
    LeasingContractComponent,
    LeasingAmountComponent,
    StakingDetailComponent
  ]
})
export class ModalsModule {
}
