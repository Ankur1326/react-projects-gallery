import { Route, Routes } from 'react-router'
import ImagesGallery from '../ImagesGallery/ImagesGallery'
import Details from "../details/Details"

function CustomRoutes() {
    return (
        <Routes>
            <Route path='/' element={<ImagesGallery />}></Route>
            <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
    )
}
export default CustomRoutes;