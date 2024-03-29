import React, { useState } from 'react'
import { MdOutlineDelete } from "react-icons/md";
import Modal from './Modal';
import ModalRemove from './ModalRemove';


const FeedbackListItem = ({ratings,id,title}) => {
 const [isRemove, setIsRemove] = useState(false)

 


  return (
    <>
    <div className='bg-jacaranda-200 flex items-center justify-center w-[50%] mx-auto p-10 rounded mt-10 relative text-gray-800'>
        <h1 className='text-xl'>{title}</h1>
        <span className='absolute top-[-2%] left-[-2%] bg-jacaranda-500 w-10 h-10 px-4 py-2 rounded-full'>{ratings}</span>

        <button 
         onClick={()=>setIsRemove(true)}
        className='absolute right-[-2%] top-[-2%] bg-jacaranda-500 w-10 h-10 px-3 py-3 rounded-full'>
        <MdOutlineDelete />

        </button>

        
     
    </div>

    {
      isRemove && (
        <Modal>
          <ModalRemove  onClose={()=>setIsRemove(false)} id={id}/>

           
      
             

        </Modal>
      )
    }
    
    </>
  )
}

export default FeedbackListItem
