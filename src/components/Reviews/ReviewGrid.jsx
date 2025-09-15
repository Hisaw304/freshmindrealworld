import React, { useState } from "react";
import ReviewCard from "./ReviewCard";

const ReviewsGrid = ({ reviews }) => {
  const [visibleCount, setVisibleCount] = useState(2); // show first 2 reviews by default

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2); // load 2 more each click
  };

  return (
    <section className="lg:hidden relative px-4 reviews mt-0 pt-4" id="reviews">
      <div className="w-full lg:w-[46vw] mx-auto">
        <div className="flex flex-col gap-6 relative">
          {reviews.slice(0, visibleCount).map((review, index) => (
            <ReviewCard
              key={index}
              videoSrc={review.videoSrc}
              name={review.name}
              age={review.age}
              flagSrc={review.flagSrc}
              sales={review.sales}
              variant="grid"
            />
          ))}
        </div>

        {/* Load More button */}
        {visibleCount < reviews.length && (
          <div
            onClick={handleLoadMore}
            className="bg-[#181e27] py-4 mt-4 px-20 text-center text-white font-semibold sfpro cursor-pointer hover:bg-[#222933] transition"
          >
            Load More
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsGrid;
