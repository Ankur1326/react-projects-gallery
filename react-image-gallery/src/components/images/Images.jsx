import axios from "axios";
import { useEffect, useState } from "react";
import Image from "../image/Image";

function Images() {
    const [imageList, setImageList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    
    let [offset, setOffset] = useState(0)

    const next = (offset) => {
        console.log("offset", offset);
        setOffset(offset = offset + 20)
        setImage_URL(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`)
    }

    const [image_URL, setImage_URL] = useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`)
    
    async function downloadImages() {
        const response = await axios.get(image_URL)
        const results = await response.data
        const imageResults = results.photos
        console.log(imageResults);
        
        const imagesData = imageResults.map((imageData) => {
            return {
                title: imageData.title,
                image: imageData.url,
                description: imageData.description,
                id: imageData.id,
            }
        })

        setImageList(imagesData)
        console.log("imageList", imageList);
        setIsLoading(false)
    }
    useEffect(() => {
        downloadImages()
    }, [offset])
    
    return (
        <div className="flex flex-wrap justify-center">
            {(isLoading) ? 'Loading....' :
                imageList.map((i) => <Image key={i.id} titel={i.title} image={i.image} description={i.description} id={i.id}/>)  
            }
            <button className="border rounded-md px-8 py-2 bg-[#333] hover:bg-[#222] text-white">Pre</button> 
            <button onClick={() =>{next(offset)}} className="border rounded-md px-8 py-2 bg-[#333] hover:bg-[#222] text-white ml-3">Next</button>
        </div>
    )
}

export default Images;