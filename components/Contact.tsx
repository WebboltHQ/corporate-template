import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import classes from '../config/classes';
import H2 from './H2';

const Contact = ({ contact }) => {
  return (
    <section className={`${classes.wrapper} text-gray-700 body-font relative`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <H2>Contact Us</H2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full text-center">
              <a
                // className="uppercase mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg"
                className="text-white font-semibold text-medium uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blue-500 hover:bg-blue-600"
                href={contact.url}
                rel="noopener noreferrer"
                target="_blank">
                Contact
              </a>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">example@email.com</a>
              <div className="inline-flex">
                <a className="text-gray-500" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} size="1x" className="" />
                </a>
                <a className="ml-4 text-gray-500" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="1x" className="" />
                </a>
                <a className="ml-4 text-gray-500" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLink} size="1x" className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
