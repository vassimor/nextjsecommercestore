import Image from 'next/image';
import Link from 'next/link';
import { getProduct, getProducts } from '../../database/products';

export default function ProductsPage(){

const products =  getProducts();
  return (
    <div >
      <main >

      <div className='grid grid-cols-3 grid-rows-2' >




      {products.map((product) => {
        return (

          <Link  key={`product-${product.id}`} href={`/products/${product.id}`}>
            <div >
              <Image
                src={`/products/${product.image}.jpg`}
                width="300"
                height="200"
                alt={product.name}
              />
            </div>
            {product.name}
          </Link>
        );

      })}
      </div>










      </main>
    </div>
  );}
