import React from 'react'
import styled from 'styled-components'

import Fade  from "react-awesome-reveal";
function Section({title,description,backgroundImg,leftbtntxt,rightbtntxt}) {

  return (
   
    <Wrap bgImage={backgroundImg}>
      <Fade  >
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
        
        <Buttons>
        <Fade>
        <ButtonGroup>
        <LeftButton>
          {leftbtntxt}
        </LeftButton>
        {rightbtntxt&&
        <RightBUtton>
           {rightbtntxt}
        </RightBUtton>
}
        </ButtonGroup>
        </Fade>
        <DownArrow src="/down-arrow.svg"/>
        </Buttons>
        
        
    </Wrap>
  )
}

export default Section

const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-attachmenyt:fixed;
background-image:url('/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between ;//vertical;
align-items:center; //horizontal
background-image:${props=>`url("/images/${props.bgImage}")`}


`
const ItemText= styled.div`
text-align:center;
padding-top:40px;

`
const ButtonGroup=styled.div`
display:flex;
@media(max-width:768px){
  flex-direction:column;

}


`
const LeftButton=styled.div`
width:256px;
height:40px;
color:white;
display:flex;
margin-bottom:30px;
margin-left:20px;
background-color:rgba(23,26,32,0.8);
border-radius:50px;
justify-content:center;
text-transform:uppercase;
align-items:center;
opacity:0.8;
cursor:pointer;
`

const RightBUtton=styled(LeftButton)`
background-color:white;
margin-left:20px;
color:black;
opacity:0.65;
`
const DownArrow =styled.img`
margin-top:20px;
height:40px;
margin-left:267px;
position:relative;
transform:translateX(400px);
align-content:center;
animation:animateDown infinite 1.5s;
@media(max-width:768px){
  margin-left:120px;

}
`
const Buttons=styled.div`
`
