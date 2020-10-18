import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

import classes from '../config/classes';
import H2 from './H2';

const Contact = ({ contact }) => {
  return (
    <section className={`${classes.wrapper} text-gray-700 body-font relative`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <H2>Contact Us</H2>
          {contact.description && <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{contact.description}</p>}
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full text-center">
              <a
                className="text-white font-semibold text-medium uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blue-500 hover:bg-blue-600"
                href={contact.url}
                rel="noopener noreferrer"
                target="_blank">
                Contact
              </a>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200">
              {contact.email && (
                <div className="text-center">
                  <a className="text-indigo-500">{contact.email}</a>
                </div>
              )}
              <div className="flex justify-center">
                {contact.facebook && (
                  <a className="text-gray-500" href={contact.facebook} rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} size="1x" />
                  </a>
                )}
                {contact.twitter && (
                  <a className="ml-4 text-gray-500" href={contact.twitter} rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
