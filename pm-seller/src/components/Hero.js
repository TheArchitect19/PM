
import React from "react";

const HowItWorks = () => {
  return (
    <section id='hiw' className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#F55566] sm:text-4xl lg:text-5xl">How does it work?</h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Elevate your online presence and showcase your products or services with ease. Our user-friendly platform puts you in control, allowing you to tailor your page to reflect your unique brand identity. </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-black"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-[#F55566] md:mt-10">Create a account</h3>
              <p className="mt-4 text-base text-gray-600">Create an account to embark on a journey of personalized services tailored just for you. Your account is not just a registration; it&apos;s your key to unlocking a host of features that enhance your journey with us.</p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-black"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-[#F55566] md:mt-10">Pick a plan</h3>
              <p className="mt-4 text-base text-gray-600">Dive into a seamless experience, where your preferences shape your interactions. Join us and discover a world of convenience and exclusive offerings designed with you in mind.</p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-black"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-[#F55566] md:mt-10">Release & Launch</h3>
              <p className="mt-4 text-base text-gray-600">Release & Launch Your Online Presence,  Release your brand, captivate your audience, and launch into a new era of online visibility. Get ready to amplify your reach and connect with customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;