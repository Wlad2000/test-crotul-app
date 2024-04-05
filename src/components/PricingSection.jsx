/****************************************************************************
**
**
**
**
****************************************************************************/
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 5%;
`;

const Title = styled.h1`
  margin-bottom:4%;
  width:  ${(props) => (props.isMobile ? '100%' : '40%')};
  font-size: ${(props) => (props.isMobile ? '180%' : '250%')};
`;

const Text = styled.p`
font-size: large;
  margin-bottom: 4%;
  width:  ${(props) => (props.isMobile ? '100%' : '60%')};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Card = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
`;
const Image = styled.img`
width: 100%;
object-fit: cover;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: black;
  border: none;
 //width: 35%;
 //margin-left: 65%;
  cursor: pointer;
  font-weight: bolder;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2%;
  :hover&{
    color: rgba(238, 86, 34, 1);;
    }
`;

const CarouselContainer = styled.div`
  overflow-x: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  position: relative;
  width: 100%;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const CarouselCard = styled.div`
  flex: 0 0 auto;
  margin: 0 10px;
  border: 1px solid black;
  padding: 2%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  width: 40%;
  :hover&{
    border: 1px solid orange;
    }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70%;
  margin-bottom: 2%;
`;

const Arrow = styled.button`
 padding: 10px 20px;
  background-color: white;
  color: rgba(238, 86, 34, 1);;
  border: 1.5px solid orange;
  cursor: pointer;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 50%;

  :hover&{
    background-color: rgba(238, 86, 34, 1);;
    color: white;
    }
`;


const ContainerTitle = styled.div`
display: flex;
flex-direction: column;
`;
const ContainerTitleCard = styled.div`
display: flex;
flex-direction: column;
position: relative;
`;
const TitleCard = styled.h3`
margin-bottom: 4%;
margin-top: 4%;
`;

const TextCard = styled.p`
margin-bottom: 20px;
white-space: normal;
margin-bottom: 15%;
`;


const PricingSection = ({ isMobile }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };
    return (
        <Container>
            <ContainerTitle>
                <Title isMobile={isMobile}>Pricing</Title>
                <Text isMobile={isMobile}>When it comes to financial services—be it insurance, wealth management, or lending—nothing can replace the personal touch.
                    Telemarketing provides a direct channel of communication with potential clients, allowing financial advisors to answer questions, address concerns, and cultivate trust.
                    When it comes to financial services—be it insurance, wealth management, or lending—nothing can replace the personal touch.</Text>

            </ContainerTitle>
            {
                isMobile ? (
                    <>
                        <ArrowContainer>
                            <Arrow onClick={handlePrevClick}>&#10094;</Arrow>
                            <Arrow onClick={handleNextClick}>&#10095;</Arrow>
                        </ArrowContainer>
                        <CarouselContainer>
                            <CarouselWrapper style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                                <CarouselCard>
                                    <Image src="https://via.placeholder.com/274x200" alt="Placeholder" />
                                    <ContainerTitleCard>
                                        <TitleCard>$1 to $2 /hour</TitleCard>
                                        <TextCard>Developers with little work experience up to 2 years, that have just completed courses/training and are full..</TextCard>
                                        <Button>Hire now &#10132;</Button>
                                    </ContainerTitleCard>
                                </CarouselCard>
                                <CarouselCard>
                                    <Image src="https://via.placeholder.com/274x200" alt="Placeholder" />
                                    <ContainerTitleCard>
                                        <TitleCard>$1 to $2 /hour</TitleCard>
                                        <TextCard>Developers with little work experience up to 2 years, that have just completed courses/training and are full..</TextCard>
                                        <Button>Hire now &#10132;</Button>
                                    </ContainerTitleCard>
                                </CarouselCard>
                                <CarouselCard>
                                    <Image src="https://via.placeholder.com/274x200" alt="Placeholder" />
                                    <ContainerTitleCard>
                                        <TitleCard>$1 to $2 /hour</TitleCard>
                                        <TextCard>Developers with little work experience up to 2 years, that have just completed courses/training and are full..</TextCard>
                                        <Button>Hire now &#10132;</Button>
                                    </ContainerTitleCard>
                                </CarouselCard>
                                <CarouselCard>
                                    <Image src="https://via.placeholder.com/274x200" alt="Placeholder" />
                                    <ContainerTitleCard>
                                        <TitleCard>$1 to $2 /hour</TitleCard>
                                        <TextCard>Developers with little work experience up to 2 years, that have just completed courses/training and are full..</TextCard>
                                        <Button>Hire now &#10132;</Button>
                                    </ContainerTitleCard>
                                </CarouselCard>
                            </CarouselWrapper>
                        </CarouselContainer>
                    </>
                ) : (
                    <CardContainer>
                        <Card>
                            <Image src="https://via.placeholder.com/386x257" alt="Placeholder" />
                            <ContainerTitleCard>
                                <TitleCard>$1 to $2 /hour</TitleCard>
                                <TextCard>Developers with little work experience up to 2 years, that have just completed courses/training and are full of enthusiasm and energy to perform various tasks.</TextCard>
                                <Button>Hire now &#10132;</Button>
                            </ContainerTitleCard>

                        </Card>
                        <Card>
                            <Image src="https://via.placeholder.com/386x257" alt="Placeholder" />
                            <ContainerTitleCard>
                                <TitleCard>$1 to $2 /hour</TitleCard>
                                <TextCard>Developers with little work experience up to 2 years, that have just completed courses/training and are full of enthusiasm and energy to perform various tasks.</TextCard>
                                <Button>Hire now &#10132;</Button>
                            </ContainerTitleCard>
                        </Card>
                        <Card>
                            <Image src="https://via.placeholder.com/386x257" alt="Placeholder" />
                            <ContainerTitleCard>
                                <TitleCard>$1 to $2 /hour</TitleCard>
                                <TextCard>Developers with little work experience up to 2 years, that have just completed courses/training and are full of enthusiasm and energy to perform various tasks.</TextCard>
                                <Button>Hire now &#10132;</Button>
                            </ContainerTitleCard>
                        </Card>
                    </CardContainer>
                )
            }
        </Container >
    )
}

export default PricingSection