import factsImg1 from "../assets/facts-img.png";
import Container from "../components/Container";

interface IFactsData {
  count: string;
  text: string;
}

const factsDataArr: IFactsData[] = [
  {
    count: "720+",
    text: "Over 500 business powered with us",
  },
  {
    count: "4.9",
    text: "Rating on google play and app store",
  },
  {
    count: "200+",
    text: "Easily integrate with your favorite apps",
  },
];

export default function Facts() {
  return (
    <section>
      <Container>
        <div className="bg-facts-bg bg-no-repeat bg-center bg-cover rounded-[32px] px-8 pt-8 pb-8 lg:pb-0">
          <div className="grid lg:grid-cols-2 gap-10 text-white">
            <div className="mx-auto lg:mx-0">
              <img src={factsImg1} alt="Facts Image" />
            </div>
            <div className="self-center text-center lg:text-start">
              <h2 className="text-3xl md:text-5xl font-chivo font-bold">
                Trusted by 35,000+ happy customers.
              </h2>
              <div className="grid sm:grid-cols-3 gap-x-10 gap-y-6 mt-8 md:mt-16">
                {factsDataArr.map((fD, index) => (
                  <FactsData key={index} count={fD.count} text={fD.text} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const FactsData = function ({ count, text }: IFactsData) {
  return (
    <div>
      <h3 className="font-chivo text-3xl md:text-[42px] font-black mb-4">
        {count}
      </h3>
      <p className="text-lg text-white/75">{text}</p>
    </div>
  );
};
