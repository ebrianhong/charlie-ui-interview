import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="transaction-container">
      <div class="transaction-logo-container" >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="23.5" fill="white" stroke="#B8B8B8"/>
        </svg>
        <img src="../../assets/transactions/{{transactionImg}}.png">
      </div>
      <div class="transaction-middle">
        <p class="company-name">{{companyName}}</p>
        <p class="date">
          {{this.monthMap[date.getMonth()]}} 
          {{date.getDate()}}, 
          {{date.getFullYear()}} 
          {{date.getHours()}}:{{date.getMinutes()}}
        </p>
      </div>
      <p class="transaction-amount {{transactionType}}">
        {{currency}}{{amount}}
      </p>
    </div>
  `,
  styleUrl: './transaction.component.scss'
})

export class TransactionComponent {
  @Input() amount!: number;
  @Input() transactionImg!: string;
  @Input() transactionType!: string;
  @Input() companyName!: string;
  @Input() transactionUuid!: string;
  @Input() date!: any;
  @Input() currency!: string;

  monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

}
