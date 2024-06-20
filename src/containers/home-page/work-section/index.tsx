"use client";
import React, { FC } from "react";
import * as S from "./styles";
import Image from "next/image";

interface WorkSectionProps {}

const WorkSection: FC<WorkSectionProps> = ({}) => {
    return (
        <S.WorkSectionLayout>
            <S.SectionTitleH2>{"Work Experience"}</S.SectionTitleH2>
            <S.ServiceBox>
                <S.TimeP>{"2022.07 - 2024.01"}</S.TimeP>
                <S.ServiceDescriptionBox>
                    <S.ServiceA href="Https://groo.pro">
                        {"Frontend Developer - Groo"}
                        <Image
                            width={14}
                            height={14}
                            src={"link-arrow.svg"}
                            alt={"link-arrow"}
                        />
                    </S.ServiceA>
                    <S.ServiceDescriptionP>
                        {
                            "누구나 식물 생활을 쉽게, 더 즐겁게 식물 관리 서비스 그루우입니다. 합류 후 그루우 Web, App Frontend 개발 업무를 담당했습니다."
                        }
                    </S.ServiceDescriptionP>
                    <S.Technology>
                        {"Next.js • React Native • Redux"}
                    </S.Technology>
                </S.ServiceDescriptionBox>
            </S.ServiceBox>
        </S.WorkSectionLayout>
    );
};

export default WorkSection;
