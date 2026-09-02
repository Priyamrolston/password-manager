import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])



  const showPassword = () => {
    passwordRef.current.type = "text"
    console.log(ref.current.src)
    if (ref.current.src.includes("/eyecross.png")) {
      ref.current.src = "/icons/eye.png"
      passwordRef.current.type = "password"
    }
    else {
      passwordRef.current.type = "text"
      ref.current.src = "/eyecross.png"
      
    }
  }
  const savePassword = () => {
    setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
    console.log(passwordArray)



  }

  const deletePassword = (id) => {
    console.log("Deleting password with id ", id)
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
  }

   const editPassword = (id) => {
    console.log("Editing password with id ", id)
    setform(passwordArray.filter(i=>i.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
  }



  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })

  }


  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">

        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      <div className=" p-2 md:p-0 mycontainer">
        <h1 className='text-4xl text font-bold text text-center'>
          <span className='text-green-700'> &lt;</span>

          <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
        <div className=" flex flex-col p-4 text-black gap-8 items-center">
          <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1'
            type="text" name="site" id="" />
          <div className="flex w-full justify-between gap-8">
            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1'
              type="text" name="username" id="" />
            <div className="relative">
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1'
                type="text" name="password" id="" />
              <span className='absolute right-0 top-1 cursor-pointer' onClick={showPassword}>
                <img ref={ref} className='p-1' width={26} src="/eye.png" alt="eye" />
              </span>
            </div>

          </div>
          <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-500 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover" >
            </lord-icon>
            Save Password</button>
        </div>

        <div className="passwords">
          <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
          {passwordArray.length === 0 && <div> No passwords to show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
            <thead className='bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>

                  <td className='py-2 border border-white text-centre w-32'><a href={item.site} target=" blank">{item.site}</a></td>
                  <td className='py-2 border border-white text-centre w-32'>{item.username}</td>
                  <td className='py-2 border border-white text-centre w-32'>{item.password}</td>


                  <td className='flex justify-center py-2 border border-white text-centre'>
                    <span className='cursor-pointer mx-1' onClick={()=>{editPassword(item.id)}}>
                      <img className="w-7 mx-2" src="/edit.png" alt="" />
                    
                       </span>
                       <span className='cursor-pointer mx-1' onClick={()=>{deletePassword(item.id)}}>
                      <img className="w-7 mx-2" src="/delete.png" alt="" />
                    
                       </span>

                    
                    
                    
                  
                  </td>
                </tr>


              })}


            </tbody>
          </table>}


        </div>
      </div>


    </>
  )
}

export default Manager