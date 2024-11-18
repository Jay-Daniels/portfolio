package com.jaydaniels.portfolio.repositories;

import com.jaydaniels.portfolio.models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
    // Add custom methods for database queries
}
