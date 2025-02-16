import React, {useRef, useState} from 'react'
import { useCreateCarMutation, useDeleteCarMutation, useGetCarQuery, useUpdateCarMutation } from '../../redux/api/car.api'

const Create = () => {
  const {data, isLoading} = useGetCarQuery() // return {}
  const [createCar, {isLoading: isCreateLoading}] = useCreateCarMutation() // return [func, {}]
  const [deleteCar] = useDeleteCarMutation() // return [func, {}]
  const [updateCar, {error}] = useUpdateCarMutation()
  const [edit, setEdit] = useState(null)


  const title = useRef(null)
  const desc = useRef(null)
  const year = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    let car = {
      title: title.current.value,
      desc: desc.current.value,
      year: year.current.value,
    }
    if(edit) {
      updateCar({id:edit.id, body:car })
        .unwrap()
        .then(()=>{
          [title,desc,year].forEach(item=> {
            item.current.value = ""
          })
          setEdit(null)
        })
    }else{
      createCar(car)
        .unwrap()
        .then(()=> {
          title.current.value = ""
          desc.current.value = ""
          year.current.value = ""
        })
    }
  }
  const handleDeleteCar = id => {
    deleteCar(id)
  }
  const handleEdit = car => {
    setEdit(car)
    title.current.value = car.title
    desc.current.value = car.desc
    year.current.value = car.year
  }
  return (
    <div className='flex flex-col gap-8'>
      <div className='container mx-auto mb-6 flex flex-col'>
        <form onSubmit={handleSubmit} className='flex gap-3' action="">
          <input required ref={title} className='border p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='Title'/>
          <input required ref={desc} className='border p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='Description'/>
          <input required ref={year} className='border p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='Year'/>
          <button disabled={isCreateLoading} type='submit' className='bg-blue-500 px-2 rounded-sm text-white cursor-pointer disabled:cursor-default disabled:opacity-50 '>{isCreateLoading ? "Loading": edit ? "Save" : "Create" }</button>
        </form>
      </div>
      {
        isLoading && <div className='text-center text-3xl'>Loading...</div>
      }
      <div className='container mx-auto grid grid-cols-4 gap-4 min-h-screen items-start content-start'>
        {
          data?.map(car => (
            <div className='rounded-sm ' key={car.id}>
                          <div className="flex w-full h-full">
                            <img className='h-[180px]' src="https://am-s3-bucket-assets.s3.eu-west-2.amazonaws.com/silverstone/prod/lot_images/xlarge/REC14375-2/REC14375-2_1.jpg.webp" alt="" />
                          </div>
                          <div className="flex flex-col gap-2 p-2 rounded-sm">
                            <h2 className='text-xl font-bold  border-gray-200'>{car.title}</h2>
                            <p className='text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.{car.desc}</p>
                            <p className='text-slate-500 border-b '>Year: {car.year}</p>
                            <div className="flex justify-between mt-3 items-center">
                              <button onClick={() => handleDeleteCar(car.id)} className='bg-red-500 text-white text-sm py-1 px-2 rounded-sm cursor-pointer'>Delete</button>
                              <button onClick={() => handleEdit(car)} className='bg-green-400 py-1 px-2 rounded-sm text-white'>edit</button>
                            </div>
                          </div>
                        </div>
          ))
        }
      </div>
      </div>
      
)
}
export default Create