import { Component } from '@angular/core';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [LandingPageComponent],
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-error-handling';
}
