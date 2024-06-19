"use client";
import React, { FC } from "react";
import * as S from "./styles";

interface ProfileSectionProps {}

const ProfileSection: FC<ProfileSectionProps> = ({}) => {
    return (
        <S.ProfileSectionLayout>
            <S.NameH1>{"Byungwook Jung"}</S.NameH1>
            <S.PositionP>{"Frontend Developer"}</S.PositionP>
        </S.ProfileSectionLayout>
    );
};

export default ProfileSection;
