import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (

      <div className='flex gap-4 justify-center'>
        <Link href="/">Homepage</Link>
        <Link data-test-id="products-link" href="/products">Products</Link>

        <Link href="/thankyou">Thank you</Link>

        <Link href="/checkout">Checkout</Link>
        <Link data-test-id="cart-link" href="/cart">Cart</Link>

      </div>


  );
}
