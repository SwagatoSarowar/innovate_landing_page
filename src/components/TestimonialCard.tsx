import { FaStar } from "react-icons/fa";
import { ReviewIterface } from "../sections/Testimonial";

export default function TestimonialCard({
  review,
}: {
  review: ReviewIterface;
}) {
  return (
    <div className="py-10 px-2 sm:p-16 bg-white rounded-xl text-center sm:text-start">
      <p className="text-xl text-dark-300">{review.comment}</p>
      <div className="mt-8 sm:flex justify-between">
        <div>
          <h4 className="text-2xl font-bold font-chivo mb-4">{review.name}</h4>
          <p>{review.job}</p>
        </div>
        <p className="mx-auto w-fit sm:w-auto sm:mx-0 mt-4 sm:mt-0 flex text-xl text-[#FDB400] gap-x-1 self-end">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
      </div>
    </div>
  );
}
