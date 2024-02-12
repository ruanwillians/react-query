import React, { useState, useEffect } from "react";
import Button from "./components/Card/Button";
import Card from "./components/Card/Card";
import CardContainer from "./components/Card/CardContainer";
import Image from "./components/Card/Image";
import Price from "./components/Card/Price";
import Title from "./components/Card/Title";
import { Product } from "./types/Products";
import { fetchProducts } from "./service/Products";

const AppEffect: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CardContainer>
      {products?.map((product) => (
        <Card key={product.id}>
          <Image src={product.image} alt={product.title} />
          <Title>{product.title}</Title>
          <Price>Preço: ${product.price}</Price>
          <Button>Comprar</Button>
        </Card>
      ))}
    </CardContainer>
  );
};

export default AppEffect;
