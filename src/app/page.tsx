import { fetchWooCommerceProducts } from '@/utils/wooCommerceApi'
import Hero from "@/components/Hero";
import Infos from "@/components/Infos";
import ListProduct from "@/components/ListProduct";
import ListPost from "@/components/ListPost";

export default async function Home() {
	const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
		console.error(error)
	);
 
  	const products = wooCommerceProducts.data;
  
  	return (
		<>
			<Hero />
			<Infos />
			{/* Bloco lista de produtos */}
			<ListProduct products={products} />
			
			<ListPost />
		</>
	);
}
