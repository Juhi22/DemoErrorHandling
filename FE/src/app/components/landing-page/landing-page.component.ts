import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BackendApiService } from '../../services/backend-api.service';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { ErrorHandlingService } from '../../services/error-handling.service';
import { DemoResponse } from '../../interfaces/demo-response';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-page',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnDestroy {

  private destroy$ = new Subject<void>();
  private snackBarRef?: MatSnackBarRef<TextOnlySnackBar>

  constructor(private backendApiService: BackendApiService, private errorHandlingService: ErrorHandlingService,
    private snackBar: MatSnackBar, private router: Router) { }

  public clickButton(buttonFunction: string): void {
    this.backendApiService.sendGetRequest(buttonFunction).pipe(
      takeUntil(this.destroy$),
      catchError(err => {
        const demoResponse: DemoResponse = err.error;
        if (demoResponse && demoResponse.errorType) {
          this.snackBarRef = this.errorHandlingService.handleError(demoResponse.errorType);
          this.snackBarRef.onAction().subscribe(() => {
            this.router.navigate(['/pricing']);
          });
        }
        return EMPTY;
      })
    ).subscribe(() => this.snackBar.open("Request was successful", undefined, { duration: 3000 }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.snackBarRef?.dismiss();
  }

}
