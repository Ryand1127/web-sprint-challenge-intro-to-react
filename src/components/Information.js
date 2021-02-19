import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`

color: white;
div{
    display:inline-block;
    border: 1px solid black;
    margin-bottom: 3%;
    border-radius: 15px 15px;
}

img{
    width:100px;
    display:inline-block;
    margin-left: 20%;
}

`

function Information(props){


    return(
        <StyledInfo>
            <div>
        <p>Birth Year: {props.birth}</p>
        <p>Hair: {props.hair}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
            </div>

        <img src="https://static.wikia.nocookie.net/starwars/images/7/71/Redstarbird.svg/revision/latest/scale-to-width-down/340?cb=20080228205026" alt="Rebel logo"/>
        </StyledInfo>
    )



}

export default Information