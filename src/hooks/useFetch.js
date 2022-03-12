import { useState, useEffect } from 'react'

//Custom hook for fetch
function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchUrl() {
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  return [data, loading]
}

export { useFetch }
