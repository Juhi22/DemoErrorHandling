import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BackendApiService } from '../../services/backend-api.service';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { ErrorHandlingService } from '../../services/error-handling.service';
import { DemoResponse } from '../../interfaces/demo-response';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'landing-page',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(private backendApiService: BackendApiService, private errorHandlingService: ErrorHandlingService, private snackBar: MatSnackBar) { }

  public clickButton(buttonFunction: string): void {
    this.backendApiService.sendGetRequest(buttonFunction).pipe(
      takeUntil(this.destroy$),
      catchError(err => {
        const demoResponse: DemoResponse = err.error;
        if (demoResponse && demoResponse.errorType) {
          this.errorHandlingService.handleError(demoResponse.errorType);
        }
        return EMPTY;
      })
    ).subscribe(() => this.snackBar.open("Request was successful"));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
