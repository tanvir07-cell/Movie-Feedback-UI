import React, { createContext, useContext, useState } from 'react'
import data from '../data/data'

const FeedbackContext = createContext(
    {
        feedbacks:[],
        deleteFeedback:()=>{},
        addFeedback:()=>{}
    }
)



const FeedbackProvider = ({children}) => {
      const [feedbacks, setFeedbacks] = useState(data)
      console.log(feedbacks)
      const deleteFeedback = (id)=>{
        const newFeedbacks = feedbacks.filter((feedback)=>feedback.id !== id)
        setFeedbacks(newFeedbacks)
      }

      const addFeedback = (feedback)=>{
        setFeedbacks([feedback,...feedbacks])
      }

     


  return (
    <FeedbackContext.Provider value = {{feedbacks,deleteFeedback,addFeedback}}>
      {children}
    </FeedbackContext.Provider>
  )
}

export const useFeedback = ()=> useContext(FeedbackContext)

export default FeedbackProvider
