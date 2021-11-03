import React from 'react'
import styled from 'styled-components';
import { Container, FlexRow, SmallText } from '../../App';
const HeaderInfoWrapper = styled.div`
  background: ${props => props.theme.colors.secondBackground};
  padding: 7px 0px;
  

`


const HeaderInfo = () => {
    return (
        <HeaderInfoWrapper>
        <Container>
        <FlexRow justifyContent={"space-between"} alignItem={"center"}>
          <FlexRow >
          <SmallText >
        м.Ужгород вул. Насипна 3
        </SmallText>
        <SmallText margin={"0 0 0 20px"}>
       Кожного дня з 11-23
        </SmallText>
          </FlexRow>
        
        <SmallText >
       +7777777777
        </SmallText>
        </FlexRow>
       
        </Container>
        </HeaderInfoWrapper>
    )
}
export default HeaderInfo;
