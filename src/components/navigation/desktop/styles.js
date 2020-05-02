import styled from "styled-components";

const MyDesktopNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: gray;
  color: white;

  height: 10vh;

  .logo {
    font-size: 7vh;
    font-weight: bold;
    text-shadow: 3px 3px 3px black;
  }

  .nav.links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 35vw;

    list-style: none;
  }

  .link {
    color: burlywood;
    font-size: 3vh;
    text-decoration: none;
  }
`;

export default MyDesktopNavbar;
