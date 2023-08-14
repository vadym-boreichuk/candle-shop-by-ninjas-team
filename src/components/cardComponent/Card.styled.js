import styled from "styled-components";

export const Thumb = styled.div`
  position: relative;
  max-width: 307px;
  height: 460px;
  padding: 20px 18px;
  margin: 0;
  background-color: #fff;
`;

export const Title = styled.div`
  font-family: "Quicksand-Bold", sans-serif;
  font-weight: 600px;
  font-style: normal;
  font-size: 24px;
  line-height: 30px;
  margin-top: 20px;
`;

export const Content = styled.div`
  font-family: "Josefin-regular", sans-serif;
  color: rgba(147, 147, 147, 1);
  height: 50px;
  font-weight: 400px;
  font-size: 16px;
  line-height: 16px;
  margin-top: 10px;
  overflow: hidden;
`;

export const PriceThumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const Price = styled.div`
  font-weight: 400px;
  font-size: 20px;
  line-height: 20px;
`;

export const OldPrice = styled.div`
  font-weight: 400px;
  font-size: 16px;
  line-height: 16px;
  text-decoration: line-through;
  color: rgba(189, 189, 189, 1);
`;

export const ShadowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  border-radius: 5px;
  margin-top: 12px;

  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.1);
`;
