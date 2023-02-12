import React,{useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
// or

function Header() {
  const [burgernav , setburgernav] = useState(false);
  return (
    <Container>
      
        <a ><img src='/ima-ges/logo.svg'></img></a>
      <MEnu>
        <p><a href='#'>Model S</a></p>
        <p><a href='#'>Model 3</a></p>
        <p><a href='#'>Model X</a></p>
        <p><a href='#'>Model Y</a></p>
      </MEnu>
      <RightMenu>
      <p><a href='#'>Shop</a></p>
      <p><a href='#'>Tesla Account</a></p>
      <Hamberger onClick={()=>setburgernav(true)}/>
      </RightMenu>
      <BurgerNav show={burgernav}>
          <CloseWrap>
          <Close onClick={()=>setburgernav(false)}>

          </Close>
          </CloseWrap>
          <li><a href='#'>Existing Inventor</a></li>
          <li><a href='#'>Used Inventor</a></li>
          <li><a href='#'>Trade-in</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadroaster</a></li>
          <li><a href='#'>Existing Inventor</a></li>
          <li><a href='#'>Existing Inventor</a></li>
          <li><a href='#'>Existing Inventor</a></li>
        </BurgerNav>
      
    </Container>
  )
}

export default Header
const Container=styled.div`
position:fixed;
padding:  20px;
display:flex;
top:0;
left:0;
right:0;
justify-content:space-between;

`
const MEnu=styled.div`
display:flex;
align-content:center;
justify-content:center;
flex:1;

margin-bottom:40px;
p{
  font-weight:750;
font-size:20px;
margin:0 5px 0 5px;
flex-wrap:nowrap;
text-transform:uppercase;
margin-bottom:40px;

}
@media(max-width:768px){
  display:none;
}
`
const RightMenu=styled.div`
display:flex;
p{
  font-weight:750;
font-size:20px;
margin:0 5px 0 5px;
flex-wrap:nowrap;
text-transform:uppercase;
margin-bottom:40px;
margin-right:20px;
}
`
const Hamberger=styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav=styled.div`
top:0;
right:0;
bottom:0;
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
background-color:white;
width:300px;
position:fixed;

  list-style:none;
  display:flex;
  flex-direction:column;
  justify-content:flex;
  padding:15px;
  text-align:start;
  transition: transform 0.9s ease-in-ease-out;
  li{
padding:15px 0;
border-bottom:1px solid rgba(0,0,0,0.82);

a{
  font-weight:600;
}
  }

`
const Close=styled(CloseIcon)`
cursor:pointer;
`
const CloseWrap=styled.div`
display:flex;
justify-content:flex-end
`