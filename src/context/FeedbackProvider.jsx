import React, { createContext, useContext, useState } from 'react'
import data from '../data/data'

const FeedbackContext = createContext(
    {
        feedbacks:[],
        deleteFeedback:()=>{}
    }
)



const FeedbackProvider = ({children}) => {
      const [feedbacks, setFeedbacks] = useState(data)
      const deleteFeedback = (id)=>{
        const newFeedbacks = feedbacks.filter((feedback)=>feedback.id !== id)
        setFeedbacks(newFeedbacks)
      }


  return (
    <FeedbackContext.Provider value = {{feedbacks,deleteFeedback}}>
      {children}
    </FeedbackContext.Provider>
  )
}

export const useFeedback = ()=> useContext(FeedbackContext)

export default FeedbackProvider
