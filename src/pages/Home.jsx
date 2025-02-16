import React, {useRef, useState} from 'react'
import { useCreateBlogMutation, useDeleteBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from '../redux/api/blog.api'

const Home = () => {
  const {data, isLoading} = useGetBlogsQuery() // return {}
  const [createBlog, {isLoading: isCreateLoading, isSuccess, isError}] = useCreateBlogMutation() // return [func, {}]
  const [deleteBlog] = useDeleteBlogMutation() // return [func, {}]
  const [updateBlog, {error}] = useUpdateBlogMutation()
  const [edit, setEdit] = useState(null)


  const title = useRef(null)
  const desc = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    let blog = {
      title: title.current.value,
      desc: desc.current.value,
    }
    if(edit) {
      updateBlog({id:edit.id, body:blog })
        .unwrap()
        .then(()=>{
          [title,desc].forEach(item=> {
            item.current.value = ""
          })
          setEdit(null)
        })
    }else{
      createBlog(blog)
        .unwrap()
        .then(()=> {
          title.current.value = ""
          desc.current.value = ""
        })
    }
  }
  const handleDeleteBlog = id => {
    deleteBlog(id)
  }
  const handleEdit = blog => {
    setEdit(blog)
    title.current.value = blog.title
    desc.current.value = blog.desc
  }
  return (
    <div>
      <h2>Home</h2>
      <div className='container mx-auto mb-6'>
        <form onSubmit={handleSubmit} className='flex gap-3' action="">
          <input required ref={title} className='border' type="text" placeholder='title'/>
          <input required ref={desc} className='border' type="text" placeholder='description'/>
          <button disabled={isCreateLoading} type='submit' className='bg-blue-500 px-4 text-white cursor-pointer disabled:cursor-default disabled:opacity-50 '>{isCreateLoading ? "Loading": edit ? "Save" : "Create" }</button>
        </form>
      </div>
      {
        isLoading && <div className='text-center text-3xl'>Loading...</div>
      }
      <div className='container mx-auto grid grid-cols-5 gap-4 min-h-screen items-start content-start'>
        {
          data?.map(blog => (
            <div className='shadow p-4 rounded' key={blog.id}>
              <h3 className='text-xl font-bold pb-3 mb-3 border-b border-gray-200'>{blog.title}</h3>
              <p >{blog.desc}</p>
              <button onClick={()=> handleDeleteBlog(blog.id)} className='bg-red-500 text-white text-sm px-3 cursor-pointer'>Delete</button>
              <button onClick={()=> handleEdit(blog)} className='bg-green-400'>edit</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home


// BOOK - CRD
// 
// title
// desc
// author
// type
// soldCount