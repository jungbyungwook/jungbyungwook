import styled from "styled-components";
import Link from "next/link";

const ProjectSectionLayout = styled.div`
    margin-top: 60px;
    max-width: 500px;
`;

const SectionTitleH2 = styled.h2`
    color: white;
    margin-bottom: 30px;
`;

const ServiceBox = styled.div`
    display: flex;
`;

const TimeP = styled.p`
    color: gray;
    margin-left: 2px;
    width: 136px;
`;

const ServiceA = styled.a`
    color: white;
    text-decoration: none;
    margin-bottom: 12px;
`;

const ServiceDescriptionBox = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 30px;
`;

const ServiceDescriptionP = styled.p`
    color: gray;
    margin-left: 2px;
    margin-bottom: 10px;
    line-height: 22px;
`;

const Technology = styled.p`
    color: gray;
    margin-left: 2px;
`;

const SpaceBox = styled.div`
    height: 40px;
`;

export {
    ProjectSectionLayout,
    SectionTitleH2,
    ServiceBox,
    TimeP,
    ServiceA,
    ServiceDescriptionBox,
    ServiceDescriptionP,
    Technology,
    SpaceBox,
};
