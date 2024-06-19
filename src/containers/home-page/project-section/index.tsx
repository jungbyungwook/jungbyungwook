"use client";
import React, { FC } from "react";
import * as S from "./styles";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = ({}) => {
    return (
        <S.ProjectSectionLayout>
            <S.SectionTitleH2>{"Side Projects"}</S.SectionTitleH2>
            <S.ServiceBox>
                <S.TimeP>{"2022.07 - 2024.01"}</S.TimeP>
                <S.ServiceDescriptionBox>
                    <S.ServiceA>{"Frontend Developer - Groo"}</S.ServiceA>
                    <S.ServiceDescriptionP>
                        {
                            "GM, I'm Max. I enjoy building dynamic, creative products from start to finish. Focused on developing intuitive experiences that constantly grow and improve based on user metrics. Always shipping."
                        }
                    </S.ServiceDescriptionP>
                    <S.Technology>
                        {"React • React • React • React • React"}
                    </S.Technology>
                </S.ServiceDescriptionBox>
            </S.ServiceBox>
        </S.ProjectSectionLayout>
    );
};

export default ProjectSection;
