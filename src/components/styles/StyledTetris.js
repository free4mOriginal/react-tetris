import styled from 'styled-components';
import bgImage from '../../img/back.jpg';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
    `

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    max-width: 1000px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0;
    }
    `