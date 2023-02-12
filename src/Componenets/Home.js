import React from 'react'
import Section from './Section' 

import styled from 'styled-components'
function Home() {
  return (
    <Container>
    <Section
     title="Model S"
     description="Order Online for Touchless Delivery"
     backgroundImg="model-s.jpg"
     leftbtntxt="Custom Order"
     rightbtntxt="Existing Inventory"
     />
     <Section
     title="Model Y"
     description="Order Online for Touchless Delivery"
     backgroundImg="model-y.jpg"
     leftbtntxt="Custom Order"
     rightbtntxt="Existing Inventory"/>
     <Section
     title="Model 3"
     description="Order Online for Touchless Delivery"
     backgroundImg="model-3.jpg"
     leftbtntxt="Custom Order"
     rightbtntxt="Existing Inventory"
     />
     <Section
     title="Model x"
     description="Order Online for Touchless Delivery"
     backgroundImg="model-x.jpg"
     leftbtntxt="Custom Order"
     rightbtntxt="Existing Inventory"/>
     <Section
     title="Lower Cost Solar Panels in America"
     description="Money-back Gaurantee"
     backgroundImg="solar-panel.jpg"
     leftbtntxt="Order now"
     rightbtntxt="Learn more"/>
     <Section
     title="Solar For New Roofs"
     description="solar Roof Cost Less than a New Roof Plus Solar Panels"
     backgroundImg="solar-roof.jpg"
     leftbtntxt="Order now"
     rightbtntxt="Learn more"/>
     <Section
     title="Accessories"
     description=""
     backgroundImg="accessories.jpg"
     leftbtntxt="Shop now"
     rightbtntxt=""/>
     
  </Container>
  )
}

export default Home
const Container=styled.div`
width:100%;
`
