import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function BookDetail({ books, loading }) {
  const { id } = useParams()
  const book = books.find(b => String(b.id) === String(id))

  if (loading) {
    return <div className="card"><p>Loading details…</p></div>
  }

  if (!book) {
    return (
      <div className="card">
        <h3>Book not found</h3>
        <p className="muted">We couldn't find a book with ID <code>{id}</code>.</p>
        <Link className="btn" to="/">← Back to list</Link>
      </div>
    )
  }

  return (
    <article className="card">
      <Link className="btn" to="/">← Back</Link>
      <h2 style={{marginTop:'1rem'}}>{book.title}</h2>
      <p className="muted">by {book.author}</p>
      <p style={{lineHeight:1.6}}>{book.description}</p>
      <p className="rating">⭐ {book.rating} / 5</p>
    </article>
  )
}
