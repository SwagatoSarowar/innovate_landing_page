import Container from "../components/Container";

export default function CTA() {
  return (
    <section>
      <Container>
        <div className="bg-cta-bg bg-no-repeat bg-cover bg-center rounded-[20px]">
          <div className="md:flex justify-between items-center md:p-[100px] py-20 px-10">
            <h2 className="text-white text-3xl md:text-4xl font-chivo font-bold md:w-1/2 ">
              Don’t find the answer? contact us for any query.
            </h2>
            <div className="mt-10 md:mt-0">
              <button className="px-8 py-4 rounded-md bg-light-400 text-dark-400 text-lg hover:bg-light-400/75 font-bold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
