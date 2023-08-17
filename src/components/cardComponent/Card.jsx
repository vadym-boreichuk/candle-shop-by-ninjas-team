import {
  Content,
  OldPrice,
  Price,
  PriceThumb,
  Thumb,
  Title,
  ShadowBox,
} from "./Card.styled";
import { MyRating } from "./StarRating";
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg";
import { ReactComponent as Package } from "../../assets/icons/package.svg";
import { StyledButton } from "../Button/Button.styled";

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
      <Title style={{ fontWeight: "600" }}>{name}</Title>
      <Content style={{ fontWeight: "400" }}>{content}</Content>
      <ShadowBox>
        <MyRating />
      </ShadowBox>
      <PriceThumb>
        <StyledButton sm="true">buy</StyledButton>
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
