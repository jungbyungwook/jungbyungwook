"use client";
import React, { FC } from "react";
import * as S from "./styles";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
    const handleCotactClick = () => {
        window.open("mailto:korjby400@gmail.com");
    };

    return (
        <S.HeaderLayout>
            <S.HeaderUl>
                <S.HeaderLi>
                    <S.HeaderContactButton onClick={handleCotactClick}>
                        {"Contact"}
                    </S.HeaderContactButton>
                </S.HeaderLi>
            </S.HeaderUl>
        </S.HeaderLayout>
    );
};

export default Header;
