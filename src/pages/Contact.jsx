import React from 'react'
import { useGetSingleBlogQuery } from '../redux/api/blog.api'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const {id} = useParams()
  const {data, isLoading, isError, error} = useGetSingleBlogQuery(id)
  return (
    <div>Contact
      
    </div>
  )
}

export default Contact