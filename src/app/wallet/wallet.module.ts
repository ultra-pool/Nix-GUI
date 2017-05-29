import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PaginationModule } from 'ngx-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';

import { TransactionService } from './shared/transaction.service';
import { AddressService } from './shared/address.service';

import { HeaderComponent } from './shared/header/header.component';
import { TransactionTableComponent } from './shared/transaction-table/transaction-table.component';
import { AddressTableComponent } from './shared/address-table/address-table.component';

import { AddressBookComponent } from './address-book/address-book.component';
import { SendComponent } from './send/send.component';
import { BalanceComponent } from './balances/balance.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: 'wallet',
    children: [
      { path: 'history', component: HistoryComponent, data: { title: 'History' } },
      { path: 'send', component: SendComponent, data: { title: 'Send' } },
      { path: 'address-book', component: AddressBookComponent, data: { title: 'Address Book' } }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    PaginationModule,
    ClipboardModule
  ],
  declarations: [
    HeaderComponent,
    TransactionTableComponent,
    AddressTableComponent,
    AddressBookComponent,
    SendComponent,
    BalanceComponent,
    HistoryComponent
  ],
  exports: [
    HeaderComponent,
    TransactionTableComponent,
    AddressTableComponent,
    BalanceComponent
  ],
  providers: []
})
export class WalletModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WalletModule,
      providers: [
        TransactionService,
        AddressService
      ]
    };
  }
}
