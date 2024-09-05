import arrowDown from "../assets/doddle-arrow-down.png";
import arrowUp from "../assets/doddle-arrow-up.png";
import cardImg1 from "../assets/process-img-1.png";
import cardImg2 from "../assets/process-img-2.png";
import cardImg3 from "../assets/process-img-3.png";
import Container from "../components/Container";
import ProcessCard, { ProcessCardProps } from "../components/ProcessCard";

const processCardData: ProcessCardProps[] = [
  {
    img: cardImg1,
    title: "Login or sign up to be able use our platform",
    description:
      "This quickstart shows you how to use Identity Platform to sign in a user with an email and password. ",
  },
  {
    img: cardImg2,
    title: "Connect your website with just a few click",
    description:
      "Once your website is online, you can configure it, I will show you how to put your website online",
  },
  {
    img: cardImg3,
    title: "Take some sales data that you want",
    description:
      "Sell your data directly: The most straightforward method is to sell your data directly to another",
  },
];

export default function WorkProcess() {
  return (
    <section className="my-10">
      <Container>
        <div>
          <div className="flex justify-between items-center gap-y-2 flex-col md:flex-row text-center md:text-start">
            <h2 className="font-chivo text-dark-400 text-3xl md:text-5xl font-bold max-w-[520px]">
              How simple is it to use our platform?
            </h2>
            <p className="text-dark-400/75 max-w-[530px] text-lg">
              This Innovate Con guide explores the most popular platforms and
              walks you through how to use them to grow your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-x-10 lg:gap-x-[220px] gap-y-10 mt-20 sm:mx-20 md:mx-0">
            {processCardData.map((data, index) => (
              <div key={index} className="relative">
                <ProcessCard
                  img={data.img}
                  title={data.title}
                  description={data.description}
                />
                {index === 0 && (
                  <img
                    className="hidden lg:block w-[250px] absolute top-0 right-0 translate-y-1/2 translate-x-full"
                    src={arrowUp}
                    alt="Arrow"
                  />
                )}
                {index === 1 && (
                  <img
                    className="hidden lg:block w-[250px] absolute top-0 right-0 translate-x-full"
                    src={arrowDown}
                    alt="Arrow"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
