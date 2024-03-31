import React, { useState } from 'react';
import { useFeedback } from '../context/FeedbackProvider';
import { motion,AnimatePresence } from 'framer-motion';


const ModalEdit = ({id,onClose,title,ratings}) => {
    const [input, setInput] = useState(title);
    const [rating, setRating] = useState(ratings);
    

    const { editFeedback  } = useFeedback();



    if(rating === 1){
        setRating("⭐")
    }

    if(rating === 2){
                setRating("⭐⭐")

    }

    if(rating === 3){
        setRating("⭐⭐⭐")
    }
    if(rating === 4){
        setRating("⭐⭐⭐⭐")
    }

    if(rating === 5){
        setRating("⭐⭐⭐⭐⭐")
    }





    const handleSubmit = (e) => {
        e.preventDefault();

        const updateFormData = new FormData(e.target);
        const feedback = updateFormData.get('feedback');
        const ratings = updateFormData.get('rating');
        const updatedFeedback = { id: id, title: feedback, ratings:ratings.length }

        editFeedback(updatedFeedback)

        onClose();



        

        



        setInput(""); // Clear input after submission
        setRating(""); // Clear rating after submission

    }

    return (
        <AnimatePresence>
                    <div className="bg-black opacity-50 z-10 absolute top-0 left-0 h-[100%] w-[100%]"></div>


        <motion.div
           key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
                           className='bg-white p-10 rounded z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'

        
        >

            <form  className="bg-jacaranda-400 mx-auto w-[100%] mt-10 mb-10 rounded-md p-5" onSubmit={handleSubmit}>
                <div >
                    <label className='text-gray-700' htmlFor='feedback'>Feedback</label>
                    <input type='text' id="feedback" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    
                    name='feedback' 
                        placeholder='Enter your movie feedback here...'
                        className='w-[100%] bg-jacaranda-200 text-gray-700 px-4 py-2 rounded-md mt-4'
                    />
                    <label className='text-gray-700 mt-4' htmlFor='rating'>Rate your experience</label>
                    <select
                        
                        id="rating" name='rating'
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className='w-[100%] bg-jacaranda-200 text-gray-700 px-4 py-2 rounded-md mt-4'>
                        <option></option>
                        <option>⭐</option>
                        <option>⭐⭐</option>
                        <option>⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐⭐</option>
                    </select>

                    <button type="submit"
                        className="bg-jacaranda-500 text-gray-700 px-4 py-2 rounded-md mt-4 mb-4 hover:bg-jacaranda-700 hover:text-gray-200"
                    >Submit</button>

                     <button type="submit"
                       onClick={onClose}
                        className="bg-jacaranda-800 text-gray-700 px-4 py-2 rounded-md mt-4 mb-4 hover:bg-jacaranda-700 hover:text-gray-200"
                    >close</button>

                </div>
            </form>
        </motion.div>
        </AnimatePresence>
    )
}

export default ModalEdit;
