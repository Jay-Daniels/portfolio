package com.jaydaniels.portfolio.controllers;

import com.jaydaniels.portfolio.dto.ProfileResponse;
import com.jaydaniels.portfolio.services.ProfileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    public ResponseEntity<ProfileResponse> getProfile() {
        ProfileResponse profile = profileService.getProfile();
        return ResponseEntity.ok(profile);
    }
}
