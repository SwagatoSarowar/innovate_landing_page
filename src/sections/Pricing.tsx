import { BsBuildings } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import Container from "../components/Container";
import PricingCard, { IPricingCardProps } from "../components/PricingCard";

const pricingData: IPricingCardProps[] = [
  {
    Icon: FaRegUser,
    title: "Personal",
    pricing: "$10/mth",
    saving: "20%",
    features: [
      "Calendar View",
      "Custom Templates",
      "List View",
      "Board View",
      "Assignees & Due Dates",
    ],
  },
  {
    Icon: GrGroup,
    title: "Team",
    pricing: "$25/mth",
    saving: "35%",
    features: [
      "Timeline Review",
      "Custom Fields",
      "Custom Templates",
      "Task Dependencies",
      "Milestone Manage",
    ],
    isPopular: true,
  },
  {
    Icon: BsBuildings,
    title: "Enterprise",
    pricing: "$50/mth",
    saving: "40%",
    features: [
      "Data Export & Deletion",
      "Block Native Integrations",
      "Custom Branding",
      "Lock Custom Fields",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section>
      <Container>
        <div>
          <h2 className="text-center text-dark-400 text-3xl md:text-[42px] font-bold font-chivo mt-[100px] mb-14 max-w-[650px] mx-auto">
            Pricing Designed To Fit Your Business
          </h2>
          <div className="grid md:grid-cols-3 gap-y-8 gap-x-2 lg:gap-x-10">
            {pricingData.map((pD, index) => (
              <PricingCard
                key={index}
                Icon={pD.Icon}
                title={pD.title}
                pricing={pD.pricing}
                saving={pD.saving}
                features={pD.features}
                isPopular={pD?.isPopular}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
