import { Box, Box2, Container, TextContainer, Title } from "./About.styled";
// import wax from "../../../assets/images/candle-store-main/wax-box@1.jpg";
// import wax2 from "../../../assets/images/candle-store-main/wax-box@2x.jpg";
// import waxstamp from "../../../assets/images/candle-store-main/wax-stamp@1.jpg";
// import waxstamp2 from "../../../assets/images/candle-store-main/wax-stamp@2x.jpg";

export const About = () => {
  return (
    <Container>
      <Title>Наша майстерня</Title>
      <Box>
        <TextContainer>
          Наш бренд PIDPAL займається виготовленням свічок та інших воскових
          виробів.Ми існуємо 1.5 року. За цей час виготовили близько 1500
          виробів різної складності та комплектації.У нашій майстерні ми
          виготовляємо свічки та воскові вироби з любов'ю та турботою. Ми
          використовуємо лише найякісніші матеріали та ароматизатори, а також
          ручну роботу, щоб створити свічки, які не лише красиві, але й пахнуть
          чудово.
        </TextContainer>
        {/* <img
          srcSet={`${wax} 1x, ${wax2} 2x`}
          src={wax}
          width={500}
          alt="Опис зображення для всіх версій"
        /> */}
      </Box>
      <Title>Натуральні матеріали</Title>
      <Box2>
        <TextContainer>
          Наш основний матеріал - це соєвий віск, який є екологічно чистим і не
          містить шкідливих речовин. Крім соєвого воску, ми також використовуємо
          інші види воску, такі як бджолиний віск, пальмовий віск та кокосовий
          віск. Кожен вид воску має свої унікальні властивості, які надають
          свічкам різні характеристики, наприклад, час горіння, аромат і
          зовнішній вигляд.
        </TextContainer>
        {/* <img
          srcSet={`${waxstamp} 1x, ${waxstamp2} 2x`}
          src={waxstamp}
          width={600}
          alt="Опис зображення для всіх версій"
        /> */}
      </Box2>
    </Container>
  );
};
