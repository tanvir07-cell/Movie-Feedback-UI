import React, { useState } from 'react'
import { useFeedback } from '../context/FeedbackProvider';


const Feedbackstats = () => {
  const { data: feedbacks, isPending } = useFeedback();

  if (isPending) {
    return <h1
      className="bg-jacaranda-700 text-center text-2xl text-jacaranda-500 font-bold mt-10"

    >Loading...🔃🔃</h1>
  }

  let average = feedbacks.reduce((acc, cur) => {
    return acc + cur.ratings
  }, 0) / feedbacks.length;

  console.log(average)









  return (
    <div className='w-[50%] mx-auto flex items-center justify-between'>
      <span>{feedbacks.length} reviews</span>
      <span>Average : {isNaN(average) ? 0 : average.toFixed(2)}</span>



    </div>
  )
}

export default Feedbackstats
