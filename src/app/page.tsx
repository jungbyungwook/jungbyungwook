"use client";

import * as S from "./styles";

import ProfileSection from "@containers/home-page/profile-section";
import AboutSection from "@containers/home-page/about-section";
import WorkSection from "@containers/home-page/work-section";

export default function Home() {
    return (
        <S.HomeLayout>
            <ProfileSection />
            <AboutSection />
            <WorkSection />
        </S.HomeLayout>
    );
}
