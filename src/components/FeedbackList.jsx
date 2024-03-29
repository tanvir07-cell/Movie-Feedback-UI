import { useFeedback } from "../context/FeedbackProvider.jsx"
import FeedbackListItem from "./FeedbackListItem.jsx"
const FeedbackList = () => {
  const {feedbacks} = useFeedback();
  

  return (
    <div>
      {
        feedbacks.map((feedback)=>{
          return (
            <FeedbackListItem {...feedback} key={feedback.id}
            />
          )
        })
      }
      
    </div>
  )
}

export default FeedbackList
