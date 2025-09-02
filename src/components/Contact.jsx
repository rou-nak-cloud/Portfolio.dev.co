import React from 'react'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d5b29f6a-d275-4904-ba0a-c3f7c6a3034b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error", error.message);
      toast.error(error.message)
    }
  }

  return (
    <div className="contact h-[100%] flex flex-col items-center justify-center lg:flex-row gap-12 lg:gap-20 px-6 sm:px-12 lg:px-24 xl:px-32 py-16">
      
     {/* LEFT SIDE - Text */}
        <div className="textContainer flex-1 lg:flex-[0.7] max-sm:mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Open to Work & Looking for Exciting Opportunities
        </h1>
        <div className="items flex flex-col gap-3 pt-5 text-gray-700 dark:text-gray-300">
            <div>
            <h2 className="text-2xl font-medium bg-gradient-to-r from-red-500 bg-clip-text text-transparent">Mail Me</h2>
            <p className="text-lg">github.rounak.19@gmail.com</p>
            </div>
            <div>
            <h2 className="text-2xl font-medium bg-gradient-to-r from-purple-500 bg-clip-text text-transparent">Address</h2>
            <p className="text-lg">Kolkata, West Bengal</p>
            </div>
        </div>
        </div>

      {/* RIGHT SIDE - Form */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="formContainer flex-[1.3] flex flex-col items-center justify-center"
      >
          {/* Heading */}
    <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Want to Send Me Some Good News? 🎉
        </h1>
        <p className="mt-2 text-gray-400">
        Fill out the form below and I’ll get back to you soon.
        </p>
    </div>
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl w-full 
                      bg-gradient-to-br from-purple-900/30 via-pink-800/20 to-red-900/30 backdrop-blur-md 
                     p-6 sm:p-8 rounded-2xl shadow-lg border-0 border-gray-300/40"
        >   
          <div>
            <p className="mb-2 text-sm font-medium">Name</p>
            <div className="flex gap-2 p-3 rounded-lg border border-purple-800/90">
              <img src={assets.person} alt="person" />
              <input type="text" placeholder="Enter your name"
                className="w-full text-sm outline-none bg-transparent placeholder:text-white/70"
                name="name" required />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">Email</p>
            <div className="flex gap-2 p-3 rounded-lg border border-purple-800/90">
              <img src={assets.email} alt="email" />
              <input type="email" placeholder="Enter your email"
                className="w-full text-sm outline-none bg-transparent placeholder:text-white/70"
                name="email" required />
            </div>
          </div>

          <div className="col-span-2">
            <p className="mb-2 text-sm font-medium">Message</p>
            <textarea rows={8} placeholder="Enter your message"
              className="w-full p-3 text-sm outline-none rounded-lg border border-pink-800/80  bg-transparent placeholder:text-white/60"
              name="message" required />
          </div>

          <div className="col-span-2 flex justify-center">
            <button
            type="submit"
            className="max-sm:w-full w-max flex items-center justify-center gap-2 
                        bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-800 
                        text-white font-medium text-md px-10 py-3 rounded-full 
                        cursor-pointer transform transition-all duration-300 
                        hover:scale-105 hover:shadow-lg hover:from-pink-900 hover:to-indigo-700"
            >
            Send
            <img
                src={assets.arrow}
                alt="submitArrow"
                className="w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default Contact
