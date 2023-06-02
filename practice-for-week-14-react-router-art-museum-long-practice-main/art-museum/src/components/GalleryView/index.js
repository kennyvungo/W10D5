import { useParams } from "react-router-dom";

const GalleryView = ({galleries}) => {
    const {galleryId} = useParams()
    const gallery = galleries.find(ele => ele.galleryid === Number(galleryId))
    return (
        <h1>{gallery.name}</h1>
    )
}

export default GalleryView;