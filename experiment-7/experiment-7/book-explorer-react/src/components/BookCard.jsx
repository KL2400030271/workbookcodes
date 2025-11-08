import React from 'react'
import { Link } from 'react-router-dom'

export default function BookCard({ id, title, author }) {
  return (
    <article className="card">
      <h3 style={{marginTop:0}}>{title}</h3>
      <p className="muted">by {author}</p>
      <Link className="btn" to={`/book/${id}`}>View Details →</Link>
    </article>
  )
}
