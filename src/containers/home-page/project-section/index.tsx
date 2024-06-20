"use client";
import React, { FC } from "react";
import * as S from "./styles";
import Image from "next/image";
import projects from "./constants";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = ({}) => {
    const renderProjects = () => {
        return projects.map((element, index) => {
            return (
                <div key={element.name}>
                    <S.ServiceBox>
                        <S.TimeP>{element.time}</S.TimeP>
                        <S.ServiceDescriptionBox>
                            <S.ServiceA href={element.url}>
                                {element.name}
                                <Image
                                    width={14}
                                    height={14}
                                    src={"link-arrow.svg"}
                                    alt={"link-arrow"}
                                />
                            </S.ServiceA>
                            <S.ServiceDescriptionP>
                                {element.description}
                            </S.ServiceDescriptionP>
                            <S.Technology>{element.technology}</S.Technology>
                        </S.ServiceDescriptionBox>
                    </S.ServiceBox>
                    {index + 1 < projects.length && <S.SpaceBox />}
                </div>
            );
        });
    };

    return (
        <S.ProjectSectionLayout>
            <S.SectionTitleH2>{"Side Projects"}</S.SectionTitleH2>
            {renderProjects()}
        </S.ProjectSectionLayout>
    );
};

export default ProjectSection;
