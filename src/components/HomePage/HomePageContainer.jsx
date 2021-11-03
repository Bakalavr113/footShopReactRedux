import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button, Container, FlexRow, Typography } from "../../App";
import arrow from "../../images/next.png";
import s from "../../css/slider.module.css";
import { getCurentSlideAction, setCurentSlideAction } from "../../redux/Reducers/SliderReducer";
const SliderTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: ${(props) =>
    props.theme.colors.titleColors ? props.theme.colors.titleColors : "black"};
  max-width: 600px;
`;

const SliderSubtitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  max-width: 600px;
  color: ${(props) =>
    props.theme.colors.subtitleColors
      ? props.theme.colors.subtitleColors
      : "grey"};
  margin: ${(props) => (props.margin ? props.margin : "0 0 0 0")};
`;
const HomePageContainer = () => {
  return <HomePage />;
};

export default HomePageContainer;



export const HomePage = () => {
  const dispatch = useDispatch();
  let CurrentSlide = useSelector((state) => state.HomeSlider.currentSlide);
  const SliderObj = useSelector((state) => state.HomeSlider.sliderItems);
  const SliderLen = useSelector((state) => state.HomeSlider.sliderItems.length);
  const cuurentSlideObj = useSelector((state) => state.HomeSlider.sliderItems.find(el => el.id === CurrentSlide ));
    
      // setInterval(function(){
       
      //   CurrentSlide === SliderLen ?  dispatch(setCurentSlideAction(1)) :  dispatch(setCurentSlideAction(CurrentSlide+1))
        
        
    
      // },5000)
  
  // const SliderObj = useSelector((state) => state.HomeSlider.sliderItems.filter(el => el.id === CurrentSlider && el));
  // const SliderLength = useSelector((state) => state.HomeSlider.sliderItems.length);
  // console.log(cuurentSlideObj)
    const setCurrentSlide = (current) =>{
     
      dispatch(setCurentSlideAction(current))
      
    }
  
  // const useEffect(() => {
  //   dispatch(setCurentSlideAction(currentSlide));
  // }, [currentSlide]);
  return (
    <>
 
    <Slider className={s.sliderItem} cuurentSlideObj={cuurentSlideObj} SliderLen={SliderLen} CurrentSlide={CurrentSlide}  ChangeSlide={setCurrentSlide}   />
      </>
  );
};


export const Slider= ({cuurentSlideObj, SliderLen, CurrentSlide, ChangeSlide}) =>{
  //  const [currentSlide, setcurrentSlide] = useState(props.CurrentSlider);
  // const dispatch = useDispatch();
  {console.log("render")}
  // useEffect(() => {
  //         props.setCurrentSlideRedux(currentSlide)
         
  // }, [currentSlide]);
  const Lines = () => {
    const objs = []
    for (var i=1; i <=SliderLen; i++) {
      objs.push(<div key={i} className={`${s.sliderPoint} ${cuurentSlideObj.id === i && s.active  }`} id={i} ></div>)
    }
  
    return objs;
  }
  return(
   
    cuurentSlideObj && <Container>
    <FlexRow  justifyContent={"space-between"} className={s.slider}>
    <FlexRow className={s.slider__inner} flexDirection={"column"}>
      {
        cuurentSlideObj.title &&  <SliderTitle  key={cuurentSlideObj.title} className={s.slider__title}>
        {cuurentSlideObj.title}
  </SliderTitle>
      }
    
      {/* <SliderTitle className={s.slider__title}>
            {SliderTitle}
      </SliderTitle> */}
      
        <SliderSubtitle margin={"30px 0 30px 0"}  key={cuurentSlideObj.body} className={s.slider__title}> {cuurentSlideObj.body} </SliderSubtitle>
      
      
      <Button>
        <NavLink to={`/catalog/${cuurentSlideObj.id}`}>Замовити</NavLink>
      </Button>
      <FlexRow margin={"40px 0 0 0"}>
        {
          Lines()
        }
    
           {/* {
             
             props.SliderItems.map(el => <div key={el.id} className={`${s.sliderPoint} ${el.id === currentSlide && s.active}`}></div>)
           } */}
      </FlexRow>
      <FlexRow
        className={s.slider__buttons}
        margin={"20px 0 0 0"}
        alignItem={"center"}
        justifyContent={"space-between"}
      >
        <Typography fontSize={"22px"} color={"#86839C"}>
          0{CurrentSlide}/0{SliderLen}
        </Typography>
        <FlexRow>
          <img
            src={arrow}
            className={s.slider_button}
            alt="btn"
            onClick={() =>
              ChangeSlide(
                CurrentSlide !== 1 ? CurrentSlide - 1 : SliderLen
              )
            }
          />
      
          <img
            src={arrow}
            className={s.slider_button}
            alt="btn"
            onClick={() =>
              ChangeSlide(
                CurrentSlide !== SliderLen ? CurrentSlide + 1 : 1
              )
            }
          />
        </FlexRow>
      </FlexRow>
    </FlexRow>
    {
      cuurentSlideObj.img && <img
      key={cuurentSlideObj.id}
      src={cuurentSlideObj.img}
      alt={cuurentSlideObj.title}
        className={`${s.slider__img}`}
       
      /> 
    }
      
    
  
    
  </FlexRow>

  
  </Container>
   
 
            
  )
}
