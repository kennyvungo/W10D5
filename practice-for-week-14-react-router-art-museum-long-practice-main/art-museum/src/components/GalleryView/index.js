import { useParams } from "react-router-dom";

const GalleryView = ({galleries}) => {
    const {galleryId} = useParams()
    const gallery = galleries.find(ele => ele.galleryid === Number(galleryId))
    console.log(gallery);
    // console.log(galleries);
    return (
        <h1>Gallery Name</h1>
    )
}

export default GalleryView;