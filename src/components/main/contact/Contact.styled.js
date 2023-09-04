import { styled } from "styled-components";
import { Field, Form } from "formik";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 110px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;
`;

export const Title = styled.h2`
  font-family: "Monotype-Corsiva";
  font-weight: 400;
  font-size: 56px;
  line-height: 62px;
`;

export const Text = styled.p`
  font-family: "Montserat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 753px;
  margin-top: 40px;
`;

export const Input = styled(Field)`
  width: 753px;
  height: 60px;
  border-radius: 20px;
  padding: 0 28px;
  margin-bottom: 18px;
  font-family: "Montserat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  outline: none;
  border: none;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.18);
`;
