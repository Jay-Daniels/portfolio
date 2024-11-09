package com.jaydaniels.portfolio.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jaydaniels.portfolio.dto.SkillResponse;
import com.jaydaniels.portfolio.models.Skill;
import com.jaydaniels.portfolio.repositories.SkillRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.when;

@SpringBootTest
public class SkillServiceTest {

    @Mock
    private SkillRepository skillRepository;

    @InjectMocks
    private SkillService skillService;

    private ObjectMapper objectMapper;
    private Skill skill;

    @BeforeEach
    void setUp() throws IOException {
        // Initialize ObjectMapper once for the entire class
        objectMapper = new ObjectMapper();

        // Load the JSON data from the resource file
        Resource resource = new ClassPathResource("components/skill_service/skill_service_test_resource.json");
        skill = objectMapper.readValue(resource.getFile(), Skill.class);
    }

    @Test
    void getAllSkills_ShouldReturnSkills() {
        // Mocking the repository's findAll method to return the sample skill
        when(skillRepository.findAll()).thenReturn(List.of(skill));

        // Calling the service method and asserting the result
        List<SkillResponse> skills = skillService.getAllSkills();
        assertEquals(1, skills.size());  // Verifying the correct number of skills are returned
        assertEquals("Java", skills.get(0).getName());  // Verifying the name of the returned skill
    }

    @Test
    void getSkillById_ShouldReturnSkill_WhenSkillExists() {
        Long skillId = 1L;

        // Mocking the repository's findById method to return the sample skill
        when(skillRepository.findById(skillId)).thenReturn(Optional.of(skill));

        // Calling the service method and asserting the result
        SkillResponse skillResponse = skillService.getSkillById(skillId);
        assertEquals(skillId, skillResponse.getId());  // Verifying the returned skill's ID
    }

    @Test
    void getSkillById_ShouldReturnNull_WhenSkillDoesNotExist() {
        Long skillId = 999L;

        // Mocking the repository's findById method to return empty for a non-existing skill
        when(skillRepository.findById(skillId)).thenReturn(Optional.empty());

        // Calling the service method and asserting the result
        SkillResponse skillResponse = skillService.getSkillById(skillId);
        assertNull(skillResponse);  // Verifying that null is returned when the skill doesn't exist
    }
}
