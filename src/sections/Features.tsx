import featureIcon1 from "../assets/features-icon-1.png";
import featureIcon2 from "../assets/features-icon-2.png";
import featureIcon3 from "../assets/features-icon-3.png";
import featureImage from "../assets/features-img.png";
import Container from "../components/Container";
import FeatureCard, { FeatureCardProps } from "../components/FeatureCard";

const featureCardData: FeatureCardProps[] = [
  {
    img: featureIcon1,
    title: "Fast and Easy to use",
    description: "Easily to convert API with just a few clicks",
  },
  {
    img: featureIcon2,
    title: "Safely Security",
    description: "All customer data is encrypted",
  },
  {
    img: featureIcon3,
    title: "Get Organized",
    description: "From lists to boards, organize work your way.",
  },
];

export default function Features() {
  return (
    <section id="features" className="pt-[150px]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-x-[100px]">
          <div>
            <img className="w-full" src={featureImage} alt="Feature Image" />
          </div>
          <div className="">
            <h2 className="text-dark-400 font-chivo text-3xl md:text-[42px] font-bold text-center lg:text-start">
              We provide features for your Business
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-24 gap-y-10 mt-10">
              {featureCardData.map((fC, index) => (
                <FeatureCard
                  key={index}
                  img={fC.img}
                  title={fC.title}
                  description={fC.description}
                />
              ))}
              <button className="self-end px-8 py-4 bg-dark-300 hover:bg-dark-400 duration-200 text-lg font-bold rounded-md text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
