import styled from "styled-components";

export const HeaderStyle = styled.header`
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`
export const DivStyled = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  color: #103F62;
  @media only screen and (max-width: 768px) {
    padding-top: 250px;
  }
`