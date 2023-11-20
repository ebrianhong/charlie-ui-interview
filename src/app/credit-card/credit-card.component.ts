import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="cc-background {{cardColor}}">
    <p class="cc-amount">
        {{currency}}{{amount}}
    </p>
    <div class="cc-bottom">
      <p class="cc-number">
        {{cardNumber}}
      </p>
      <img class="cc-logo" src="../../assets/wallet/{{cardCompanyLogo}}.png">
    </div>
  </div>
  `,
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent {
  @Input() amount!: number;
  @Input() cardColor!: string;
  @Input() cardNumber!: string;
  @Input() cardCompanyLogo!: string;
  @Input() cardUuid!: string;
  @Input() currency!: string;
}
