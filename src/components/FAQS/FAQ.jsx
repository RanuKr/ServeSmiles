import { useNavigate } from "react-router-dom";

function FAQ() {
  const navigate = useNavigate();

  // Handle navigation to different sections
  const handleNavigation = (path) => {
    navigate(`/${path}`);
  };

  // FAQButton component
  const FAQButton = ({ section, label }) => (
    <>
      <button
        onClick={() => handleNavigation(section)}
        className="mb-4 text-2xl text-white bg-[#5A6A6B] hover:bg-[#7E8F90] rounded-lg py-3 px-6 transition duration-300 w-full text-left"
      >
        {label}
      </button>
      <hr className="my-4 border-t border-white opacity-50" />
    </>
  );

  return (
    <div className="min-h-screen bg-gray-100">
     

      {/* FAQ Content Section */}
      <div className="container mx-auto my-16 px-4">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* FAQ Buttons */}
            <div className="bg-[#7E8F90] p-6 rounded-lg shadow-md">
              <FAQButton section="delivery" label="DELIVERY" />
              <FAQButton section="account" label="ACCOUNT" />
              <FAQButton section="findus" label="FIND US" />
              <FAQButton section="joinus" label="JOIN US" />
              <FAQButton section="registration" label="REGISTRATION" />
            </div>

            {/* FAQ Items */}
            <div className="col-span-2">
              <FAQItem
                question="How often are meals distributed?"
                answer="Meal distribution schedules may vary. Typically, we aim to provide meals on a specific frequency (e.g., daily, weekly). Please refer to our program events updates for more information."
              />
              <FAQItem
                question="How can I sign up for the feeding program?"
                answer="To sign up for our feeding program, please visit our registration page on our website and follow the instructions provided."
              />
              <FAQItem
                question="How can I get in touch with the program organizers for additional questions?"
                answer={
                  <>
                    You can reach out to us via email at{" "}
                    <a
                      href="mailto:info@ServeSmiles.org"
                      className="text-blue-500 underline hover:text-blue-700"
                    >
                      info@ServeSmiles.org
                    </a>
                    . We're here to help with any further inquiries you may have.
                  </>
                }
              />
            </div>
          </div>

          {/* Contact Message */}
          <p className="text-center mt-12 text-gray-700 text-xl font-semibold">
            If you have any more queries, please reach out via our{" "}
            <a
              href="/contact"
              className="text-blue-500 underline hover:text-blue-700"
            >
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

// FAQItem component
const FAQItem = ({ question, answer }) => (
  <div className="mb-8">
    <p className="mb-4 text-2xl font-bold text-gray-800">{question}</p>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default FAQ;