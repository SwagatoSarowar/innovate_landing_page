import servicesCardImg1 from "../assets/services-card-img-1.png";
import servicesCardImg2 from "../assets/services-card-img-2.png";
import servicesCardImg3 from "../assets/services-card-img-3.png";
import servicesCardImg4 from "../assets/services-card-img-4.png";
import Container from "../components/Container";
import ServicesCard, { ServicesCardProps } from "../components/ServicesCard";

const servicesCardData: ServicesCardProps[] = [
  {
    img: servicesCardImg1,
    title: "Plan Product Roadmap",
    description:
      "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
  },
  {
    img: servicesCardImg2,
    title: "Assign Any Work",
    description:
      "Work assignment or job assignment is allocating work to work centers or appropriate ",
  },
  {
    img: servicesCardImg3,
    title: "Monitor Work Progress",
    description:
      "Monitor Work ProgressKeeping records and monitoring activities helps people see progress ",
  },
  {
    img: servicesCardImg4,
    title: "Pertect Intergration",
    description:
      "App integration, in a general sense, is the process of resources or capabilities from one application ",
  },
];

export default function Services() {
  return (
    <section id="service">
      <Container>
        <div className="py-16">
          <div className="text-center">
            <p className="text-[#FF7364] mb-4">Our Services</p>
            <h2 className="text-3xl md:text-5xl text-dark-400 font-bold font-chivo">
              How It Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
            {servicesCardData.map((sC, index) => (
              <ServicesCard
                key={index}
                img={sC.img}
                title={sC.title}
                description={sC.description}
              />
            ))}
          </div>
          <div className="text-center">
            <button className="text-lg font-bold px-8 py-4 border border-dark-300 rounded-lg hover:bg-dark-300 hover:text-white duration-200">
              View More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
