import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IRecentTransactionInfo, RecentTransactionInfo } from '../../business-model/entities';
import { RpcStateService } from '../../../core/core.module';
import { ApiEndpoints, categories, message } from '../../business-model/enums';
import { faArrowDown, faArrowUp, faCircle as faCircleSolid, faDollarSign, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Log } from 'ng2-logger';

@Component({
  selector: 'app-ghost-vault-transaction',
  templateUrl: './ghost-vault-transaction.component.html',
  styleUrls: ['./ghost-vault-transaction.component.scss']
})
export class GhostVaultTransactionComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<IRecentTransactionInfo>;
  trasactionInfo: RecentTransactionInfo = new IRecentTransactionInfo();
  private destroyed: boolean;
  private defaults: any = {
    header: true,
    numTransactions: 10,
    columns: ['date', 'category', 'status', 'amount'],
    longDate: false,
    styleClass: '',
  };
  faCircleSolid: any = faCircleSolid;
  faCircle: any = faCircle;
  private log: any = Log.create('ghost-vault-transaction.component');

  constructor(private _rpcState: RpcStateService,) { }

  ngOnInit() {
    this._rpcState.registerStateCall(ApiEndpoints.ListTransactions, 1000);
    this.listTransaction();
    this.dataSource = new MatTableDataSource<IRecentTransactionInfo>();
    this.dataSource.data=null;
  }

  public getConfirmationsStyle(confirmations: number): string {
    if (confirmations < 0) {
      return 'confirm-error';
    } else if (confirmations <= 1) {
      return 'confirm-none';
    } else {
      return 'confirm-ok';
    }
  }

  public getConfirmationsText(confirmations: number): string {
    if (confirmations < 0) {
      return 'Error';
    } else if (confirmations <= 1) {
      return 'Processing';
    } else {
      return 'Complete';
    }
  }

  public getCategoryText(category: string, currency: string): string {
    if (categories.Send) {
      return `Sent ${currency}`;
    } else if (categories.Receive) {
      return `Received ${currency}`;
    } else if (categories.Node) {
      return `Node Earnings`;
    }
    return '';
  }

  public getCategoryIconStyle(category: string): any {
    if (categories.Send) {
      return faArrowUp;
    } else if (categories.Receive) {
      return faArrowDown;
    } else if (categories.Node) {
      return faDollarSign;
    }
    return '';
  }
  
  // get recent transactions
  private listTransaction() {
    this._rpcState.observe(ApiEndpoints.ListTransactions)
      .subscribe(recentTransInfo => {
        this.trasactionInfo = recentTransInfo;
        // this.testDataSource = RecentTransInfo.transactions;
        this.dataSource.data = recentTransInfo;
      },
        error => this.log.error(message.recentTransactionMessage, error));
  }
  
  ngOnDestroy(): void {
    this.destroyed = true;
  }
}
