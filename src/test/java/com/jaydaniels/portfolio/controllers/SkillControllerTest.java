package com.jaydaniels.portfolio.controllers;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
@DisplayName("Test: >SkillController")
public class SkillControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void getAllSkills_ShouldReturnSkills_WhenSkillsExist() throws Exception {
        mockMvc.perform(get("/api/skills"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$[0].name").exists());
    }

    @Test
    void getSkillById_ShouldReturnSkill_WhenSkillExists() throws Exception {
        Long existingSkillId = 1L;
        mockMvc.perform(get("/api/skills/{id}", existingSkillId))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.id").value(existingSkillId));
    }

    @Test
    void getSkillById_ShouldReturnNotFound_WhenSkillDoesNotExist() throws Exception {
        Long nonExistingSkillId = 999L;
        mockMvc.perform(get("/api/skills/{id}", nonExistingSkillId))
               .andExpect(status().isNoContent());
    }
}
