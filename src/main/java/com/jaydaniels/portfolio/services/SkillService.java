package com.jaydaniels.portfolio.services;

import com.jaydaniels.portfolio.dto.SkillResponse;
import com.jaydaniels.portfolio.models.Skill;
import com.jaydaniels.portfolio.repositories.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SkillService {

    private final SkillRepository skillRepository;

    @Autowired
    public SkillService(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    // Get all skills
    public List<SkillResponse> getAllSkills() {
        List<Skill> skills = skillRepository.findAll();
        return skills.isEmpty() ? null : skills.stream()
                                               .map(skill -> new SkillResponse(skill.getId(), skill.getName(), skill.getProficiency(), skill.getIcon(), skill.isFrontend()))
                                               .collect(Collectors.toList());
    }

    // Get skill by ID
    public SkillResponse getSkillById(Long id) {
        return skillRepository.findById(id)
                              .map(skill -> new SkillResponse(skill.getId(), skill.getName(), skill.getProficiency(), skill.getIcon(), skill.isFrontend()))
                              .orElse(null);
    }

}
