'use client';
import { createContext, ReactNode, useContext, useState } from 'react';
import { Product } from '@/utils/wooCommerceTypes';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart?: Product[];
  addProduct: (product: Product) => Promise<void>;
  removeProduct: (productId: Product) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = async (product: Product) => {
    const productInCart = cart?.find(produto => produto.id === product.id);

    if (productInCart) {
     alert('Produto já adicionado')
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };

  const removeProduct = (product: Product) => {
    const productInCart = cart?.find(produto => produto.id === product.id);

    if(!productInCart) {
      alert('Erro na remoção do produto');
      return;
    }

    const newCart = cart?.filter(produto => produto.id !== product.id);
    setCart(newCart);
        
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}