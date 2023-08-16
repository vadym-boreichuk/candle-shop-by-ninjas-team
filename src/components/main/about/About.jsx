import {
  Box,
  Box2,
  Container,
  TextContainer,
  TextContainer2,
  Title,
  Title2,
} from "./About.styled";
import about1 from "../../../assets/images/about/about1@1x.jpg";
import about1x2 from "../../../assets/images/about/about1@2x.jpg";
import about2 from "../../../assets/images/about/about2@1x.jpg";
import about2x2 from "../../../assets/images/about/about2@2x.jpg";

export const About = () => {
  return (
    <Container>
      <Box>
        <Title>Наша майстерня</Title>
        <TextContainer
          style={{ fontWeight: "500px", fontSize: "28px", lineHeight: "32px" }}
        >
          Наш бренд PIDPAL займається виготовленням свічок та інших воскових
          виробів.Ми існуємо 1.5 року. За цей час виготовили близько 1500
          виробів різної складності та комплектації.У нашій майстерні ми
          виготовляємо свічки та воскові вироби з любов'ю та турботою. Ми
          використовуємо лише найякісніші матеріали та ароматизатори, а також
          ручну роботу, щоб створити свічки, які не лише красиві, але й пахнуть
          чудово.
        </TextContainer>
        <img
          srcSet={`${about2} 1x, ${about2x2} 2x`}
          src={about2}
          max-width={550}
          alt="Опис зображення для всіх версій"
        />
      </Box>
      <Box2>
        <Title2>Натуральні матеріали</Title2>
        <TextContainer2
          style={{ fontWeight: "500px", fontSize: "28px", lineHeight: "32px" }}
        >
          Наш основний матеріал - це соєвий віск, який є екологічно чистим і не
          містить шкідливих речовин. Крім соєвого воску, ми також використовуємо
          інші види воску, такі як бджолиний віск, пальмовий віск та кокосовий
          віск. Кожен вид воску має свої унікальні властивості, які надають
          свічкам різні характеристики, наприклад, час горіння, аромат і
          зовнішній вигляд.
        </TextContainer2>
        <img
          srcSet={`${about1} 1x, ${about1x2} 2x`}
          src={about1}
          max-width={600}
          alt="Опис зображення для всіх версій"
        />
      </Box2>
    </Container>
  );
};
