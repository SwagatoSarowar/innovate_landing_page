import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "../components/Container";
import TestimonialCard from "../components/TestimonialCard";

export interface ReviewIterface {
  name: string;
  job: string;
  comment: string;
}

const reviewData: ReviewIterface[] = [
  {
    name: "Robert Fox",
    job: "Digital Marketer",
    comment:
      "Wow. Amazing company, amazing expert manager. They know how to get things done when it comes to online trading.",
  },
  {
    name: "Robert Fox",
    job: "Digital Marketer",
    comment:
      "Wow. Amazing company, amazing expert manager. They know how to get things done when it comes to online trading.",
  },
  {
    name: "Robert Fox",
    job: "Digital Marketer",
    comment:
      "Wow. Amazing company, amazing expert manager. They know how to get things done when it comes to online trading.",
  },
];

export default function Testimonail() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      className="my-20 py-20
     bg-[#F4FAFA]"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-10 items-center">
          <div className="lg:pr-24">
            <h2 className="text-3xl md:text-5xl font-chivo font-bold text-dark-400">
              What they are talking about us?
            </h2>
            <p className="text-dark-300 my-8">
              testimonials are evidence of customers talking about your product
              or service in their own words. At their best, they are authentic,
              descriptive.
            </p>
            <button className="px-8 py-4 rounded-lg duration-200 text-white hover:bg-dark-400 bg-dark-300">
              Get Started
            </button>
            <div className="mt-10 sm:flex items-center gap-x-10">
              <div className="relative h-[58px] w-[175px] [&>*]:absolute [&>*]:h-[58px] [&>*]:aspect-square [&>*]:bg-gray-300 [&>*]:border-2 [&>*]:border-white [&>*]:rounded-full">
                <div className=""></div>
                <div className="left-[38px]"></div>
                <div className="left-[76px]"></div>
                <div className="left-[114px]"></div>
              </div>
              <div>
                <div className="flex items-center gap-x-4">
                  <h4 className="font-chivo text-2xl font-black text-gray-400">
                    4.5 <span className="ml-4 text-gray-300">|</span>
                  </h4>
                  <div className="flex text-[#FDB400]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div>
                  <p className="sm:text-center text-xl mt-2 text-dark-300">
                    280k Total Review
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-0">
            <Slider {...settings}>
              {reviewData.map((review, index) => (
                <div key={index}>
                  <TestimonialCard key={index} review={review} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
}
