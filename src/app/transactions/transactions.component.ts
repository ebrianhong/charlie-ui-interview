import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from '../transaction/transaction.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, TransactionComponent],
  template: `
    <div id="transactions-container">
      <h1>Transactions</h1>
      @for (transaction of transactionsExample; track transaction.transactionUuid) {
        <app-transaction
          [amount]="transaction.amount"
          [transactionImg]="transaction.transactionImg"
          [transactionType]="transaction.transactionType"
          [date]="transaction.date"
          [companyName]="transaction.companyName"
          [transactionUuid]="transaction.transactionUuid"
          [currency]="transaction.currency"
        ></app-transaction>
      }
    </div>
  `,
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  
  transactionsExample = [
    {
      amount: 9.99,
      transactionImg: 'netflix',
      transactionType: 'debit',
      companyName: 'Netflix',
      transactionUuid: '1476a44a-8750-11ee-b9d1-0242ac120002',
      date: new Date(2022, 6, 3, 13, 23),
      currency: '$'
    },
    {
      amount: 9.99,
      transactionImg: 'starbucks',
      transactionType: 'debit',
      companyName: 'Starbucks',
      transactionUuid: '1476a44a-8750-11ee-b9d1-0242ac120002',
      date: new Date(2022, 6, 3, 9, 13),
      currency: '$'
    },
    {
      amount: 9.99,
      transactionImg: 'melania-skorokhod',
      transactionType: 'credit',
      companyName: 'Melania Skorokhod',
      transactionUuid: '1476a44a-8750-11ee-b9d1-0242ac120002',
      date: new Date(2022, 6, 3, 9, 13),
      currency: '$'
    },
    {
      amount: 9.99,
      transactionImg: 'netflix',
      transactionType: 'debit',
      companyName: 'Netflix',
      transactionUuid: '1476a44a-8750-11ee-b9d1-0242ac120002',
      date: new Date(2022, 6, 3, 13, 23),
      currency: '$'
    },
    {
      amount: 9.99,
      transactionImg: 'starbucks',
      transactionType: 'debit',
      companyName: 'Starbucks',
      transactionUuid: '1476a44a-8750-11ee-b9d1-0242ac120002',
      date: new Date(2022, 6, 3, 9, 13),
      currency: '$'
    },
    {
      amount: 9.99,
      transactionImg: 'melania-skorokhod',
      transactionType: 'credit',
      companyName: 'Melania Skorokhod',
      transactionUuid: '1476a44a-8750-11ee-b9d1-0242ac120002',
      date: new Date(2022, 6, 3, 9, 13),
      currency: '$'
    },
  ]
}
