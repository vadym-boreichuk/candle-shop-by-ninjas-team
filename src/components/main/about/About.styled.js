import styled from "styled-components";

export const Container = styled.div`
  margin-top: 150px;
  padding: 0 75px;
  position: relative;
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  margin-top: 32px;
  margin-right: auto;
  font-family: "Monotype-Corsiva";
  font-weight: 400;
  font-size: 64px;
  line-height: 70px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 140px;
  left: 75px;
  max-width: 780px;
  height: 307px;
  font-family: "Montserat";
  z-index: 10;
  border: 3px rgba(96, 12, 38, 1) solid;
  border-top-left-radius: 80px;
  padding: 26px 22px 26px 60px;
  background-color: rgba(255, 247, 244, 1);
`;

export const Box2 = styled.div`
  display: flex;
  position: relative;
`;

export const TextContainer2 = styled.div`
  position: absolute;
  top: 187px;
  right: 0px;
  max-width: 718px;
  height: 295px;
  font-family: "Montserat";
  z-index: 10;
  border: 3px rgba(96, 12, 38, 1) solid;
  border-bottom-right-radius: 80px;
  padding: 16px 40px 20px 40px;
  background-color: rgba(255, 247, 244, 1);
`;

export const Title2 = styled.h2`
  position: absolute;
  top: 80px;
  right: 70px;
  font-family: "Monotype-Corsiva";
  font-weight: 400;
  font-size: 64px;
  line-height: 70px;
`;
