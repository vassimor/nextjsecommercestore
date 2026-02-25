import { cookies } from 'next/headers';
import Image from 'next/image';
import { getProduct, products } from '../../../database/products';
import ProductItem from './ProductItem';

export const dynamic = 'force-dynamic';

export default async function ProductPage(props) {
  const params = await props.params;
  console.log('params', params);

  const product = getProduct(Number(params.productId));

  async function createCheck() {
    'use server'(await cookies()).set(
      'examplecookies',
      JSON.stringify({
        quantity: 3,
        productId: product.id
      }),
    );
  }

  return <ProductItem product={product} />;
}
