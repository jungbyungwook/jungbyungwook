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
                    "안녕하세요 프론트엔드 개발자 정병욱입니다.\n세상을 더 편리하게 해주고 좋은 사용성을 가진 서비스를 개발하고 싶습니다."
                }
            </S.DescriptionP>
        </S.AboutSectionLayout>
    );
};

export default AboutSection;
