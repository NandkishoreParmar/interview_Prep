import Link from "next/link"

export default function ProductsDetails (){
const productId = 100;
  return (
    <div>
      <Link href="/" > <p>Home</p></Link>
      <h1>Products Details</h1>
      <ul>
        <Link href="/products/1" > <li>Product 1</li> </Link>
        <Link href="/products/2" > <li>Product 2</li> </Link>
        <Link href="/products/3" replace> <li>Product 3</li> </Link>
        <Link href={`/products/${productId}`} > <li>Product {productId}</li> </Link>
      
      </ul>
    </div>
  )
}