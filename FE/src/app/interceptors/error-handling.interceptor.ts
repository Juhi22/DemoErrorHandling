import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, EMPTY, throwError } from 'rxjs';
import { ErrorHandlingService } from '../services/error-handling.service';
import { DemoResponse } from '../interfaces/demo-response';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
  const errorHandlingService = inject(ErrorHandlingService);
  return next(req).pipe(
    catchError(err => {
      const demoResponse: DemoResponse = err.error;
      if (err.status == 0) {
        errorHandlingService.handleError("OFFLINE");
      } else if (demoResponse && (demoResponse.errorType == "INTERNAL_SERVER_ERROR")) {
        errorHandlingService.handleError(demoResponse.errorType);
      }
      return throwError(() => err);
    })
  );
};
