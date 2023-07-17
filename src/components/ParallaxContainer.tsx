import { Parallax } from "react-parallax";

interface ParallaxContainerProps {
  image: any;
  name: string;
}

const ParallaxContainer = ({ image, name }: ParallaxContainerProps) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt={name}
      strength={500}
      bgClassName="bg-cover bg-center bg-repeat bg-fixed"
      className="my-10 w-screen flex flex-col items-center justify-center text-4xl font-bold text-white h-[250px]"
    >
      {name}
      <div style={{ height: "50px" }} />
    </Parallax>
  );
};

export default ParallaxContainer;