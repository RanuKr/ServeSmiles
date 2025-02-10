import React from 'react';
import { useNavigate } from 'react-router-dom';

function FAQ() {
  const navigate = useNavigate();

  const handleButtonClick = (section) => {
    switch (section) {
      case 'delivery':
        navigate('/delivery');
        break;
      case 'account':
        navigate('/account');
        break;
      case 'findUs':
        navigate('/findus');
        break;
      case 'joinUs':
        navigate('/joinus');
        break;
      case 'registration':
        navigate('/registration');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <section style={{ backgroundColor: '#7E8F90' }} className="mb-24 text-center">
        <div className="flex justify-center">
          <div>
            <h2 className="mb-12 ml-2 mt-2 text-5xl text-white font-bold tracking-tight md:text-6xl xl:text-7xl">
              FAQs
            </h2>
          </div>
        </div>
      </section>

      <div className="container mt-2 my-24 mx-auto md:px-3">
        <section className="mb-32">
          <div className="grid gap-4 md:grid-cols-3">
            <div style={{ backgroundColor: '#7E8F90' }} className="mb-6 md:mb-0">
              {/* Delivery Button */}
              <button 
                onClick={() => handleButtonClick('delivery')} 
                className="mb-4 text-4xl text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 px-4 transition duration-300"
              >
                DELIVERY
              </button>
              <hr className="my-4 border-t border-white" /> {/* Horizontal line separator */}

              {/* Account Button */}
              <button 
                onClick={() => handleButtonClick('account')} 
                className="mb-4 text-4xl text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 px-4 transition duration-300"
              >
                ACCOUNT
              </button>
              <hr className="my-4 border-t border-white" /> {/* Horizontal line separator */}

              {/* Find Us Button */}
              <button 
                onClick={() => handleButtonClick('findUs')} 
                className="mb-4 text-4xl text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 px-4 transition duration-300"
              >
                FIND US
              </button>
              <hr className="my-4 border-t border-white" /> {/* Horizontal line separator */}

              {/* Join Us Button */}
              <button 
                onClick={() => handleButtonClick('joinUs')} 
                className="mb-4 text-4xl text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 px-4 transition duration-300"
              >
                JOIN US
              </button>
              <hr className="my-4 border-t border-white" /> {/* Horizontal line separator */}

              {/* Registration Button */}
              <button 
                onClick={() => handleButtonClick('registration')} 
                className="mb-4 text-4xl text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 px-4 transition duration-300"
              >
                REGISTRATION
              </button>
            </div>

            <div className="mb-6 md:mb-0 col-span-2">
              <p className="mb-4 mt-16 font-bold text-black text-3xl">How often are meals distributed?</p>
              <p className="mb-12 text-black">
                Meal distribution schedules may vary. Typically, we aim to provide meals on a specific frequency (e.g., daily, weekly). Please refer to our program events updates for more information.
              </p>

              <p className="mb-4 font-bold text-black text-3xl">How can I sign up for the feeding program?</p>
              <p className="mb-12 text-black">
                To sign up for our feeding program, please visit our registration page on our website and follow the instructions provided.
              </p>

              <p className="mb-4 font-bold text-black text-3xl">How can I get in touch with the program organizers for additional questions?</p>
              <p className="mb-12 text-black">
                You can reach out to us via email at <a href="mailto:info@ServeSm iles.org" className="text-blue-500 underline">info@ServeSmiles.org</a>. We're here to help with any further inquiries you may have.
              </p>
            </div>
          </div>
          <p className="flex justify-center mt-11 font-bold text-black text-2xl">
            If you have any more queries, please reach out via our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}

export default FAQ;