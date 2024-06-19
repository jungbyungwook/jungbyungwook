import styled from "styled-components";

const HomeLayout = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    @media (max-width: 1023px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

const ContentsBox = styled.div``;

export { HomeLayout, ContentsBox };
