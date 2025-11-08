import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import BookDetail from './components/BookDetail'
import { seedBooks } from './data/books'

export default function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  // (Optional) Simulate API fetch on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setBooks(seedBooks)
      setLoading(false)
    }, 500) // simulate network delay
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <header>
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <Link to="/"><h1 style={{margin:0, fontSize: '1.4rem'}}>📘 Book Explorer</h1></Link>
          <nav>
            <Link className="btn" to="/">Home</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home books={books} loading={loading} />} />
          <Route path="/book/:id" element={<BookDetail books={books} loading={loading} />} />
        </Routes>
      </main>
    </>
  )
}
