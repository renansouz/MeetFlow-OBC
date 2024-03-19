import styled from "styled-components";
import pageBackground from "@/public/page-background.jpg";

export const BackGroundImage = styled.div`
    background-image: linear-gradient(
            140deg,
            rgba(0, 0, 1, 0.8) 40%,
            rgba(26, 30, 95, 0.8)
        ),
        url(${pageBackground});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-position: center center;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;
