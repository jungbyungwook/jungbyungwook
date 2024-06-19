"use client";
import React, { FC } from "react";
import * as S from "./styles";

interface LinkSectionProps {}

const LinkSection: FC<LinkSectionProps> = ({}) => {
    return (
        <S.LinkSectionLayout>
            <S.SectionTitleH2>{"Links"}</S.SectionTitleH2>
            <S.ServiceBox>
                <S.TimeP>{"Github"}</S.TimeP>
                <S.ServiceA>{"Frontend Developer - Groo"}</S.ServiceA>
            </S.ServiceBox>
            <S.ServiceBox>
                <S.TimeP>{"Github"}</S.TimeP>
                <S.ServiceA>{"Frontend Developer - Groo"}</S.ServiceA>
            </S.ServiceBox>
            <S.ServiceBox>
                <S.TimeP>{"Github"}</S.TimeP>
                <S.ServiceA>{"Frontend Developer - Groo"}</S.ServiceA>
            </S.ServiceBox>
        </S.LinkSectionLayout>
    );
};

export default LinkSection;
