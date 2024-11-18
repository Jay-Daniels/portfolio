package com.jaydaniels.portfolio.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jaydaniels.portfolio.dto.SkillResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
@DisplayName("Test: >SkillController")
public class SkillControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testGetAllSkills() throws Exception {
        // Execute GET-Request
        MvcResult result = mockMvc.perform(get("/api/skills")
                                  .contentType(MediaType.APPLICATION_JSON))
                                  .andExpect(status().isOk())
                                  .andReturn();

        // JSON adapt to SkillResponse
        String jsonResponse = result.getResponse().getContentAsString();
        SkillResponse[] skillResponses = objectMapper.readValue(jsonResponse, SkillResponse[].class);

        // Assertions
        assertNotNull(skillResponses);
        assertTrue(skillResponses.length > 0);
        assertEquals(skillResponses[0].name(),"Java");
        assertEquals(skillResponses[0].icon(),"java-icon.png");
        assertEquals(skillResponses[0].proficiency(),4);
        assertFalse(skillResponses[0].isFrontend());
    }

    @Test
    void testGetSkillById() throws Exception {
        Long existingSkillId = 1L;
        MvcResult result = mockMvc.perform(get("/api/skills/{id}", existingSkillId)
                                  .contentType(MediaType.APPLICATION_JSON))
                                  .andExpect(status().isOk())
                                  .andReturn();

        // JSON adapt to SkillResponse
        String jsonResponse = result.getResponse().getContentAsString();
        SkillResponse skillResponse = objectMapper.readValue(jsonResponse, SkillResponse.class);

        // Assertions
        assertNotNull(skillResponse);
        assertEquals(existingSkillId, skillResponse.id());
        assertEquals(skillResponse.name(),"Java");
        assertEquals(skillResponse.icon(),"java-icon.png");
        assertEquals(skillResponse.proficiency(),4);
        assertFalse(skillResponse.isFrontend());
    }

    @Test
    void testGetSkillByIdFail() throws Exception {
        Long nonExistingSkillId = 999L;
        mockMvc.perform(get("/api/skills/{id}", nonExistingSkillId)
               .contentType(MediaType.APPLICATION_JSON))
               .andExpect(status().isNoContent());
    }
}
