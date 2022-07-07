import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';



const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};



const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <motion.div whileTap={{scale: 1.7}} whileHover={{ scale: 1.4, rotate: 20 }}>
            <div>
              <span
                style={{
                  cursor: "grab",
                }}
              >
                👋
              </span>
            </div>
          </motion.div>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Adriel</h1>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 20 }}
          whileTap={{
            scale: 0.9,
            rotate: 70,
            borderRadius: "100%",
          }}
        >
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </motion.div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
   drag
   dragElastic
   dragConstraints={{ left: 20 , top: 10 , bottom: 10 , right: 9 }}
    whileHover={{rotate: 180 }}
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          
            <img src={circle} alt="profile_bg" />
      
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
