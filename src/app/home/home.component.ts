import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component'; 
import { WalletComponent } from '../wallet/wallet.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { TransactionsComponent } from '../transactions/transactions.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    NavBarComponent, 
    WalletComponent, 
    ButtonsComponent, 
    TransactionsComponent
  ],
  template: `
    <div id="home-container">
      <app-nav-bar id="nav-bar"></app-nav-bar>
      <app-wallet></app-wallet>
      <app-buttons></app-buttons>
      <app-transactions></app-transactions>
    </div>
    
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
