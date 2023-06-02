import React from 'react'
import {NavLink} from 'react-router-dom'
import './galleryNavigation.css'

const GalleryNavigation = ({galleries}) => {
    
    const galleryList = galleries.map(gallery => {
    return(
        <NavLink key={gallery.id}
            to={`/galleries/${gallery.galleryid}`} 
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