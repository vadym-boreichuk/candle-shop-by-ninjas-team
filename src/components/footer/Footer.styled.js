import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
export const FooterSection = styled.section`
  flex-direction: column;
  align-content: space-between;
  width: 100%;
  // max-width: 1440px;
  height: 331px;
  background-color: rgba(30, 30, 30, 1);
  padding: 62px 86px 29px 75px;
`;
export const Navigation = styled.section`
  display: flex;
  align-items: center;
  // aline-contant: space-between;
  // margin: auto;
  justify-content: center;
`;

export const FooterNavigationBlock = styled.section`
  display: flex;
  // aline-contant: space-between;
  margin: auto;
  justify-content: space-between;
  max-width: 1440px;
  padding: 0px 75px;
`;

export const StyledLink = styled(NavLink)`
  font-family: "Montserat";
  font-size: 24px;
  line-height: 1.21;
  text-decoration: none;
  color: white;
  margin-bottom: 24px;
`;
export const FooterBlock1 = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  align-items: center;
`;
export const FooterBlock2 = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  align-items: center;
`;
export const FooterBlock3 = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 266px;
  align-items: center;
`;
export const FooterBlockContact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const FooterSupport = styled.section`
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* width: 100%; */
  height: 141px;
  padding-bottom: 29px;
`;

export const FooterSocNetwork = styled.section``;
