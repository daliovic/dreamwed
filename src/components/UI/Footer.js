import React from 'react';
import { motion } from "framer-motion/dist/framer-motion"

function Footer(props) {
  return (
    <motion.footer layout className="footer mt-auto py-3 bg-light">
      <div className="container d-flex justify-content-center">
        <span className=''>Making something great...</span>
      </div>
    </motion.footer>
  );
}

export default Footer;