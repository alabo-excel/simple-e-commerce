// src/services/productService.ts
import axios, { type AxiosResponse } from 'axios';

// Define the product type based on the API response structure
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Fetch products from the API
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};
