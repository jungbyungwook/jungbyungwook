import styled from "styled-components";
import Link from "next/link";

const WorkSectionLayout = styled.div`
    margin-top: 60px;
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
    width: 500px;
`;

const ServiceA = styled.a`
    color: white;
    text-decoration: none;
    margin-bottom: 12px;
`;

const ServiceDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;

const ServiceDescriptionP = styled.p`
    color: gray;
    margin-left: 2px;
    margin-bottom: 10px;
`;

const Technology = styled.p`
    color: gray;
`;

export {
    WorkSectionLayout,
    SectionTitleH2,
    ServiceBox,
    TimeP,
    ServiceA,
    ServiceDescriptionBox,
    ServiceDescriptionP,
    Technology,
};
