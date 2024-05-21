import React from 'react'
import { SignInSkeleton } from '../SignIn'
import img1 from '../../../assets/Pharma_User_Landing_Page.webp'
import img2 from "../../../assets/logo.svg";
import { MuiBox, MuiTypography } from '../../Mui-Component'
import ActionAreaCard from '../BasicCard'
import { useNavigate } from 'react-router-dom';

const PhamaLayout = ({card1,card2,HeadingClass})=>{
    return(
        <>
        <MuiBox className='ChooseAction'>
        <MuiTypography className={HeadingClass}>
            Choose Action
        </MuiTypography>
        <MuiBox className='SearchFieldContainer'>
            {card1}
            {card2}
        </MuiBox>
        </MuiBox>
        </>
    )
}

const PharmaComponent1 = () => {
  const navigate = useNavigate()
    const heading1= `See Company Content`;
    const heading2= `See Usage Statistics`;
    const text1 = `See your company content on the Live and Pre-Live MultiMed site. Please note that content not from your company cannot be shown.`
    const text2 = `See a dashboard on the associated usage statistics of your company content.`
    const card2 = (
        <ActionAreaCard img={img2} imgClass='mediaImg' heading={heading2} text={text2} className='card1 dontMulti3dAccount SelectLabel card2 ' headingClass='cardHeading' cardTxtClass='cardText'/>
    )
    const func = ()=>{
      navigate('/pharma/home')
    }

  return (
    <>
      <SignInSkeleton Component1={<PhamaLayout HeadingClass='forgetEmailHeading' card1={ <ActionAreaCard onClick={func} img={img2} imgClass='mediaImg' heading={heading1} text={text1} className='card1 dontMulti3dAccount SelectLabel card1Hover' headingClass='cardHeading' cardTxtClass='cardText'/>} card2={card2}/>} bgImg={img1} />
    </>
  )
}

export default PharmaComponent1
