import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="nav-bar-container">
      <a class="selected" href="/home">
        <img src = "../../assets/nav-bar/home.svg" alt="My Happy SVG"/>
        <p>Home</p>
      </a>
      <a href="/exchange-rate"> 
        <img src = "../../assets/nav-bar/exchange-rate.svg" alt="My Happy SVG"/>
        <p>Exchange</p>
      </a>
      <a href="/pin">
        <img src = "../../assets/nav-bar/pin.svg" alt="My Happy SVG"/>
        <p>Map</p>
      </a>
      <a href="/settings">
        <img src = "../../assets/nav-bar/settings.svg" alt="My Happy SVG"/>
        <p>Settings</p>
      </a>
    </div>
  `,
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
