import React from "react";
import { Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { StyledButton } from "../../Button/Button.styled";
import { Container, Input, StyledForm, Text, Title } from "./Contact.styled";

let SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email"),
  message: Yup.string().min(5),
});

const initialValues = {
  email: "",
  message: "",
};

export const Contact = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Container>
      <Title>Дізнайтесь про актуальні новинки</Title>
      <Text>Бажаєте новинки,знижки та спеціальні пропозиції </Text>
      <Formik
        style={{ width: "100%" }}
        validationSchema={SignupSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <StyledForm>
          <ErrorMessage component="div" name="email" />
          <Input type="text" name="email" placeholder="Email" />
          <ErrorMessage name="message" />
          <Field
            style={{
              width: "753px",
              height: "149px",
              borderRadius: "20px",
              padding: "28px",
              resize: "none",
              marginBottom: "28px",
              fontFamily: "Montserat",
              fontWeight: "500px",
              fontSize: "20px",
              lineHeight: "24px",
              outline: "none",
              border: "none",
              boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.18)",
            }}
            name="message"
            as="textarea"
            type="textarea"
            placeholder="Повідомлення"
          />

          <StyledButton
            lg="true"
            type="submit"
            style={{
              fontFamily: "Quicksand",
              fontWeight: "300px",
              fontSize: "32px",
              lineHeight: "40px",
            }}
          >
            Надіслати
          </StyledButton>
        </StyledForm>
      </Formik>
    </Container>
  );
};
