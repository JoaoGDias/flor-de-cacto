'use client';
import { useCart } from '@/context/CartContext';
import { Product } from '@/utils/wooCommerceTypes';
import Link from 'next/link';

interface CartButtonProps {
    cartItem: Product;
  }

export default function CartButton({cartItem} : CartButtonProps) {
    const { addProduct } = useCart();
    return (
        <Link href="#" className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base" onClick={() => addProduct(cartItem)}>Adicionar ao carrinho</Link>
    )
}