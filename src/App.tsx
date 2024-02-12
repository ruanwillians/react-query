import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Product } from "./types/Products";
import { fetchProducts } from "./service/Products";
import Button from "./components/Card/Button";
import Card from "./components/Card/Card";
import CardContainer from "./components/Card/CardContainer";
import Image from "./components/Card/Image";
import Price from "./components/Card/Price";
import Title from "./components/Card/Title";
import { useQuery } from "react-query";

const App: React.FC = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>("products", fetchProducts, {
    refetchOnWindowFocus: true,
  });

  if (isLoading) {
    const fakeArray = Array.from({ length: 5 });

    return (
      <CardContainer>
        {fakeArray.map((_, index) => (
          <Card key={index}>
            <Skeleton height={200} />
            <Title>
              <Skeleton />
            </Title>
            <Price>
              <Skeleton />
            </Price>
            <Skeleton />
          </Card>
        ))}
      </CardContainer>
    );
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
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

export default App;
