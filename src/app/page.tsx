"use client";

import * as S from "./styles";

import ProfileSection from "@containers/home-page/profile-section";
import AboutSection from "@containers/home-page/about-section";
import WorkSection from "@containers/home-page/work-section";
import ProjectSection from "@containers/home-page/project-section";
import LinkSection from "@containers/home-page/link-section";
import Header from "@components/Header";

export default function Home() {
    return (
        <S.HomeLayout>
            <Header />
            <S.ContentsBox>
                <ProfileSection />
                <AboutSection />
                <WorkSection />
                <ProjectSection />
                <LinkSection />
            </S.ContentsBox>
        </S.HomeLayout>
    );
}
