"use client";
import React, { FC } from "react";
import * as S from "./styles";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = ({}) => {
    const projects = [
        {
            time: "2022.09 ~ 2023.03",
            name: "FIONDB",
            description:
                "피파 온라인 유저가 자신이나 다른 유저의 플레이한 전적을 검색할 수 있는 서비스입니다. 디자이너와 프론트 개발자를 모집하고 프로젝트 관리와 개발 환경, 랜딩 페이지, 랭킹 페이지를 담당했습니다.",
            technology: "Next.js • Styled Component",
        },
        {
            time: "2022.02 ~ 2022.02",
            name: "초록친구",
            description:
                "반려식물을 죽이지 않고 '잘' 기르고 싶은 사람들을 서비스 DB 구조 설계, 초기 포스팅 API 일부 구현하였고 프론트에서는 글쓰기 페이지, 상세 페이지, 마이페이지를 담당했습니다.",
            technology: "React • Styled Component • Node.js • mongoDB",
        },
        {
            time: "2021.12 ~ 2021.12",
            name: "METABOOK",
            description:
                "회원들이 서로 자신의 메타버스(주로 게더타운) 공간을 공유할 수 있는 플랫폼 백엔드에서 DB 스키마 작성, 로그인, 회원가입, 댓글을 담당했습니다.",
            technology: "JavaScript • Node.js. • Node.js. • mongoDB",
        },
    ];

    console.log("projects.length", projects.length);

    const renderProjects = () => {
        return projects.map((element, index) => {
            return (
                <div key={element.name}>
                    <S.ServiceBox>
                        <S.TimeP>{element.time}</S.TimeP>
                        <S.ServiceDescriptionBox>
                            <S.ServiceA>{element.name}</S.ServiceA>
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
