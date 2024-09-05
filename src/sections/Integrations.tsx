import integrationsImg1 from "../assets/integrations-img-1.png";
import integrationsImg2 from "../assets/integrations-img-2.png";
import integrationsImg3 from "../assets/integrations-img-3.png";
import integrationsImg4 from "../assets/integrations-img-4.png";
import integrationsImg5 from "../assets/integrations-img-5.png";
import integrationsImg6 from "../assets/integrations-img-6.png";
import integrationsImg7 from "../assets/integrations-img-7.png";
import integrationsImg8 from "../assets/integrations-img-8.png";
import Container from "../components/Container";

const integrationImages: string[] = [
  integrationsImg1,
  integrationsImg2,
  integrationsImg3,
  integrationsImg4,
  integrationsImg5,
  integrationsImg6,
  integrationsImg7,
  integrationsImg8,
];

export default function Integrations() {
  return (
    <section className="bg-[#F4FAFA] py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-10 items-center">
          <div className="text-center md:text-start">
            <p className="text-[#FF7364]">Integrations</p>
            <h2 className="text-3xl md:text-5xl md:leading-[58px] font-chivo font-bold text-dark-400 my-4">
              Easily integrate with your favorite apps
            </h2>
            <p className="text-lg leading-[32px] text-dark-400/75 mb-10">
              App integration, in a general sense, is the process of bringing
              resources or capabilities from one application to another. As the
              world of apps continues to evolve, app integration is becoming
              expected in many contexts.
            </p>
            <button className="self-end px-8 py-4 bg-dark-300 hover:bg-dark-400 duration-200 text-lg font-bold rounded-md text-white">
              Get Started
            </button>
          </div>
          <div>
            <div className="grid grid-cols-4 gap-4">
              {integrationImages.map((img, index) => (
                <img
                  className={`${
                    [0, 1, 3, 5].includes(index) ? "col-span-2" : ""
                  } h-full w-full hover:shadow-xl duration-200 rounded-lg`}
                  key={index}
                  src={img}
                  alt={`Integrations Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
