import { Component } from '@angular/core';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [LandingPageComponent, RouterOutlet],
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-error-handling';
}
