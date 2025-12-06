package hu.errorhandling.demo.controller;

import hu.errorhandling.demo.api.ErrorHandlingAPI;
import hu.errorhandling.demo.model.DemoResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ErrorHandlingController implements ErrorHandlingAPI {

    @Override
    public ResponseEntity<DemoResponse> executeSuccessAPI() {
        return ResponseEntity.ok().body(null);
    }

    @Override
    public ResponseEntity<DemoResponse> executeErrorAPI() {
        String INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR";
        return ResponseEntity.internalServerError().body(new DemoResponse(INTERNAL_SERVER_ERROR));
    }

    @Override
    public ResponseEntity<DemoResponse> executeUpgradeAPI() {
        String PAYMENT_REQUIRED_ERROR = "PAYMENT_REQUIRED_ERROR";
        return ResponseEntity.status(402).body(new DemoResponse(PAYMENT_REQUIRED_ERROR));
    }
}
