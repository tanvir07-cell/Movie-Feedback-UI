import React from 'react'

const useFetchFeedback = async () => {

    const data = await fetch(`http://localhost:8000/feedbacks`)

    if (!data.ok) {
        throw new Error("Something went wrong")
    }

    return data.json()


}

export default useFetchFeedback