package com.example.coursework.newAnalysis;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
@AllArgsConstructor
public class newAnalysisController {

//    @GetMapping
//    public String index() {
//        return "index";
//    }

    @PostMapping("newAnalysis")
    public GeneralInformation authorization(@RequestBody GeneralInformation generalInformation) {
        return generalInformation;
    }
}
