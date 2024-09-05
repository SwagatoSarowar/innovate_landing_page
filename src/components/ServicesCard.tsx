import { FaArrowRightLong } from "react-icons/fa6";

export interface ServicesCardProps {
  img: string;
  title: string;
  description: string;
}

export default function ServicesCard({
  img,
  title,
  description,
}: ServicesCardProps) {
  return (
    <div className="group p-5 outline rounded-lg outline-1 outline-black/10 hover:bg-dark-300 duration-200 text-center sm:text-start">
      <div className="p-6 w-fit bg-[#eeedec] group-hover:bg-white rounded-full sm:mx-0 mx-auto">
        <img
          className="w-[50px] aspect-square block mx-auto"
          src={img}
          alt={title}
        />
      </div>
      <h3 className="text-dark-400 group-hover:text-white text-xl md:text-2xl font-bold mt-6 mb-4 font-chivo">
        {title}
      </h3>
      <p className="text-dark-400/75 group-hover:text-white mt-2 mb-8">
        {description}
      </p>
      <p className="flex justify-center sm:justify-normal gap-x-2 items-center text-lg font-bold text-dark-300 group-hover:text-white cursor-pointer hover:gap-x-6 duration-200">
        <span>Read More</span>
        <FaArrowRightLong />
      </p>
    </div>
  );
}
