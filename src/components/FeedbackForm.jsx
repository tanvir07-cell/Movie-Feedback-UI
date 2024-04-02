import React, { useState, useEffect, memo } from 'react';
import { useFeedback } from '../context/FeedbackProvider';
import { motion } from 'framer-motion';


const FeedbackForm = () => {
    const [input, setInput] = useState("");
    const [rating, setRating] = useState("");

    const { feedbacks, addFeedback } = useFeedback();



    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
        const feedback = formdata.get('feedback');
        const ratings = formdata.get('rating');

        const newFeedback = { title: feedback, ratings: ratings.length }

        console.log(newFeedback)


        addFeedback(newFeedback);


        setInput(""); // Clear input after submission
        setRating(""); // Clear rating after submission

    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}

        >

            <form className="bg-jacaranda-800 bg-opacity-30 backdrop-blur-lg shadow-lg  rounded-lg mx-auto w-[50%] mt-10 mb-10  p-5" onSubmit={handleSubmit}>
                <div className='flex flex-col items-center justify-center'>
                    <label className='text-gray-900 text-xl' htmlFor='feedback'>Feedback</label>
                    <input type='text' id="feedback" name='feedback' value={input} onChange={(e) => setInput(e.target.value)}
                        placeholder='Enter your movie feedback here...'
                        className='w-[50%] bg-jacaranda-200 text-gray-700 px-4 py-2 rounded-md mt-4'
                    />
                    <label className='text-gray-900 mt-4 text-xl' htmlFor='rating'>Rate your experience</label>
                    <select
                        onChange={(e) => setRating(e.target.value)}
                        id="rating" name='rating' value={rating} className='w-[50%] bg-jacaranda-200 text-gray-700 px-4 py-2 rounded-md mt-4'>
                        <option></option>
                        <option>⭐</option>
                        <option>⭐⭐</option>
                        <option>⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐⭐</option>
                    </select>

                    <button type="submit"
                        className="bg-jacaranda-500 text-gray-700 px-4 py-2 rounded-md mt-4 mb-4 hover:bg-jacaranda-700 hover:text-gray-200"
                        disabled={!input || !rating} // Changed condition to || instead of &&
                    >Submit</button>

                </div>
            </form>
        </motion.div>
    )
}

export default FeedbackForm;
