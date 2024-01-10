import { motion } from "framer-motion"
import styled from 'styled-components'
import { NavStyle, AStyle } from "./css/NavStyle"
import { GlobalStyle } from "./css/GlobalStyle"
import { HeaderStyle, DivStyled } from "./css/HeaderStyle"
import { ButtonStyle } from "./css/ButtonStyle"
import { CardsDiv, CardDiv, Icon, CardH1, CardP  } from "./css/DivCardStyled"

import { FaInfinity, FaFingerprint, FaPalette } from "react-icons/fa6";
import { SiDatabricks } from "react-icons/si";


function App() {

  const cardsData = [
    {
      icon: <SiDatabricks />,
      title: 'Option 1',
      description: 'Maiores reiciendis tenetur sunt eaque asperiores repellat molestiae atque natus accusamus inventore quidem ut possimus.',
    },
    {
      icon: <FaPalette />,
      title: 'Option 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, deserunt! Veritatis voluptate ipsam omnis itaque.',
    },
    {
      icon: <FaInfinity />,
      title: 'Option 3',
      description: 'Maiores reiciendis tenetur sunt eaque asperiores repellat molestiae atque natus accusamus inventore quidem ut possimus. ',
    },
    {
      icon: <FaFingerprint />,
      title: 'Option 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing el it. Sunt, deserunt! Veritatis voluptate ipsam omnis itaque. ',
    },
  ]

  return (
    <>
    <GlobalStyle/>
    <NavStyle>
      <AStyle href="#">Landing Page</AStyle>
      <div>
        <AStyle href="#">Home</AStyle>
        <AStyle href="#">About</AStyle>
        <AStyle href="#">Contacts</AStyle>
        <AStyle href="#">Faq</AStyle>
      </div>
      <ButtonStyle>Get Started</ButtonStyle>
    </NavStyle>

    <HeaderStyle>
      <DivStyled>
        <h1>React Landing Page Website Template</h1>
        <p>Made with react and styled components</p>
        <ButtonStyle>Get Started</ButtonStyle>
      </DivStyled>
    </HeaderStyle>

    <CardsDiv>
        {cardsData.map((card, index) => (
          <CardDiv 
          key={index}
          coloronhover={index % 2 === 0 ? 'crimson' : 'green'}
          >
            <Icon>{card.icon}</Icon>
            <CardH1>{card.title}</CardH1>
            <CardP>{card.description}</CardP>
          </CardDiv>
        ))}
      </CardsDiv>
    </>
  )
}

export default App

