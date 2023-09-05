import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Details() {
    const { id } = useParams();
    const [imageData, setImageData] = useState([])
    console.log({ id });

    async function downloadImages() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        const results = await response.data
        const imageResults = results.photo
        console.log(imageResults);


        // const imagesInfo = (imageData) => {
            setImageData({
                image: imageResults.url,
                title: imageResults.title,
                description: imageResults.description       
            })
        // }
    }
    useEffect(() => {
        downloadImages()
    }, [])
    console.log("imageData", imageData);

    return (
        <div className="flex items-center justify-between w-[80%] m-auto mt-32 px-9 py-10 rounded-lg bg-slate-600 text-white ">
            <img src={imageData.image} alt="" className="w-1/3 rounded-lg border-4 border-slate-200" />
            <div className="w-[60%]">
                <div className="text-3xl mb-7 font-medium">{imageData.title}</div>
                <div>{imageData.description}</div>
            </div>
        </div>
    )
}

    export default Details;