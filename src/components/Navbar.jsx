import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    height:60px;

`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content: space-between;
    
`
const Language = styled.span`
  font-size: 14px;
  cursor:pointer;
`
const Left = styled.div`
flex: 1;
`;
const Center = styled.div`
flex: 1;
`;
const Right = styled.div`
flex: 1;
`;

function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
            </Left>
            <Center>center</Center>
            <Right>right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar