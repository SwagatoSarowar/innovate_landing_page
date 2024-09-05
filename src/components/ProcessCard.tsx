export interface ProcessCardProps {
  img: string;
  title: string;
  description: string;
}

export default function ProcessCard({
  img,
  title,
  description,
}: ProcessCardProps) {
  return (
    <div className="text-center">
      <img
        className="w-[110px] aspect-square block mx-auto"
        src={img}
        alt={title}
      />
      <h3 className="text-dark-400 text-xl md:text-2xl font-bold mt-6 mb-4 font-chivo">
        {title}
      </h3>
      <p className="text-dark-400/75 text-lg">{description}</p>
    </div>
  );
}
