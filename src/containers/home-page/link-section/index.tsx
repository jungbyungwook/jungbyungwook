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
                <S.ServiceA>{"@jungbyungwook"}</S.ServiceA>
            </S.ServiceBox>
            <S.ServiceBox>
                <S.TimeP>{"Resume"}</S.TimeP>
                <S.ServiceA>{"my.surfit.io/w/706313602"}</S.ServiceA>
            </S.ServiceBox>
        </S.LinkSectionLayout>
    );
};

export default LinkSection;
