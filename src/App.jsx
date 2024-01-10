import { motion } from "framer-motion"
import styled from 'styled-components'
import { NavStyle, AStyle } from "./css/NavStyle"
import { GlobalStyle } from "./css/GlobalStyle"
import { HeaderStyle } from "./css/HeaderStyle"
import { ButtonStyle } from "./css/ButtonStyle"

import { FaInfinity, FaFingerprint } from "react-icons/fa6";
import { SiDatabricks } from "react-icons/si";
import { GiPaintBucket } from "react-icons/gi";



const DivStyled = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  color: #103F62;
`

const DivCardStyled = styled.div`
  background: white;
  padding: 15px;
  border-radius: 4px;
  max-width: 300px;
`

function App() {

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


      <div>
        <DivCardStyled>
          <SiDatabricks />
          <h2>Option 1</h2>
          <p>Malores reicendis tenetur sunt eaque asperiores repallat molestiae atque natus accusamus inventore quidem ut possimus.</p>
        </DivCardStyled>
        <DivCardStyled>
          <GiPaintBucket />
          <h2>Option 2</h2>
          <p>Malores reicendis tenetur sunt eaque asperiores repallat molestiae atque natus accusamus inventore quidem ut possimus.</p>
        </DivCardStyled>
        <DivCardStyled>
          <FaInfinity />
          <h2>Option 3</h2>
          <p>Malores reicendis tenetur sunt eaque asperiores repallat molestiae atque natus accusamus inventore quidem ut possimus.</p>
        </DivCardStyled>
        <DivCardStyled>
          <FaFingerprint />
          <h2>Option 4</h2>
          <p>Malores reicendis tenetur sunt eaque asperiores repallat molestiae atque natus accusamus inventore quidem ut possimus.</p>
        </DivCardStyled>
      </div>

    </>
  )
}

export default App