import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => {
    if (props.sm) return "123px";
    if (props.md) return "270px";
    if (props.lg) return "324px";
    return "123px";
  }};
  height: ${(props) => {
    if (props.sm) return "35px";
    if (props.md) return "70px";
    if (props.lg) return "75px";
    return "35px";
  }};
  font-size: ${(props) => {
    if (props.sm) return "16px";
    if (props.md) return "32px";
    if (props.lg) return "40px";
    return "16px";
  }};
  padding: ${(props) => {
    if (props.sm) return "18px 26px";
    if (props.md || props.lg) return "20px 72px";
    return "18px 26px";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background-color: rgba(96, 12, 38, 1);
  border: none;
  border-radius: 44px;
  color: white;
  cursor: pointer;
`;

// Створюємо стилізований компонент з використанням пропсів
// export const StyledButton = styled.button`
//   width: ${(props) => {
//     if (props.sm) return 123;
//     if (props.md) return 270;
//     if (props.lg) return 324;
//     return 123;
//   }};
//   height: ${(props) => {
//     if (props.sm) return 35;
//     if (props.md) return 70;
//     if (props.lg) return 75;
//     return 35;
//   }};
//   font-size: ${(props) => {
//     if (props.sm) return 16;
//     if (props.md) return 32;
//     if (props.lg) return 40;
//     return 16;
//   }};
//   padding: ${(props) => {
//     if (props.sm) return "18px, 26px";
//     if (props.md) return "20px, 72px";
//     if (props.lg) return "20px, 72px";
//     return "18px, 26px";
//   }};
//   font-weight: 500px;
//   background-color: rgba(96, 12, 38, 1);
//   border: none;
//   border-radius: 44px;
// `;

// Використовуємо стилізований компонент з пропсами
// const App = () => {
//   return (
//     <div>
//       <StyledButton>Default Button</StyledButton>
//       <StyledButton primary>Primary Button</StyledButton>
//       <StyledButton secondary>Secondary Button</StyledButton>
//       <StyledButton tertiary>Tertiary Button</StyledButton>
//     </div>
//   );
// };

// export default App;
