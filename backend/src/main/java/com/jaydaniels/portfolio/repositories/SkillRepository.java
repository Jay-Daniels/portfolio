package com.jaydaniels.portfolio.repositories;

import com.jaydaniels.portfolio.models.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    // Add custom methods for database queries
    // Example: Find all skills with a proficiency greater than the specified value
    // e.g., List<Skill> findByProficiencyGreaterThan(Integer proficiency);
}
