import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position:relative;
    background-color:gray;

`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color:#fff7f7;
  border-radius:50%;
  display: flex;
  align-content:center;
  justify-content: center;
  position:absolute;
  top:0;
  bottom:0;
  left:${props => props.direction === "left" && "10px"};
  right:${props => props.direction === "right" && "10px"};
  margin:auto;
  cursor:pointer;
  opacity:0.5;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction='left'>
            <KeyboardArrowLeft/>
        </Arrow>
        <Arrow direction='right'>
            <KeyboardArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider