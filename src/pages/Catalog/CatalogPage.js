import { useEffect, useState } from "react";
import { Card } from "../../components/cardComponent/Card";
import { getAllProducts } from "../../services/api";
import { Container } from "./CatalogPage.styled";

export const CatalogPage = () => {
  // const products = getAllProducts();,
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data.content);
      console.log(res.data.content);
    });
  }, []);

  return (
    <Container>
      {products.map(
        ({
          id,
          // name,
          description,
          price,
          seasonNovelties,
          popularProducts,
          collection: { image, name },
        }) => (
          <Card
            key={id}
            name={name}
            description={description}
            price={price}
            image={"https://picsum.photos/271/221"}
            style={{}}
          />
        )
      )}
    </Container>
  );
};
