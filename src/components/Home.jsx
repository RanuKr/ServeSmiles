import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Hero/Footer";
import { QRCode } from "react-qr-code";
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
      {/* Hero Section */}
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "50%",
          backgroundImage: `url(${image1})`,
          height: "90vh",
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
          }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-white px-4">
              {/* Main Heading */}
              <h1 className="mb-6 lg:text-8xl ssm:text-5xl font-bold">
                Let's ServeSmiles
              </h1>

              {/* Tagline */}
              <h3 className="mb-8 lg:text-5xl ssm:text-2xl font-bold">
                Alleviating Hunger
              </h3>

              {/* Call-to-Action Button */}
              <button
                type="button"
                className="inline-block bg-[#7E8F90] rounded-full border-2 border-neutral-50 px-10 pt-3 pb-3 text-1xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-[#5A6A6B] hover:border-[#5A6A6B] hover:text-white focus:outline-none focus:ring-0"
              >
                <Link to="/donate"> DONATE HERE</Link>
              </button>

              {/* Subtle Statistics */}
              <div className="mt-12 flex justify-center space-x-8">
                <div className="text-center">
                  <p className="text-4xl font-bold">10,000+</p>
                  <p className="text-lg">Meals Served</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">50+</p>
                  <p className="text-lg">Communities Reached</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">1,000+</p>
                  <p className="text-lg">Volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-[#7E8F90] text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {/* Mission Card */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#FFD700]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To alleviate hunger and bring smiles to those in need by providing nutritious meals and fostering a supportive community.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#FFD700]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2 12l3-3m0 0l3 3m-3-3v12m16 0l-3-3m0 0l-3 3m3-3V6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                A world where no one goes to bed hungry, and every individual has access to food, dignity, and hope.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#FFD700]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-lg">
                Compassion, integrity, and community are at the heart of everything we do. We believe in serving with love and respect.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-[#F5F5F5] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8"></h2>
          <iframe
            className="w-full h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/RGTymlRNhkU?autoplay=1&start=18"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="bg-[#7E8F90] text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Scan to Donate</h2>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <QRCode value="https://your-payment-link.com" size={200} /> {/* Replace with your payment link */}
            </div>
          </div>
          <p className="mt-6 text-lg">Scan the QR code to make a donation and support our cause.</p>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Event 1 */}
            <div className="bg-[#7E8F90] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Food Drive</h3>
              <p className="text-lg mb-2">Date: November 15, 2023</p>
              <p className="text-lg">Time: 10:00 AM - 4:00 PM</p>
              <p className="text-lg mt-4">Location: Central Park, New York</p>
            </div>
            {/* Event 2 */}
            <div className="bg-[#7E8F90] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Charity Run</h3>
              <p className="text-lg mb-2">Date: December 5, 2023</p>
              <p className="text-lg">Time: 8:00 AM - 12:00 PM</p>
              <p className="text-lg mt-4">Location: Golden Gate Park, San Francisco</p>
            </div>
            {/* Event 3 */}
            <div className="bg-[#7E8F90] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Community Dinner</h3>
              <p className="text-lg mb-2">Date: December 20, 2023</p>
              <p className="text-lg">Time: 6:00 PM - 9:00 PM</p>
              <p className="text-lg mt-4">Location: ServeSmiles Community Center, Chicago</p>
            </div>
          </div>
        </div>
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

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Feedbacks</h3>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Here's what some of our valued beneficiaries and partners have to say about their experience with ServeSmiles. Their stories serve as a testament to the impact we're making together in the community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* Testimonial 1 */}
            <div className="bg-[#7E8F90] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <img
                  src={image9}
                  alt="Aman Pandit"
                  className="w-24 h-24 rounded-full object-cover shadow-md"
                />
              </div>
              <p className="text-lg italic mb-4">
                "ServeSmiles has been a lifeline for me and my family. The nutritious meals they provide have eased our burdens and given us hope."
              </p>
              <p className="font-bold">- Aman Pandit</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#7E8F90] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <img
                  src={image7}
                  alt="Aaditya Yadav"
                  className="w-24 h-24 rounded-full object-cover shadow-md"
                />
              </div>
              <p className="text-lg italic mb-4">
                "Partnering with ServeSmiles has been a rewarding experience. Their commitment to the community is inspiring."
              </p>
              <p className="font-bold">- Aaditya Yadav</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#7E8F90] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <img
                  src={image8}
                  alt="Angad Bedi"
                  className="w-24 h-24 rounded-full object-cover shadow-md"
                />
              </div>
              <p className="text-lg italic mb-4">
                "ServeSmiles not only feeds our bodies but also our souls. Their kindness and dedication are truly heartwarming."
              </p>
              <p className="font-bold">- Angad Bedi</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-[#7E8F90] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <img
                  src={image6}
                  alt="Aarti Singh"
                  className="w-24 h-24 rounded-full object-cover shadow-md"
                />
              </div>
              <p className="text-lg italic mb-4">
                "Supporting ServeSmiles has been one of the most fulfilling experiences. I'm proud to be a part of this incredible cause."
              </p>
              <p className="font-bold">- Aarti Singh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
}

export default Home;