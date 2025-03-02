import { PrimaryButton } from "@/components/UI/PrimaryButton";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

type Props = {
  product: ProductItem;
  isLogin: boolean;
  downloadPDF: (id: string) => void;
};

export default function ProductItem({ product, isLogin, downloadPDF }: Props) {
  return (
    <Card className="w-full h-[400px] py-4">
      <CardHeader className="pb-0 pt-2 flex justify-between">
        <div className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{product.name}</p>
          <small className="text-default-500">{product.description}</small>
          {isLogin && (
            <h4 className="font-bold text-large">${product.price}</h4>
          )}
        </div>

        <div className="w-[150px]">
          <PrimaryButton onPress={() => downloadPDF(product._id)}>
            Download PDF
          </PrimaryButton>
        </div>
      </CardHeader>
      <CardBody className="flex justify-center items-center">
        <Image
          alt="Product image"
          className="object-cover rounded-xl "
          src={product.imageURl}
          width={200}
        />
      </CardBody>
    </Card>
  );
}
