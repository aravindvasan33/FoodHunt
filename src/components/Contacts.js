import React from 'react'

const Contacts = () => {
  return (
    <div className=''>  <div className=" p-8 text-yellow-500">
    <h1 className="text-3xl font-bold text-yellow-500 mb-4">Contact Us</h1>
    <p className="mb-6">
      We’re here to help! Whether you have a question about your order, want to provide feedback, or just want to say hello, feel free to reach out to us. Our team at FoodHunt is always ready to assist you.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Information */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-2"><strong>Email:</strong> support@foodhunt.com</p>
        <p className="mb-2"><strong>Phone:</strong> +91 9445937148</p>
        <p className="mb-2"><strong>Address:</strong>Elcot Sez Thoraipakkam Chennai TamilNadu </p>
        <p className="mb-2"><strong>Operating Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>
      </div>

      {/* Contact Form */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" bg-yellow-500  hover:bg-black hover:text-yellow-500 py-2 px-4 rounded-lg text-black transition duration-200"
          >
            Send Message
          </button>
        </form></div></div></div></div>
  )
}

export default Contacts