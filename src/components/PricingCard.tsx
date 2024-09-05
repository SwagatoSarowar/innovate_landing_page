import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";

export interface IPricingCardProps {
  Icon: IconType;
  title: string;
  pricing: string;
  saving: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({
  Icon,
  title,
  pricing,
  saving,
  features,
  isPopular = false,
}: IPricingCardProps) {
  return (
    <div
      className={`p-12 rounded-[16px] outline outline-2 outline-[#d3cadf] flex flex-col items-center gap-y-8 ${
        isPopular ? "bg-dark-300" : ""
      }`}
    >
      <div className="text-center">
        <div className="p-8 text-3xl mx-auto bg-[#F4EBFF] text-dark-300 w-fit rounded-full">
          <Icon />
        </div>
        <h4
          className={`text-xl md:text-[24px] font-bold font-chivo mt-4 ${
            isPopular ? "text-[#43E7DF]" : "text-dark-300"
          }`}
        >
          {title}
        </h4>
        <h3
          className={`text-4xl md:text-[44px] font-bold font-chivo my-6 tracking-tight text-dark-400 ${
            isPopular ? "text-white" : ""
          }`}
        >
          {pricing}
        </h3>
        <p className={`${isPopular ? "text-white" : ""}`}>
          Annual Pricing{" "}
          <span
            className={`font-bold ${
              isPopular ? "text-[#43E7DF]" : "text-dark-300"
            }`}
          >
            (save {saving})
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-x-4">
            <div className="h-5 aspect-square flex items-center justify-center rounded-full bg-[#F4EBFF] text-dark-300 text-xs">
              <FaCheck />
            </div>
            <p className={`text-dark-400 ${isPopular ? "text-white" : ""}`}>
              {feature}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full">
        <button
          className={`text-lg font-bold px-8 py-4 w-full rounded-lg  duration-200 ${
            isPopular
              ? "text-dark-300 bg-light-400 hover:bg-[#bebac4]"
              : "text-white hover:bg-dark-400 bg-dark-300"
          }`}
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
}
