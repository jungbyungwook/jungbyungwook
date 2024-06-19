"use client";

import * as S from "./styles";

import ProfileSection from "@containers/home-page/profile-section";
import AboutSection from "@containers/home-page/about-section";
import WorkSection from "@containers/home-page/work-section";
import ProjectSection from "@containers/home-page/project-section";

export default function Home() {
    return (
        <S.HomeLayout>
            <ProfileSection />
            <AboutSection />
            <WorkSection />
            <ProjectSection />
        </S.HomeLayout>
    );
}
