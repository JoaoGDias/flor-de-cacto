export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: Date;
  date_created_gmt: Date;
  date_modified: Date;
  date_modified_gmt: Date;
  type: "simple" | "variable" | "grouped" | "external";
  status: "any" | "draft" | "pending" | "private" | "publish";
  featured: boolean;
  catalog_visibility: "visible" | "catalog" | "search" | "hidden";
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: Date | null;
  date_on_sale_from_gmt: Date | null;
  date_on_sale_to: Date | null;
  date_on_sale_to_gmt: Date | null;
  price_html: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: Download[]; // Substituído any[] por Download[]
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: "taxable" | "shipping" | "none";
  tax_class: "standard" | "reduced-rate" | "zero-rate";
  manage_stock: boolean;
  stock_quantity: number;
  stock_status: "instock" | "outofstock" | "onbackorder";
  backorders: "no" | "notify" | "yes";
  backorders_allowed: boolean;
  backordered: boolean;
  sold_individually: boolean;
  weight: string;
  dimensions: Dimensions;
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  related_ids: number[];
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: Partial<Category>[];
  tags: Tag[]; // Substituído any[] por Tag[]
  images: Image[];
  attributes: Attribute[];
  default_attributes: DefaultAttribute[]; // Substituído any[] por DefaultAttribute[]
  variations: number[];
  grouped_products: number[];
  menu_order: number;
  meta_data: MetaDatum[];
  _links: Links;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: Image;
  menu_order: number;
  count: number;
  _links: Links;
}

export interface Collection {
  href: string;
}

export interface Dimensions {
  length: string;
  width: string;
  height: string;
}

export interface MetaDatum {
  id: number;
  key: string;
  value: string;
}

export interface LineItem {
  id: number;
  name: string;
  product_id: number;
  variation_id: number;
  quantity: number;
  tax_class: string;
  subtotal: string;
  subtotal_tax: string;
  total: string;
  total_tax: string;
  taxes: Tax[]; // Substituído any[] por Tax[]
  meta_data: MetaDatum[];
  sku: string;
  price: number;
}

export interface ShippingLine {
  id: number;
  method_title: string;
  method_id: string;
  instance_id: string;
  total: string;
  total_tax: string;
  taxes: Tax[]; // Substituído any[] por Tax[]
  meta_data: MetaDatum[]; // Substituído any[] por MetaDatum[]
}

export interface Tax {
  id: number;
  rate_code: string;
  rate_id: number;
  label: string;
  compound: boolean;
  tax_total: string;
  shipping_tax_total: string;
}

export interface Cart {
  payment_method: string;
  payment_method_title: string;
  billing: Billing;
  shipping: Shipping;
  line_items: LineItem[];
  shipping_lines: ShippingLine[];
  customer_id: number;
  meta_data: MetaDatum[];
  set_paid: false;
}

export interface Image {
  id: number;
  date_created: Date;
  date_created_gmt: Date;
  date_modified: Date;
  date_modified_gmt: Date;
  src: string;
  name: string;
  alt: string;
  position: number;
}

export interface Attribute {
  options: string;
  id: number;
  name: string;
  option: string;
}

export interface DefaultAttribute {
  id: number;
  name: string;
  option: string;
}

export interface MetaData {
  id: number;
  key: string;
  value: string;
}

export interface Up {
  href: string;
}

export interface Customer {
  id: number;
  date_created: Date;
  date_created_gmt: Date;
  date_modified: Date;
  date_modified_gmt: Date;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  username: string;
  billing: Billing;
  shipping: Shipping;
  is_paying_customer: boolean;
  avatar_url: string;
  meta_data: MetaDatum[];
  _links: Links;
}

export interface Order {
  id: number;
  parent_id: number;
  number: string;
  order_key: string;
  created_via: string;
  version: string;
  status: string;
  currency: string;
  date_created: Date;
  date_created_gmt: Date;
  date_modified: Date;
  date_modified_gmt: Date;
  discount_total: string;
  discount_tax: string;
  shipping_total: string;
  shipping_tax: string;
  cart_tax: string;
  total: string;
  total_tax: string;
  prices_include_tax: boolean;
  customer_id: number;
  customer_ip_address: string;
  customer_user_agent: string;
  customer_note: string;
  billing: Billing;
  shipping: Shipping;
  payment_method: string;
  payment_method_title: string;
  transaction_id: string;
  date_paid?: Date | null; // Substituído any por Date ou null
  date_paid_gmt?: Date | null; // Substituído any por Date ou null
  date_completed?: Date | null; // Substituído any por Date ou null
  date_completed_gmt?: Date | null; // Substituído any por Date ou null
  cart_hash: string;
  meta_data: MetaDatum[];
  line_items: LineItem[];
  tax_lines: Tax[]; // Substituído any[] por Tax[]
  shipping_lines: ShippingLine[];
  fee_lines: FeeLine[]; // Substituído any[] por FeeLine[]
  coupon_lines: CouponLine[]; // Substituído any[] por CouponLine[]
  refunds: Refund[]; // Substituído any[] por Refund[]
  _links: Links;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  up: Up[];
}

export interface Billing {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}

export interface Shipping {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
}

export interface Variation {
  id: number;
  date_created: Date;
  date_created_gmt: Date;
  date_modified: Date;
  date_modified_gmt: Date;
  description: string;
  permalink: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from?: Date | null; // Substituído any por Date ou null
  date_on_sale_from_gmt?: Date | null; // Substituído any por Date ou null
  date_on_sale_to?: Date | null; // Substituído any por Date ou null
  date_on_sale_to_gmt?: Date | null; // Substituído any por Date ou null
  on_sale: boolean;
  visible: boolean;
  purchasable: boolean;
  virtual: boolean;
  downloadable: boolean;
  downloads: Download[]; // Substituído any[] por Download[]
  download_limit: number;
  download_expiry: number;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity?: number | null; // Substituído any por number ou null
  in_stock: boolean;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  weight: string;
  dimensions: Dimensions;
  shipping_class: string;
  shipping_class_id: number;
  image: Image;
  attributes: Attribute[];
  menu_order: number;
  meta_data: MetaDatum[];
  _links: Links;
}

export interface Download {
  id: number;
  name: string;
  file: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface FeeLine {
  id: number;
  name: string;
  total: string;
  tax_class: string;
  tax_status: string;
}

export interface CouponLine {
  id: number;
  code: string;
  discount: string;
  discount_tax: string;
}

export interface Refund {
  id: number;
  reason: string;
  amount: string;
  date_created: Date;
}

export interface Self {
  href: string;
}
