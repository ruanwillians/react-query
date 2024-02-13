import { useQuery } from "react-query";
import { Product } from "../../types/Products";
import { fetchProducts } from "../../service/Products";

const useHomeModel = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>("products", fetchProducts, {
    refetchOnWindowFocus: true,
  });

  return { products, isLoading, error: error as Error };
};

export default useHomeModel;
