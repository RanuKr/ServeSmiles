
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import image1 from "../images/1.webp";
import image2 from "../images/2.jpeg";
import image3 from "../images/3.jpg";
import image4 from "../images/6.jpeg";
import image5 from "../images/5.webp";
import image6 from "../images/9.jpg";
import image7 from "../images/8.jpg";
import image8 from "../images/10.jpg";
import image9 from "../images/11.jpg";

function Home() {
  return (
    <>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "50%",
          backgroundImage: `url(${image1})`,
          height: "90vh",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className=" px-6 text-center text-white md:px-12">
              <h1 className="mb-6 lg:text-8xl ssm:text-5xl font-bold">
                Let's ServeSmiles
              </h1>
              <h3 className="mb-8 lg:text-5xl ssm:text-2xl font-bold">
                Alleviating Hunger
              </h3>
              <button
                type="button"
                className=" inline-block bg-[#7E8F90] rounded-full border-2 border-neutral-50 px-10  pt-3 pb-3 text-1xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Link to="/donate"> DONATE HERE</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7E8F90] text-white rounded-full container mx-auto my-8 pt-9 pb-1  text-center px-20">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-8 mx-auto max-w-none">
            Welcome to <strong>ServeSmiles</strong>, an initiative built on the belief that a smile can spark hope and a single act of kindness can create lasting change. 
            Though we are a newly formed organization, we are already on a mission to brighten the lives of those facing hardships by providing not only meals but also the compassion and care they deserve.
            At ServeSmiles, we understand that everyone deserves the dignity of a full stomach and the warmth of a supportive community. With the collective effort of volunteers, local businesses, and generous donors, we work tirelessly to ensure that no one is left behind.
            We invite you to be part of this movement—because together, we can spread smiles, offer hope, and create a world where kindness knows no bounds. Let's build a future where no one is forgotten and everyone has a reason to smile.
        </p>

      </div>
      <div className="max-w-7xl  mx-auto ">
      <video className="w-full h-96" controls>
  <source src="src\assets\foodcrisis.mp4" type="video/mp4" />
 
  Your browser does not support the video tag.
</video>

      </div>

      <div className="m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h2 className="text-4xl font-bold mb-4">Articles</h2>
        </div>
        <div className="">
          <div className="  grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
            <div className=" bg-[#7E8F90] text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm font-semibold">
                    India food crisis
                  </div>

                  <p className="mt-2">
                    In October, Mohit Srivastava brought her malnourished
                    daughters to hospital in Muzzafarpur. That day, a nurse said,
                    42 other children had already been checked into the
                    emergency unit, ravaged by hunger. There were 57 the day
                    before that..
                    <Link
                      to="https://frontline.thehindu.com/news/indias-triumphs-over-poverty-marred-by-an-alarming-hunger-crisis-as-niti-aayog-report-finds-that-majority-of-the-population-cannot-afford-healthy-food/article67101938.ece"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline"
                    >
                      Show more ...
                    </Link>
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    src={image2}
                    alt=""
                    width={150}
                    height={150}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className=" bg-[#7E8F90] text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm font-semibold">
                    WATER SUPPLY
                  </div>

                  <p className="mt-2">
                  163 Million Indians lack access to safe drinking water. 210 Million Indians lack access to improved sanitation. 21% of communicable diseases are linked to unsafe water. 500 children under the age of five die from diarrhea each day in India.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    src={image3}
                    alt=""
                    width={170}
                    height={150}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-black" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
            <div className="bg-[#7E8F90] text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm font-semibold">
                    FOOD SUPPLY
                  </div>

                  <p className="mt-2">
                  In 2023, the Global Hunger Index ranked India at 105th out of 127 countries. According to United Nations, there are nearly 195 million undernourished people in India that make up a quarter of the world's undernourished population. In addition, roughly 43% of children in India are chronically undernourished.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    src={image4}
                    alt=""
                    width={150}
                    height={150}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#7E8F90] text-white  max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm font-semibold">
                    WASH YOUR HANDS INITIATIVE
                  </div>

                  <p className="mt-2">
                  Hand hygiene is promoted through two national WASH flagship programmes – the Swachh Bharat Mission Phase 1 and 2 and the Jal Jeevan Mission on rural drinking water.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    src={image5}
                    alt=""
                    width={150}
                    height={150}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className=" p-10    px-4 ">
        <div className="mx-auto max-w-3xl text-center  ">
          <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
          <p className="mb-6 pb-2 text-xl md:mb-12">
            Here's what some of our valued beneficiaries and partners have to
            say about their experience with ServeSmiles's feeding program. Their
            stories serve as a testament to the impact we're making together in
            the community. We're honored to share their heartfelt testimonials.
          </p>
        </div>

        <div className="grid gap-12 text-center md:grid-cols-2">
          {/* First Testimonial */}
          <div className="mb-6 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={image9}
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="Testimonial Avatar 1"
              />
            </div>
            <p className="my-4 text-xl ">
              "ServeSmiles has been a lifeline for me and my family. The
              nutritious meals they provide have eased our burdens and given us
              hope. We're so grateful for their unwavering support"
            </p>
            <p className="italic">- Aman Pandit</p>
          </div>

          {/* Second Testimonial */}
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={image7}
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="Testimonial Avatar 2"
              />
            </div>
            <p className="my-4 text-xl ">
              "Partnering with Food4Education has been a rewarding experience.
              Their commitment to the community is inspiring, and we're proud to
              contribute to their mission. Together, we're making a positive
              impact."
            </p>
            <p className="italic">- Aaditya Yadav</p>
          </div>
          {/* third testimonial */}
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={image8}
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="Testimonial Avatar 2"
              />
            </div>
            <p className="my-4 text-xl ">
              "ServeSmiles not only feeds our bodies but also our souls. Their
              kindness and dedication are truly heartwarming. They've shown me
              that there are people who care and are willing to help."
            </p>
            <p className="italic">- Angad Bedi</p>
          </div>
          {/* fourth testimonial */}
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={image6}
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="Testimonial Avatar 2"
              />
            </div>
            <p className="my-4 text-xl ">
              "Supporting Food4Education has been one of the most fulfilling
              experiences. Knowing that my contributions directly nourish those
              in need is a privilege. I'm proud to be a part of this incredible
              cause."
            </p>
            <p className="italic">- Aarti Singh</p>
          </div>
        </div>
      </section>

      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
}

export default Home;
