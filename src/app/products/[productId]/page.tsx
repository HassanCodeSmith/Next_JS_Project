import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  return <h1>Details about product {productId}</h1>;
}
