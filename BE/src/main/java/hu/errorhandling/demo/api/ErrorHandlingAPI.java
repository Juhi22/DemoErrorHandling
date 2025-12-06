package hu.errorhandling.demo.api;

import hu.errorhandling.demo.model.DemoResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping
@CrossOrigin("*")
public interface ErrorHandlingAPI {

    String API_PATH_PREFIX = "/api/demo";
    String API_PATH_SUCCESS = API_PATH_PREFIX + "/success";
    String API_PATH_ERROR = API_PATH_PREFIX + "/error";
    String API_PATH_UPGRADE = API_PATH_PREFIX + "/upgrade";

    @GetMapping(API_PATH_SUCCESS)
    ResponseEntity<DemoResponse> executeSuccessAPI();

    @GetMapping(API_PATH_ERROR)
    ResponseEntity<DemoResponse> executeErrorAPI();

    @GetMapping(API_PATH_UPGRADE)
    ResponseEntity<DemoResponse> executeUpgradeAPI();
}
