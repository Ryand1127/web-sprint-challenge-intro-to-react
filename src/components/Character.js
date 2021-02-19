// Write your Character component here
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'; 
import Information from './Information'; 

const StyledChar = styled.div`
color:white;
width: 50%;
margin: 0 auto;
display:flex;
justify-content: center;
flex-flow: row wrap;
    

    section{
    
    margin-top: 2%;
    width: 50%;
    border-radius:15px 15px;
    background-color:rgba(0,0,0,0.4)
}
`

function Characters(props) {

    const [swData, setSwData] = useState([])

    function getData() {
      axios
        .get(
          'https://swapi.dev/api/people/'
        )
        .then((res) => {
            setSwData(res.data)
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
  
    useEffect(getData, [])

    console.log(swData);

  
   const newChar = swData.map(char => {
        return(
            <StyledChar>
                <section>
                <h2>{char.name}</h2>
                <Information birth={char.birth_year} height={char.height} gender={char.gender} hair={char.hair_color}>
                </Information>
                </section>
            </StyledChar>
        )
       })
    
       return newChar
}



export default Characters;