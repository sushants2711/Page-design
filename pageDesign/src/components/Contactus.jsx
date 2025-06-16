import React, { useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from '../reactToats';

const Contactus = () => {

  // useEffect hooks for title
  useEffect(() => {
    document.title = "contact-us"
  }, [])

  // useState hooks for data store
  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    message: "",
  })

  // to counter anything change in input field to store data
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSendMessage({
      ...sendMessage,
      [name]: value
    })
  }

  // handle the form submission
  const handleFormSubmission = async (e) => {
    // prevent to page refresh
    e.preventDefault();

    const { name, email, message } = sendMessage;

    if(!name || !email || !message) {
      return handleError("All field are required")
    }
    
    try {
      const url = "https://page-design.onrender.com/contact";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendMessage)
      });  

      const result = await response.json();

      const { success, message, error } = result;
      if(success) {
        handleSuccess(message)
        setSendMessage({
          name: "",
          email: "",
          message: ""
        })
      }
      else if(!success) {
        handleError(message)
      }
      else{
        handleError(error)
      }
    } catch (error) {
      return handleError(error)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side Image Section */}
            <div className="flex justify-center items-center">
              <img
                src="contactusimage.avif"
                alt="Contact Us"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right Side Info Section (Form) */}

            <form onSubmit={handleFormSubmission}>
              <div>
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
              </div>
              {/* Name Input */}
      

              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-2 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200">
                  <img
                    src="https://img.icons8.com/ios/452/user.png"
                    alt="user-icon"
                    className="w-5 h-5 text-gray-500 mr-3"
                  />
                  <input
                    onChange={handleChange}
                    value={sendMessage.name}
                    type="text"
                    id="name"
                    className="w-full p-1 outline-none bg-gray-50 focus:bg-white"
                    placeholder="Your Name"
                    name='name'
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-2 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200">
                  <img
                    src="https://img.icons8.com/ios/452/email.png"
                    alt="email-icon"
                    className="w-5 h-5 text-gray-500 mr-3"
                  />
                  <input
                  value={sendMessage.email}
                    onChange={handleChange}
                    type="email"
                    id="email"
                    className="w-full p-1 outline-none bg-gray-50 focus:bg-white"
                    placeholder="Your Email"
                    name='email'
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-2 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200">
                  <img
                    src="https://img.icons8.com/ios/452/speech-bubble.png"
                    alt="message-icon"
                    className="w-5 h-5 text-gray-500 mr-3"
                  />
                  <textarea
                  value={sendMessage.message}
                    onChange={handleChange}
                    name='message'
                    id="message"
                    className="w-full p-2 outline-none bg-gray-50 focus:bg-white"
                    placeholder="Your Message"
                    rows="4"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-indigo-400 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Contactus;
