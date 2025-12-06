import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BackendApiService } from '../../services/backend-api.service';

@Component({
  selector: 'landing-page',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor(private backendApiService: BackendApiService) { }

  public clickButton(buttonFunction: string): void {
    this.backendApiService.sendGetRequest(buttonFunction);
  }

}
