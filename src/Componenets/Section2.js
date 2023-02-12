import React from 'react'
import styled from 'styled-components'

function Section2() {
  return (
    <Wrap>
        <ItemText>
            <h1>Model Y</h1>
            <p>Order Online for Touchless Delivery</p>
        </ItemText>
        <Buttons>
        <ButtonGroup>
        <LeftButton>
          Custom Order
        </LeftButton>
        <RightBUtton>
            Existing Inventory
        </RightBUtton>
        </ButtonGroup>
        
        <DownArrow src="/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section2

const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-attachmenyt:fixed;
background-image:url('/model-y.jpg');
display:flex;
flex-direction:column;
justify-content:space-between ;//vertical;
align-items:center; //horizontal



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
position:relative;
transform:translateX(400px);
align-content:center;
animation:animateDown infinite 1.5s;
`
const Buttons=styled.div`
`