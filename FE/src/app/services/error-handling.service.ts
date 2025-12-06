import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  private errorTypeMapping: { [key: string]: string } = {
    "OFFLINE": "Server is offline, please try again later",
    "INTERNAL_SERVER_ERROR": "Server error: please contact the administrator",
    "PAYMENT_REQUIRED_ERROR": "Upgrade is required: please click on the button to upgrade",
  }

  constructor(private snackBar: MatSnackBar) { }

  handleError(errorType: string): void {
    const message = this.errorTypeMapping[errorType] || "An unexpected error occurred";
    this.snackBar.open(message, "Close", { duration: 3000 });
  }
}

