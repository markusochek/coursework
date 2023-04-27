package com.example.coursework.answer;

import com.example.coursework.newAnalysis.GeneralInformation;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Answer <T> {

    private Status status;
    private List<T> jsonResponse;

    public Answer(Status status) {
        this.status = status;
        this.jsonResponse = null;
    }

    public Answer(Status status, T jsonResponse) {
        this.status = status;
        this.jsonResponse = new ArrayList<>();
        this.jsonResponse.add(jsonResponse);

    }

    public String json(Status status, Object response) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        Answer<Object> answer = new Answer<>(status, response);
        return objectMapper.writeValueAsString(answer);
    }

//    public String json(Status status) throws JsonProcessingException {
//        ObjectMapper objectMapper = new ObjectMapper();
//        Answer<String> answer = new Answer<>(status);
//        return objectMapper.writeValueAsString(answer);
//    }
//
//    public String json(Status status, T response) throws JsonProcessingException {
//        ObjectMapper objectMapper = new ObjectMapper();
//        Answer<T> answer = new Answer<>(status, response);
//        return objectMapper.writeValueAsString(answer);
//    }
//
//    public String json(Status status, List<T> response) throws JsonProcessingException {
//        ObjectMapper objectMapper = new ObjectMapper();
//        Answer<T> answer = new Answer<>(status, response);
//        return objectMapper.writeValueAsString(answer);
//    }
}
