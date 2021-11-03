import continental from "../../images/sliderImg/continental.png";
import jordan from "../../images/sliderImg/jordan.png";
import force from "../../images/sliderImg/airForce.png";
import react from "../../images/sliderImg/air270.png";
import { act } from "react-dom/test-utils";
export const CURRENT_SLIDE = "CURRENT_SLIDE";
const GET_CURRENT_SLIDE = "GET_CURRENT_SLIDE";
const initialState = {
  sliderItems: [
    {
      id: 1,
      title: "Adidas Continentl 80",
      body: "Cучасний погляд на тенісний стиль 80-х",
      img: continental,
    },
    {
      id: 2,
      title: "Nike Air Force",
      body: "Нестаріюча класика в оновленому стилі",
      img: jordan,
    },
    {
      id: 3,
      title: "Nike Air Jordan",
      body: "Легендарна модель, що зможе здивувати",
      img: force,
    },
    {
      id: 4,
      title: "NIKE AIR MAX 270",
      body: "Сучасне продовження лінійки AIR MAX",
      img: react,
    },
  ],
  currentSlide: 1,
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SLIDE:
      return { ...state, currentSlide: action.slide };
     
    default:
      return state;
  }
};
export const setCurentSlideAction = (slide) => ({ type: CURRENT_SLIDE, slide });

export default sliderReducer;
