import { useFeedback } from "../context/FeedbackProvider.jsx"
import FeedbackListItem from "./FeedbackListItem.jsx"


const FeedbackList = () => {
  const { data: feedbacks, isPending, isFetching, error, isError } = useFeedback();

  if (isPending) return <h1
    className="bg-jacaranda-700 text-center text-2xl text-jacaranda-500 font-bold mt-10"

  >Loading...🔃🔃</h1>

  if (isFetching) return <h1
    className="bg-jacaranda-700 text-center text-2xl text-jacaranda-500 font-bold mt-10"

  >Fetching...🔃🔃</h1>

  if (isError) {
    return <h1
      className="bg-jacaranda-700 text-center text-2xl text-jacaranda-500 font-bold mt-10">{error.message}</h1>

  }







  return (
    <div>
      {
        feedbacks.map((feedback) => {
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
