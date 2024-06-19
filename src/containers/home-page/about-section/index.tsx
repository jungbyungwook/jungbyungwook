"use client";
import React, { FC } from "react";
import * as S from "./styles";

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = ({}) => {
    return (
        <S.AboutSectionLayout>
            <S.SectionTitleH2>{"About"}</S.SectionTitleH2>
            <S.DescriptionP>
                {
                    "GM, I'm Max. I enjoy building dynamic, creative products from start to finish. Focused on developing intuitive experiences that constantly grow and improve based on user metrics. Always shipping."
                }
            </S.DescriptionP>
        </S.AboutSectionLayout>
    );
};

export default AboutSection;
