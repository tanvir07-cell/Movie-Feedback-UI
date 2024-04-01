import React from 'react'
import { useFeedback } from '../context/FeedbackProvider';
import { motion, AnimatePresence } from "framer-motion"

const ModalRemove = ({ onClose, id }) => {
  const { deleteFeedback } = useFeedback();
  return (
    <AnimatePresence>
      {/* first div is the opacity and blur the whole ui when click */}
      <div className="bg-black opacity-50 z-10 absolute top-0 left-0 h-[100%] w-[100%] "></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}
        key={id}
        className='bg-white p-10 rounded z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      >
        <h1>Are you sure you want to delete this feedback?</h1>
        <div className='flex items-center justify-center'>

          <button
            onClick={() => deleteFeedback(id)}
            className='bg-jacaranda-500 px-4 py-2 rounded mt-4'>Delete</button>
          <motion.button



            onClick={onClose}
            className='bg-jacaranda-500 px-4 py-2 rounded mt-4 ml-4'>Cancel</motion.button>
        </div>

      </motion.div>

    </AnimatePresence>
  )
}

export default ModalRemove
