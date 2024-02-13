import CardContainer from "../../components/Card/CardContainer";
import Card from "../../components/Card/Card";
import Title from "../../components/Card/Title";
import Price from "../../components/Card/Price";
import Button from "../../components/Card/Button";
import Image from "../../components/Card/Image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Product } from "../../types/Products";

type ViewProps = {
  homeData: {
    products: Product[] | undefined;
    error: Error | null;
    isLoading: boolean;
  };
};

const HomeView = ({ homeData }: ViewProps) => {
  const { products, error, isLoading } = homeData;
  return (
    <>
      {isLoading && (
        <CardContainer>
          {[...Array(6)].map((_, index) => (
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
      )}
      {error && <div>Error: {error.message}</div>}
      {!isLoading && !error && (
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
      )}
    </>
  );
};

export default HomeView;
