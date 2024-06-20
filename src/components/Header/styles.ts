import styled from "styled-components";

const HeaderLayout = styled.nav`
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    z-index: 2;
    flex-direction: row-reverse;
`;

const HeaderUl = styled.ul``;

const HeaderLi = styled.li``;

const HeaderContactButton = styled.button`
    border: 0;
    color: white;
    padding: 12px 20px;

    background-color: #22222af2;
    box-shadow: #22222af2 0px 4px 50px 0px;
    border-radius: 100px;
    margin-top: 16px;
    margin-right: 16px;

    cursor: pointer;

    animation: vertical-shaking 3s infinite;

    @keyframes vertical-shaking {
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(2px);
        }
        50% {
            transform: translateY(-2px);
        }
        75% {
            transform: translateY(2px);
        }
        100% {
            transform: translateY(0);
        }
    }

    &:hover {
        animation-play-state: paused;
        background-color: #38383f;
    }
`;
export { HeaderLayout, HeaderUl, HeaderLi, HeaderContactButton };
