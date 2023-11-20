import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="buttons-container">
      <a class="button-icon" href="/send">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#366AB3"/>
          </svg>
          <img src="../../assets/buttons/send-money.svg">
        </div>
        <p>Send</p>
      </a>
      <a class="button-icon" href="/receive">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#366AB3"/>
          </svg>
          <img src="../../assets/buttons/receive-money.svg">
        </div>
        <p>Receive</p>
      </a>
      <a class="button-icon" href="/utilities">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#366AB3"/>
          </svg>
          <img src="../../assets/buttons/utilities.svg">
        </div>
        <p>Utilities</p>
      </a>
      <a class="button-icon" href="/stats">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#366AB3"/>
          </svg>
          <img src="../../assets/buttons/stats.svg">
        </div>
        <p>Stats</p>
      </a>
    </div>
  `,
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

}
