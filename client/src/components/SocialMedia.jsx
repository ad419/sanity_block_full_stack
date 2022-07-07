import React from 'react';
import { BsTwitter, BsLinkedin, BsLink } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsLinkedin/>
    </div>
  </div>
);

export default SocialMedia;
