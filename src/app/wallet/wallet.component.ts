import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from '../credit-card/credit-card.component';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, CreditCardComponent],
  template: `
    <div class="cc-container">
      @for (creditCard of creditCardListExample; track creditCard.cardUuid) {
        <app-credit-card
          class="credit-card"
          [amount]="creditCard.amount"
          [cardColor]="creditCard.cardColor"
          [cardCompanyLogo]="creditCard.cardCompanyLogo"
          [cardNumber]="creditCard.cardNumber"
          [cardUuid]="creditCard.cardUuid"
          [currency]="creditCard.currency"
        ></app-credit-card>
      }
    </div>
  `,
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
  // this list would normally be fetched from an API
  creditCardListExample = [
    {
      amount: 542.25,
      cardColor: 'blue',
      cardCompany: 'master',
      cardCompanyLogo: 'MasterCard',
      cardNumber: '•••• 4587',
      cardUuid: 'e5926e76-85aa-11ee-b9d1-0242ac120002',
      currency: '$'
    },
    {
      amount: 1000,
      cardColor: 'red',
      cardCompany: 'visa',
      cardCompanyLogo: 'Visa',
      cardNumber: '•••• 0745',
      cardUuid: 'f8fad4b2-85aa-11ee-b9d1-0242ac120002',
      currency: '₴'
    }
  ]; 
  
}
