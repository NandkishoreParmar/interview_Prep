import Link from "next/link";
export default function Home() {
  return (
    <>
    <Link href="/products" ><p>Product</p></Link>
    <Link href="/blog"> <p>Blog</p> </Link>
    <Link href="/profile"> <p>Profile</p> </Link>
    <Link href="/about"> <p>About</p> </Link>
   <Link href="/login" >  <p>Login</p></Link>
    </>
  );
}
