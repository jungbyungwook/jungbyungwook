"use client";
import React, { FC } from "react";
import * as S from "./styles";
import Image from "next/image";
import links from "./constants";

interface LinkSectionProps {}

const LinkSection: FC<LinkSectionProps> = ({}) => {
    const renderLinks = () => {
        return links.map((element, index) => {
            return (
                <S.ServiceBox key={element.name}>
                    <S.TimeP>{element.name}</S.TimeP>
                    <S.ServiceA href={element.url}>
                        {element.subUrl}
                        <Image
                            width={14}
                            height={14}
                            src={"link-arrow.svg"}
                            alt={"link-arrow"}
                        />
                    </S.ServiceA>
                </S.ServiceBox>
            );
        });
    };

    return (
        <S.LinkSectionLayout>
            <S.SectionTitleH2>{"Links"}</S.SectionTitleH2>
            {renderLinks()}
        </S.LinkSectionLayout>
    );
};

export default LinkSection;
