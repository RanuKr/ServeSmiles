import React from 'react'

function ContactUs() {
  return (
<div className="container mx-auto my-10 p-6 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block font-bold mb-2">Your Name (required)</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Your Email (required)</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Subject</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Subject"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Your Message</label>
          <textarea
            className="w-full p-2 border rounded h-32"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold"
        >
          Submit
        </button>
      </form>
      <p className="mt-6">Reach out with any comments or queries you might have</p>
      <p>Contact Us: +91 7055727303/+91 7091725456</p>
      <p>Email Address: servesmiles.info.co.in</p>
    </div>
  

  )
}

export default ContactUs