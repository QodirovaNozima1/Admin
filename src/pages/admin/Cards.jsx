import React, { useRef, useState } from 'react'
import { useCreateCarMutation, useDeleteCarMutation, useGetCarQuery, useUpdateCarMutation } from '../../redux/api/car.api'
import { FaCircle } from "react-icons/fa";
const Cards = () => {
  const { data } = useGetCarQuery() // return {}
  const [createCar, { isLoading: isCreateLoading, isSuccess, isError }] = useCreateCarMutation() // return [func, {}]
  const [deleteCar] = useDeleteCarMutation() // return [func, {}]
  const [updateCar, { error }] = useUpdateCarMutation()
  const [edit, setEdit] = useState(null)


  const title = useRef(null)
  const desc = useRef(null)
  const year = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    let car = {
      img: img.current.value,
      title: title.current.value,
      desc: desc.current.value,
      year: year.current.value

    }
  }
  const handleDeleteCar = id => {
    deleteCar(id)
  }
  const handleEdit = car => {
    setEdit(car)
    title.current.value = car.title,
      desc.current.value = car.desc,
      year.current.value = car.year
  }
  return (
  <>
    <h2>CARDS</h2>
    <div className='container mx-auto grid grid-cols-4 gap-4 min-h-screen items-start content-start'>
        {
          data?.map(car => (
            <div className='rounded-sm ' key={car.id}>
              <div className="flex w-full h-full">
                <img className='h-[180px]' src={car.img} alt="" />
              </div>
              <div className="flex flex-col gap-2 p-2 rounded-sm">
                <h2 className='text-xl font-bold  border-gray-200'>{car.title}</h2>
                <p className='text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.{car.desc}</p>
                <p className='text-slate-500 border-b '>Year: {car.year}</p>
                <div className="flex gap-2">
                <p className="text-[#000000] rounded-full duration-75">
                    <FaCircle />
                  </p>
                  <p className="text-[#ebebeb] rounded-full duration-75">
                    <FaCircle />
                  </p>
                  <p className="text-[#112C68] rounded-full duration-75">
                    <FaCircle />
                  </p>
                  <p className="text-[#A5ADBA] rounded-full duration-75">
                    <FaCircle />
                  </p>
                  
                </div>
                <div className="flex justify-between mt-3 items-center">
                  <button onClick={() => handleDeleteCar(car.id)} className='bg-red-500 text-white text-sm py-1 px-2 rounded-sm cursor-pointer'>Delete</button>
                  <button onClick={() => handleEdit(car)} className='bg-green-400 py-1 px-2 rounded-sm text-white'>edit</button>
                </div>
              </div>
            </div>
            ))
        }
            </div>
      
  </>

)
}

export default Cards


