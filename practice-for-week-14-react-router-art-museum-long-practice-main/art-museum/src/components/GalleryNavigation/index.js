import React from 'react'
import {NavLink} from 'react-router-dom'

const GalleryNavigation = ({galleries}) => {
    
    const galleryList = galleries.map(gallery => {
    return(
        <NavLink
            to= {`/galleries/${gallery.id}`} 
        >
            {gallery.name}
        </NavLink>
    )

    } )

    
    
    return (
        <nav>
            <div> {galleryList}</div>
            <h1>Galleries</h1>
            <NavLink to="/"/>
        </nav>
    )
}

export default GalleryNavigation;