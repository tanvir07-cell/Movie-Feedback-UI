import React, { createContext, useContext, useState, useEffect, Suspense } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import useFetchFeedback from '../components/useFetchFeedback'

const FeedbackContext = createContext(
  {
    feedbacks: [],
    deleteFeedback: () => { },
    addFeedback: () => { },
    editFeedback: () => { },
  }
)

const createFeedback = async (feedback) => {
  const response = await fetch(`http://localhost:8000/feedbacks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(feedback)
  })

  if (!response.ok) {
    throw new Error("Something went wrong")
  }

  return response.json()
}

const updateFeedback = async (feedback) => {
  const response = await fetch(`http://localhost:8000/feedbacks/${feedback.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(feedback)
  })

  if (!response.ok) {
    throw new Error("Something went wrong")
  }

  return response.json()

}

const removeFeedback = async ({ id }) => {
  const response = await fetch(`http://localhost:8000/feedbacks/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    throw new Error("Something went wrong")
  }

  return response.json()

}



const FeedbackProvider = ({ children }) => {
  const { data, isError, isPending, isLoading, error, isFetching } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: useFetchFeedback
  })

  const queryClient = useQueryClient();

  const { mutate: create } = useMutation({
    mutationFn: createFeedback,
    onSuccess: (data) => {
      queryClient.setQueryData(["feedbacks"], (oldData) => {
        return [data, ...oldData]

      })
    }
  })


  const { mutate: update } = useMutation({
    mutationFn: updateFeedback,
    onSuccess: (data) => {
      queryClient.setQueryData(["feedbacks"], (oldData) => {
        return oldData.map((feedback) => {
          return feedback.id === data.id ? data : feedback
        })
      })
    }

  })

  const { mutate: deleteMutateFeedback } = useMutation({
    mutationFn: removeFeedback,

    // Optimistic update the query data after successfully deleted
    onSuccess: (data) => {
      queryClient.setQueryData(["feedbacks"], (oldData) => {
        return oldData.filter((feedback) => feedback.id !== data.id)
      })
    }
  })














  const deleteFeedback = (id) => {
    deleteMutateFeedback({ id })
  }

  const addFeedback = (feedback) => {
    create(feedback)
  }

  const editFeedback = (editedFeedback) => {
    update(editedFeedback)
  }






  return (
    <FeedbackContext.Provider value={{ deleteFeedback, addFeedback, editFeedback, data, isError, isPending, isLoading, error, isFetching }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export const useFeedback = () => useContext(FeedbackContext)

export default FeedbackProvider
