import styled from "styled-components";
import Link from "next/link";

const LinkSectionLayout = styled.div`
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
    flex: 1;
    color: white;
    text-decoration: none;
    margin-bottom: 12px;
    margin-left: 30px;
`;

export { LinkSectionLayout, SectionTitleH2, ServiceBox, TimeP, ServiceA };
