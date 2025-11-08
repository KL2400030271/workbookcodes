import React from 'react'
import BookCard from '../components/BookCard'

export default function Home({ books, loading }) {
  if (loading) {
    return (
      <div className="grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="card" key={i}><div className="skeleton"/></div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2 style={{marginBottom:'1rem'}}>Browse Books</h2>
      <div className="grid">
        {books.map((b) => (
          <BookCard
            key={b.id}
            id={b.id}
            title={b.title}
            author={b.author}
          />
        ))}
      </div>
    </div>
  )
}
