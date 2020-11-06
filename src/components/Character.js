// Write your Character component here
import React from 'react';
import styled from 'styled-components';




export default function Character(props) {
    const { name, birthyear } = props;








    return (
        <StyledImage className = 'character-container'>
            <h2>{name} was born in {birthyear}</h2>
        </StyledImage>






    )

}



const StyledImage = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    border-color: ${(pr) => pr.theme.primaryColor};
    width:50%;
    margin:1rem;
    color: ${(pr) => pr.theme.tertiaryColor}



`