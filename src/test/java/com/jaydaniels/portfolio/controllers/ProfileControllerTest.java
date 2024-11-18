package com.jaydaniels.portfolio.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jaydaniels.portfolio.dto.ProfileResponse;
import org.apache.commons.lang3.StringUtils;
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
@DisplayName("Test: >ProfileController")
public class ProfileControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testGetProfile() throws Exception {
        // Execute GET-Request
        MvcResult result = mockMvc.perform(get("/api/profile")
                                  .contentType(MediaType.APPLICATION_JSON))
                                  .andExpect(status().isOk())
                                  .andReturn();

        // JSON adapt to ProfileResponse
        String jsonResponse = result.getResponse().getContentAsString();
        ProfileResponse profileResponse = objectMapper.readValue(jsonResponse, ProfileResponse.class);

        // Assertions
        assertNotNull(profileResponse);
        assertEquals("Jay Daniels", profileResponse.name());
        assertTrue(profileResponse.description().startsWith("Greetings and welcome to my portfolio!"));
        assertEquals("/components/profile/profile.png", profileResponse.picture());
    }
}
