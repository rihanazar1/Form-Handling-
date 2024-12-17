import React, { useState } from 'react'

const Card = () => {

  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [image, setImage] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    const newUser = [...allUsers,{name,position,image}]
    setAllUsers(newUser)
    setName('')
    setPosition('')
    setImage('')
  }

  const deleteHandler = (i)=>{
    
    const copyElem = [...allUsers]
    copyElem.splice(i,1)
    setAllUsers(copyElem)
  }


  return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-5'>
      <div className='bg-zinc-300 w-80 h-80 flex items-center justify-center flex-col border-2 border-zinc-500  rounded-xl shadow-lg shadow-black'>
      
      <form className=' flex items-center flex-col'
      onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        value={name}
        onChange={(e)=>
          setName(e.target.value)
        }
        className='border-black border-2 rounded m-5 px-4 py-2'
        type="text"
        placeholder='Enter your name' />

        <input 
        value={position}
        onChange={(e)=>
          setPosition(e.target.value)
        }
        className='border-black border-2 rounded m-5 px-4 py-2'
        type="text"
        placeholder='Enter your Profile' />

        <input 
        value={image}
        onChange={(e)=>
          setImage(e.target.value)
        }
        className='border-black border-2 rounded m-5 px-4 py-2'
        type="text"
        placeholder='Enter Image URL' />

        <button className='px-4 py-2 bg-black text-white rounded'>Submit</button>
      </form>
    </div>
    <div className=' w-full flex items-center'>
          {allUsers.map(function(elem,idx){
            return (
              <div key={idx} className='bg-white flex flex-col items-center justify-center gap-2 h-[300px] w-[200px] ml-10 rounded-md border-2 border-gray-900 shadow-gray-400 shadow-xl'>
                <img className='h-32 w-32 object-cover rounded-full' src={elem.image} alt="" />
                <h1 className='font-bold text-2xl'>{elem.name}</h1>
                <p className='text-xl'>{elem.position}</p>
                <button onClick={()=>{
                  deleteHandler(idx)
                }} className='bg-red-600 px-4 py-2 mt-1 text-white font-semibold rounded'>Delete</button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Card 