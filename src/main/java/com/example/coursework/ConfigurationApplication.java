package com.example.coursework;

import com.example.coursework.answer.Answer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConfigurationApplication {
    @Bean
    Answer<String> answer() {
        return new Answer<>();
    }
}
