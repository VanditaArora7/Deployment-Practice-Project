// 'use client'

// import { MyContext } from '@/ContextAPI/Context'
// import { useContext } from 'react'

// const page = () => {
//   const user = useContext(MyContext)
//   return <div className="bg-pink-300">{user}</div>
// }
// export default page
'use client'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const page = () => {
  const notify = () => {
    toast('Login Successfull')
  }
  return (
    <div>
      <button
        onClick={notify}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Login
      </button>
      <ToastContainer />
    </div>
  )
}
export default page
