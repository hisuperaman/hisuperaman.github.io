import {ElementType} from "react";

export type Theme = "dark" | "light" | "system";

export type Social = {
    label: string;
    href: string;
    handle: string;
    icon: ElementType;
};

export type WorkExperience = {
    company: string;
    role: string;
    date: string;
    location: string;
    summary: string;
    highlights: string[];
    technologies: string[];
    image?: string;
    href?: string;
};

export type Education = {
    school: string;
    degree: string;
    date: string;
    detail?: string;
    href?: string;
    image?: string;
};

export type Skill = {
    name: string;
    icon?: ElementType;
};

export type Project = {
    name: string;
    description: string;
    date: string;
    tags: string[];
    website?: string;
    source?: string;
    image?: string;
};

export type Hackathon = {
    name: string;
    result: string;
    date: string;
    location: string;
    description: string;
    image?: string;
    links?: { label: string; href: string }[];
};

export type Portfolio = {
    identity: {
        name: string;
        role: string;
        location: string;
        availability: string;
        intro: string;
        image?: string;
    };
    about: string[];
    sectionLabels: {
        about: string;
        work: string;
        education: string;
        skills: string;
        projects: string;
        hackathons: string;
        contact: string;
    };
    work: WorkExperience[];
    education: Education[];
    skills: Skill[];
    projects: Project[];
    hackathons: Hackathon[];
    socials: Social[];
    contact: {
        body: string;
        email: string;
        footer: string;
    };
};