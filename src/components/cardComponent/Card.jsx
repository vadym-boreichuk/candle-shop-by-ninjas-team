import {
  ButtonComponent,
  Content,
  OldPrice,
  Price,
  PriceThumb,
  Rating,
  Thumb,
  Title,
  ShadowBox,
} from "./Card.styled";
import { MyRating } from "./StarRating";
import { ReactComponent as Package } from "../../assets/images/package.svg";

export const Card = ({ name, image, content }) => {
  return (
    <Thumb>
      <img src={image} alt={name} width="271" height="221" />
      <Title>{name}</Title>
      <Content>{content}</Content>
      <ShadowBox>
        <MyRating />
      </ShadowBox>
      <PriceThumb>
        <ButtonComponent>buy</ButtonComponent>
        <Price></Price>
        <OldPrice></OldPrice>
        <Package />
      </PriceThumb>
    </Thumb>
  );
};
