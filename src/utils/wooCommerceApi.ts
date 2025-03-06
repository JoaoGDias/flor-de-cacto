import { createRequire } from 'module'; // Importando a função 'require' do Node.js
const require = createRequire(import.meta.url);

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY!,
  consumerSecret: process.env.WC_CONSUMER_SECRET!,
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products?status=publish&stock_status=instock&per_page=4");
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao buscar produto: ${error.message}`);
    } else {
      throw new Error("Erro desconhecido ao buscar produto.");
    }
  }
}

export async function fetchProductBySlug(slug : string) {
  try {
    const response = await api.get(`products/?slug=${slug}&embed`);
    // Supondo que a resposta tenha a estrutura de um produto.
    if (response.status === 200 && response.data) {
      return response.data[0];  // Aqui pode ser um objeto do tipo Product
    }
    
    // Se o status não for 200 ou não tiver dados, retorne null
    return null;
  } catch (error) {
    // Verifica se o erro é uma instância de Error ou outro tipo
    if (error instanceof Error) {
      throw new Error(`Erro ao buscar produto: ${error.message}`);
    } else {
      throw new Error("Erro desconhecido ao buscar produto.");
    }
  }
}