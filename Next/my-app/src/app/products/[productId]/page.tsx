
import { Metadata } from "next"

type Props = {
  params:{productId:string}
}
export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Product ${params.productId}`,
    description: `Details and information about product ${params.productId}.`,
  };
}

export default function Product({params}: Props) {

  return (
    <div>
      <h1>Product Detail of Id {params.productId}</h1>
    </div>
  )
}