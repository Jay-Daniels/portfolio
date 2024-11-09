package com.jaydaniels.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class SkillResponse {

    private Long id;
    private String name;
    private Integer proficiency;
    private String icon;
    private boolean isFrontend;
}
