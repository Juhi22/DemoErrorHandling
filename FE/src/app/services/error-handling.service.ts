import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

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

  handleError(errorType: string): MatSnackBarRef<TextOnlySnackBar> {
    const message = this.errorTypeMapping[errorType] || "An unexpected error occurred";
    if (errorType == "PAYMENT_REQUIRED_ERROR") {
      return this.snackBar.open(message, "Upgrade now", { duration: 6000 });
    }
    return this.snackBar.open(message, undefined, { duration: 3000 });
  }
}

