import React, { useState } from 'react'
import { MdOutlineDelete } from "react-icons/md";
import Modal from './Modal';
import ModalRemove from './ModalRemove';
import {motion,AnimatePresence} from "framer-motion"
import { useFeedback } from '../context/FeedbackProvider';
import { FaEdit } from "react-icons/fa";
import ModalEdit from './ModalEdit';



const FeedbackListItem = ({ratings,id,title}) => {
 const [isRemove, setIsRemove] = useState(false)
 const [isEdit, setIsEdit] = useState(false)

 const {editFeedback} = useFeedback();

 


  return (
    <AnimatePresence>
    <motion.div
    key={id}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:1}}

    
    className='bg-jacaranda-200 flex items-center justify-center w-[50%] mx-auto p-10 rounded mt-10 relative text-gray-800'>
        <h1 className='text-xl'>{title}</h1>
        <span className='absolute top-[-2%] left-[-2%] bg-jacaranda-500 w-10 h-10 px-4 py-2 rounded-full'>{ratings}</span>

        <button 
         onClick={()=>setIsRemove(true)}
        className='absolute right-[-2%] top-[-2%] bg-jacaranda-500 w-10 h-10 px-3 py-3 rounded-full'>
        <MdOutlineDelete />

        </button>

        <button 
        onClick={()=>{
          setIsEdit(true)
          editFeedback(id,{title,ratings})
          
        }}
          
        className='absolute right-[5%] top-[-2%] bg-jacaranda-500 w-10 h-10 px-3 py-3 rounded-full'>
        <FaEdit />

        </button>

        
     
    </motion.div>

    {
      isRemove && (
        <Modal>
          <ModalRemove   onClose={()=>setIsRemove(false)} id={id}/>

           
      
             

        </Modal>
      )
    }

    {
      isEdit && (
        <Modal>
          <ModalEdit
          

          
          id = {id} onClose = {()=>setIsEdit(false)}
           title={title} ratings={ratings}
          />

        </Modal>
      )
    }
    
    </AnimatePresence>
  )
}

export default FeedbackListItem
