import React from 'react';
import { StyledInstructions } from './styles/StyledInstructions';

const Instructions = ({ text }) => {
    return (
        <StyledInstructions>
            {text}
        </StyledInstructions>
    )
}

export default Instructions;
