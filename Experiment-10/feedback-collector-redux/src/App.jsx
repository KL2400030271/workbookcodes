import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeedback } from './feedbackSlice'

export default function App() {
  const dispatch = useDispatch()
  const feedbackList = useSelector(state => state.feedback.entries)

  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!rating) {
      setError('Please select a rating before submitting.')
      return
    }
    dispatch(addFeedback({ id: Date.now(), rating, comment }))
    setRating('')
    setComment('')
    setError('')
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-2xl font-semibold mb-4 text-blue-700">Feedback Collector</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <label className="block mb-3 font-medium">Rate the session (1–5)</label>
        <div className="flex gap-3 mb-4">
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="flex items-center gap-1">
              <input
                type="radio"
                name="rating"
                value={n}
                checked={rating === String(n)}
                onChange={(e) => setRating(e.target.value)}
                className="accent-blue-600"
              />
              {n}
            </label>
          ))}
        </div>

        <label className="block mb-2 font-medium">Comments (optional)</label>
        <textarea
          className="w-full border rounded-lg p-2 mb-3 focus:outline-blue-500"
          rows="3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your feedback..."
        />

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full"
        >
          Submit Feedback
        </button>
      </form>

      <div className="mt-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-3">Submitted Feedback</h2>
        {feedbackList.length === 0 ? (
          <p className="text-gray-500">No feedback yet.</p>
        ) : (
          <ul className="space-y-3">
            {feedbackList.map((fb) => (
              <li key={fb.id} className="bg-white p-4 shadow-sm rounded-xl border border-gray-200">
                <p className="font-semibold text-blue-700">Rating: {fb.rating}</p>
                {fb.comment && <p className="text-gray-700 mt-1">{fb.comment}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
