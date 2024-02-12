import { Product } from "../types/Products";
  
  const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  const fetchAllProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch('https://fakestoreapi.com/product');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  
  export { fetchProducts, fetchAllProducts };
  