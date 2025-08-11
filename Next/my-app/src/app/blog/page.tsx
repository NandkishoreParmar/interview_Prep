import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (<>
  <div>
    <h1>This is a blog page </h1></div></>)
  // return setTimeout(() => {
  //   <div>
  //     <h1>Welcome to the Blog Page</h1>
  //   </div>
  // }, 3000);
}
