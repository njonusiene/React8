import styled from "styled-components";

export const NavStyle = styled.nav`
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px 15px;
box-shadow: 0px 3px 3px lightgrey;
position: fixed;
width: 100vw;
`
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
`