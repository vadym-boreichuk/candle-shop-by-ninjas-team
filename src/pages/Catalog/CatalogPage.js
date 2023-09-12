import { useEffect, useState } from "react";
import { Card } from "../../components/cardComponent/Card";
import { getAllProducts } from "../../services/api";
import {
  GridContainer,
  Container,
  ProductContainer,
  FilterContainer,
} from "./CatalogPage.styled";
import { PriceRangeSlider } from "../../components/PriceSlider/PriceSlider";
import { DropDown } from "../../components/Filters/DropDown/DropDown";
import { BurningTimeFilterList } from "../../components/Filters/BurningTime/BurningTimeFilter";
import { WeightFilter } from "../../components/Filters/WeightFilter/WeightFilter";
import { SmellFilter } from "../../components/Filters/SmellFilter/SmellFilter";
import "./CatalogPage.css";

import cards from "../../assets/cards.json";

export const CatalogPage = () => {
  // const products = getAllProducts();,
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data.content);
      // console.log(res.data.content);
    });
  }, []);
  console.log(cards);
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "35px",
        }}
      >
        <h2>Фільтри</h2>
        <DropDown />
      </div>

      <ProductContainer>
        <PriceRangeSlider />
        <FilterContainer>
          <BurningTimeFilterList />
          <WeightFilter />
          <SmellFilter />
        </FilterContainer>

        <GridContainer className="grid-container">
          {cards.map(
            ({
              id,
              // productName,
              // description,
              // price,
              // seasonNovelties,
              // popularProducts,
              // collection: { image, collectionName },
            }) => (
              <Card
                key={id}
                // name={productName}
                // description={description}
                // price={price}
                // image={"https://picsum.photos/271/221"}
                style={{}}
              />
            )
          )}
        </GridContainer>
      </ProductContainer>
    </Container>
  );
};
