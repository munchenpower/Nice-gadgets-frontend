import { useEffect, useState } from 'react';
import { ProductDetails } from '../types/ProductDetails';

const BASE_URL = 'https://devbananas-products-api.onrender.com';

//* for each page, just need to change <TData> products/phones/accessories/tablets

export const useFetchData = <TData>(
  productType?: string,
  queryString?: string
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TData[]>([]);
  const [count, setCount] = useState(0);

  const type = productType || 'phones';
  const query = queryString || '';

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/${type}${query}`);
      const data = await response.json();

      if (data.rows) {
        setData(data.rows as TData[]);
        setCount(data.count);
      } else {
        setData(data as TData[]);
      }

      setIsLoading(false);
    })(); //IIFE
  }, [queryString]);

  return { isLoading, data, count };
};

export const getItemById = async (phoneSlug: string, categoryName: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${categoryName}/${phoneSlug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch phone data.');
    }
    const data = await response.json();
    return data as ProductDetails;
  } catch (error) {
    console.error('Error fetching phone data:', error);
    return;
  }
};

export const useGetRecommendedItems = (
  productType: string,
  itemSlug: string
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL}/${productType}/${itemSlug}/recommended`
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    })(); //IIFE
  }, []);

  return { isLoading, data };
};

export const useGetItemById = (productType: string, itemSlug: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/${productType}/${itemSlug}`);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    })(); //IIFE
  }, []);

  return { isLoading, data };
};

export const useGetSpecial = (type: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/products/${type}`);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    })(); //IIFE
  }, []);

  return { isLoading, data };
};
