import { useEffect, useState } from "react";
import { Card } from "../../components/cardComponent/Card";
import { getAllProducts } from "../../services/api";
import { GridContainer, Container } from "./CatalogPage.styled";
import { PriceRangeSlider } from "../../components/PriceSlider/PriceSlider";

export const CatalogPage = () => {
  // const products = getAllProducts();,
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data.content);
      console.log(res.data.content);
    });
  }, []);
  const minPrice = 100; // Dynamic min value
  const maxPrice = 1000; // Dynamic max value

  return (
    <Container>
      <PriceRangeSlider />
      <GridContainer>
        {products.map(
          ({
            id,
            productName,
            description,
            price,
            seasonNovelties,
            popularProducts,
            collection: { image, collectionName },
          }) => (
            <Card
              key={id}
              name={productName}
              description={description}
              price={price}
              image={"https://picsum.photos/271/221"}
              style={{}}
            />
          )
        )}
      </GridContainer>
    </Container>
  );
};
