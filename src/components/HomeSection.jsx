/****************************************************************************
**
**
**
**
****************************************************************************/
import React from 'react'
import styled from 'styled-components';

const ContainerHome = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
height: 100%;
padding: 5%;
background: linear-gradient(-170deg, transparent 50%, white 50%, white), linear-gradient(to right, white 0%, rgba(238, 86, 34, 1) 50%)
`;
const ContainerTitleHome = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: ${(props) => (props.isMobile ? 'center' : '')};
align-items: ${(props) => (props.isMobile ? 'center' : '')};
`;

const Title = styled.h1`
  margin-bottom: 20px;
  width:  ${(props) => (props.isMobile ? '100%' : '35%')};
  font-size: ${(props) => (props.isMobile ? '170%' : '250%')};
`;
const Text = styled.p`
margin-bottom: 20px;
font-size: large;
width:  ${(props) => (props.isMobile ? '100%' : '46%')};
min-width:250px;
`;

const Video = styled.div` 
  position: relative;
`;
const Image = styled.img`
  border-radius: 10%;
  width: 100%;
  //min-width:  ${(props) => (props.isMobile ? '' : '435px')};
`;
const PlayIcon = styled.svg`
  width: 80px;
  height: 80px;
  fill: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  :hover&{
    fill:  rgba(238, 86, 34, 1);
    width: 90px;
  height: 90px;
    }
`;
const RatingContainer = styled.div` 
display: ${(props) => (props.isMobile ? 'none' : 'flex')};
align-items: center;
margin-bottom: 1%;
`;
const RatingTitle = styled.p`
font-size: 20px;
margin-right: 1%;
`;
const Star = styled.span`
color: #ffd700;
font-size: x-large;
:hover&{
    color: yellow;
    }
`;

const SmallImageContainer = styled.div`
display: ${(props) => (props.isMobile ? 'none' : 'flex')};
`;

const SmallImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
margin: 0 -5px;
:hover&{
    border: 2px solid yellow;
    }
`;


const Button = styled.button`
padding: 10px 20px;
background-color: rgba(238, 86, 34, 1);
color: white;
border: 1px solid orange;
border-radius: 20px;
cursor: pointer;
width:  20%;
min-width: 200px;
margin-bottom:2%;
font-weight: bolder;
display: ${(props) => (props.isMobile ? 'none' : '')};
:hover&{
    background-color: white;
    color: rgba(238, 86, 34, 1);
    }
`;
const ButtonMobile = styled.button`
padding: 10px 20px;
background-color: rgba(238, 86, 34, 1);
color: white;
border: 1px solid orange;
border-radius: 20px;
cursor: pointer;
width:  100%;
margin-bottom:2%;
margin-top:1%;
font-weight: bolder;
display: ${(props) => (props.isMobile ? '' : 'none')};
:hover&{
    background-color: white;
    color: rgba(238, 86, 34, 1);
    }
`;





const HomeSection = ({ isMobile }) => {
    return (
        <ContainerHome className='section' isMobile={isMobile} >
            <ContainerTitleHome isMobile={isMobile}>
                <Title isMobile={isMobile}>WE DEVELOP ANYTHING WHAT YOU DESIRE </Title>
                <Text isMobile={isMobile}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum est mi, feugiat id velit vel, pharetra rhoncus tellus. </Text>
                <Button isMobile={isMobile}>GET A FREE QUOTE &#10132;</Button>
                <RatingContainer isMobile={isMobile}>
                    <RatingTitle> Rating:</RatingTitle>
                    <Star>&#9733;</Star>
                    <Star>&#9733;</Star>
                    <Star>&#9733;</Star>
                    <Star>&#9733;</Star>
                    <Star>&#9733;</Star>
                </RatingContainer>
                <SmallImageContainer isMobile={isMobile}>
                    <SmallImage src="https://via.placeholder.com/50" alt="SmallImage1" />
                    <SmallImage src="https://via.placeholder.com/50" alt="SmallImage2" />
                    <SmallImage src="https://via.placeholder.com/50" alt="SmallImage3" />
                    <SmallImage src="https://via.placeholder.com/50" alt="SmallImage4" />
                    <SmallImage src="https://via.placeholder.com/50" alt="SmallImage4" />
                </SmallImageContainer>
            </ContainerTitleHome>
            <Video>
                <Image isMobile={isMobile} src="https://via.placeholder.com/435x500" alt="Placeholder" />
                <PlayIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="25" fill="rgba(0, 0, 0, 0.6)" />
                    <path d="M19 14l22 11-22 11z" />
                </PlayIcon>
            </Video>
            <ButtonMobile isMobile={isMobile}>GET A FREE QUOTE &#10132;</ButtonMobile>
        </ContainerHome >
    )
}

export default HomeSection
