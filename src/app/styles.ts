import styled from "styled-components";

const HomeLayout = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 1);

    @media (max-width: 1023px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

const ContentsBox = styled.div`
    padding-top: 140px;
    padding-bottom: 140px;
`;

export { HomeLayout, ContentsBox };
