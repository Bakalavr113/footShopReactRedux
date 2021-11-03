import styled from "styled-components";
import HeaderContainer from "./components/header/HeaderContainer";
import Theme from "./components/Theme/Theme";
import './css/default.css';
import { createGlobalStyle} from "styled-components";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CatalogContainer } from "./components/Catalog/CatalogContainer";
import ManShoesListContainer from "./components/ShoesList/ManShoesListContainer";
import WomenShoesListContainer from "./components/ShoesList/WomenShoesListContainer";
import Delivery from "./components/Delivery/Delivery";
import PayInfo from "./components/PayInfo/PayInfo";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import HomePageContainer from "./components/HomePage/HomePageContainer";
export const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.fontColor};
  transition: all 0.50s linear;
}
`
export const Container = styled.div`
 width: 100%;
 max-width: 1920px;
 margin: 0 auto;
 padding: 0 20px;
`;
 
export const SmallText = styled.div`
color: ${props => props.theme.colors.fontSecond};
font-size: 12px;
margin: ${props => props.margin}
`

export const FlexRow = styled.div`
display: flex;
flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start" };
align-items: ${props => props.alignItem ? props.alignItem : "strech" };
margin: ${props => props.margin ? props.margin : "0 0 0 0" };
`
export const Typography = styled.div`
font-size: ${props => props.fontSize ? props.fontSize : "16px"};
color: ${props => props.color ? props.color : props.theme.colors.fontColor};
margin: ${props => props.margin ? props.margin : "0 0 0 0" };
`
export const Button = styled.button`
border: 2px solid ${props => props.borderColor ? props.borderColor : props.theme.colors.secondBackground};
padding: ${props => props.padding ? props.padding : "15px 20px"};
text-transform: uppercase;
font-size: ${props => props.fontSize ? props.fontSiz : "20px" };
display: inline;
width: ${props => props.width  ? props.width : "200px"  };
transition: all 0.4s ease;
&:hover{
  transition: all 0.4s ease;
  color: ${props => props.theme.colors.fontSecond};
 
  background: ${props =>  props.theme.colors.secondBackground};
}
`
function App() {
  return (
  <BrowserRouter>
   
      <GlobalStyles/>
      <HeaderContainer/>
      
   
<Switch>
<Route path="/catalog" component={CatalogContainer} exact={true}/>
<Route path="/home" component={HomePageContainer} exact={true}/>
<Route path="/manShoes" component={ManShoesListContainer} exact={true}/>
<Route path="/womanShoes" component={WomenShoesListContainer} exact={true}/>
<Route path="/delivery" component={Delivery} exact={true}/>
<Route path="/payInfo" component={PayInfo} exact={true}/>
<Route path="/aboutUs" component={AboutUs} exact={true}/>
<Route path="/contacts" component={Contacts} exact={true}/>
<Route path="/" component={HomePageContainer} exact={true}/>
</Switch>
    </BrowserRouter>
  );
}

export default App;
