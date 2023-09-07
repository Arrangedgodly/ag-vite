interface ParallaxContainerProps {
  image: any;
  name: string;
}

const ParallaxContainer = ({ image, name }: ParallaxContainerProps) => {
  return (
    <div className='card w-96 bg-base-100 shadow-2xl image-full'>
      <figure><img src={image} alt={name} /></figure>
      <div className='justify-center card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
      </div>
      <div className="justify-center card-actions">
      </div>
    </div>
  );
};

export default ParallaxContainer;