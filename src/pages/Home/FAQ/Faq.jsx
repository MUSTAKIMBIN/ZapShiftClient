import React from "react";

const Faq = () => {
  return (
    <div className="w-[80%] mx-auto my-14">
      <h3 className="text-4xl text-secondary text-center font-semibold py-3">
        Frequently Asked Question (FAQ)
      </h3>
      <p className="text-sm text-center py-2.5">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce <br /> pain, and strengthen your body
        with ease!
      </p>

      <div>
        {/* question one */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold text-secondary">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        {/* question two */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-secondary">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm"></div>
        </div>
        {/* question three */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-secondary">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm"></div>
        </div>
        {/* question four */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-secondary">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm"></div>
        </div>
        {/* question five */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-secondary">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
