'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Product } from '@/utils/wooCommerceTypes';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart?: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
}

const CART_STORAGE_KEY = 'cart'; // Chave do localStorage
const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Garantir que estamos no lado do cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Carregar o carrinho do localStorage ao montar o componente
  useEffect(() => {
    if (isClient) {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        try {
          setCart(JSON.parse(storedCart));
        } catch (error) {
          console.error('Erro ao carregar o carrinho do localStorage:', error);
        }
      }
    }
  }, [isClient]);

  // Salvar no localStorage sempre que o carrinho for atualizado
  useEffect(() => {
    if (isClient) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const addProduct = (product: Product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((produto) => produto.id === product.id);
      if (productInCart) {
        console.warn('Produto já adicionado');
        return prevCart;
      }
      console.log(`Adicionando produto ${product.id} ao carrinho.`);
      return [...prevCart, product];
    });
  };

  const removeProduct = (productId: number) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((produto) => produto.id === productId);
      if (!productInCart) {
        console.warn('Erro na remoção do produto: Produto não encontrado');
        return prevCart;
      }
      return prevCart.filter((produto) => produto.id !== productId);
    });
        
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}