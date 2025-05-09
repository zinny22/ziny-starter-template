import Image, { type ImageProps } from "next/image";
import { Button } from "../../../design-system/src/stories/Button";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-red-300">메인화면?</h1>
      <Button label="가나다라" />
    </div>
  );
}
