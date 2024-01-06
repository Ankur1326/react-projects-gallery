import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Ankur1326')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-auto bg-gray-600 text-white p-4 text-3xl w-2/3'>Github followers :{data.followers}
        <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ankur1326')
    return response.json()
} 