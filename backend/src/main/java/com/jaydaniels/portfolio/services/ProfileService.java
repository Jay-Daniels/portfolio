package com.jaydaniels.portfolio.services;

import com.jaydaniels.portfolio.dto.ProfileResponse;
import com.jaydaniels.portfolio.repositories.ProfileRepository;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public ProfileResponse getProfile() {
        return profileRepository.findAll().stream()
                                .map(profile -> new ProfileResponse(profile.getId(), profile.getName(), profile.getDescription(), profile.getPicture()))
                                .findFirst()
                                .orElseThrow(() -> new RuntimeException("Profile not found"));
    }
}
