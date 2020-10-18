import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

import classes from '../config/classes';

const Footer = ({ name, contact }) => {
  return (
    <footer className="text-gray-700 body-font">
      <div className="bg-gray-200">
        <div className={`${classes.wrapper} py-4 px-5 flex flex-wrap flex-col sm:flex-row`}>
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {name}
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
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
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
