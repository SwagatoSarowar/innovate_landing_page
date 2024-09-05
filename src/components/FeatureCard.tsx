export interface FeatureCardProps {
  img: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  img,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="text-center sm:text-start">
      <img
        className="w-[50px] mx-auto sm:mx-0 aspect-square"
        src={img}
        alt={title}
      />
      <h3 className="text-dark-400 text-xl font-bold">{title}</h3>
      <p className="text-dark-400/75 text-lg">{description}</p>
    </div>
  );
}
