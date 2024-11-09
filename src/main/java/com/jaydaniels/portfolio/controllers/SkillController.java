package com.jaydaniels.portfolio.controllers;

import com.jaydaniels.portfolio.dto.SkillResponse;
import com.jaydaniels.portfolio.services.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/skills")
public class SkillController {

    private final SkillService skillService;

    @Autowired
    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    // Get all skills from skillService
    @GetMapping
    public ResponseEntity<List<SkillResponse>> getAllSkills() {
        return Optional.ofNullable(skillService.getAllSkills())
                       .filter(skills -> !skills.isEmpty())
                       .map(ResponseEntity::ok)
                       .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Get skill by id from skillService
    @GetMapping("/{id}")
    public ResponseEntity<SkillResponse> getSkillById(@PathVariable Long id) {
        return Optional.ofNullable(skillService.getSkillById(id))
                       .map(ResponseEntity::ok)
                       .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
