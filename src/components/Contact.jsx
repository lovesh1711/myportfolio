import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faLinkedin , faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  const iconSize = 30; // Adjust the size as per your preference

  return (
    <div>
      <a href="https://www.instagram.com/lovesh_1711/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: iconSize, marginRight: '10px' }} />
      </a>
      <a href="https://www.linkedin.com/in/lovesh-goyal-119033219/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: iconSize, marginRight: '10px' }} />
      </a>
      <a href="https://github.com/lovesh1711" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: iconSize, marginRight: '10px' }} />
      </a>
      <a href="https://twitter.com/lovesh_1711" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} style={{ fontSize: iconSize }} />
      </a>
    </div>
  );
}




const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
// template_nrtz96g
// service_jc6tqx8
// bF24hRbR97n45vMax
    emailjs
      .send(
        'service_jc6tqx8',
        'template_nrtz96g',
        {
          from_name: form.name,
          to_name: "Lovesh Goyal",
          from_email: form.email,
          to_email: "lgoyalper2000@gmail.com",
          message: form.message,
        },
        'bF24hRbR97n45vMax'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <SocialIcons />
        
       


        <h3 className={styles.sectionHeadText}>Contact.</h3>



        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");



