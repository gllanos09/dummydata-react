import { useState, useEffect } from 'react'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=30')
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener productos')
        return res.json()
      })
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { products, loading, error }
}