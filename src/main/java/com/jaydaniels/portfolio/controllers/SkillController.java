package com.jaydaniels.portfolio.controllers;

import com.jaydaniels.portfolio.dto.SkillResponse;
import com.jaydaniels.portfolio.services.SkillService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/skills")
public class SkillController {

    private final SkillService skillService;

    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @GetMapping
    public ResponseEntity<List<SkillResponse>> getAllSkills() {
        List<SkillResponse> skills = skillService.getAllSkills();

        return skills.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(skills);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SkillResponse> getSkillById(@PathVariable Long id) {
        Optional<SkillResponse> skill = skillService.getSkillById(id);

        return skill.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.noContent().build());
    }
}
