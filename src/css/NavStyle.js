import styled from "styled-components"

export const NavStyle = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  box-shadow: 0px 3px 3px lightgrey;
  position: fixed;
  width: 100vw;

  @media only screen and (max-width: 768px) {
    min-height: 220px;
  }
`

export const AContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-right: 45px;
  }
`;

export const AStyle = styled.a`
  display: inline;
  padding-left: 20px;
  text-decoration: none;
  color: #394C77;
  transition: .3s;
  margin: 5px;

  &:hover {
    color: #3E95D7;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 10px;
    text-align: center;
    width: 100%;
  }
`;
