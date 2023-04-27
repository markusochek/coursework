package com.example.coursework.newAnalysis;

import com.example.coursework.answer.Answer;
import com.fasterxml.jackson.core.JsonProcessingException;
import enums.Status;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
@AllArgsConstructor
public class NewAnalysisController {
    private final Answer<String> answer;

    @PostMapping("newAnalysis")
    public String newAnalysis(@RequestBody GeneralInformation generalInformation) throws JsonProcessingException {
        return answer.json(Status.OK, generalInformation);
    }
}
