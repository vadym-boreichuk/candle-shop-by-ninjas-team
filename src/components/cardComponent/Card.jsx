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
import { ReactComponent as Favorite } from "../../assets/images/favorite.svg";
import { ReactComponent as Package } from "../../assets/images/package.svg";

export const Card = ({ name, image, content }) => {
  return (
    <Thumb>
      <Favorite
        style={{
          position: "absolute",
          top: 40,
          right: 42,
        }}
        width="20"
        height="18"
      />

      <img src={image} alt={name} width="271" height="221" />
      <Title>{name}</Title>
      <Content>{content}</Content>
      <ShadowBox>
        <MyRating />
      </ShadowBox>
      <PriceThumb>
        <ButtonComponent>buy</ButtonComponent>
        <Price>
          90<span>&#8372;</span>
        </Price>
        <OldPrice>
          173<span>&#8372;</span>
        </OldPrice>
        <Package />
      </PriceThumb>
    </Thumb>
  );
};
