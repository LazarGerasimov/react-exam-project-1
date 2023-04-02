import { useEffect, useState } from "react"

import * as apiService from '../../../services/apiService';
import styles from './AllPhotos.module.css';
import { Link } from "react-router-dom";


export const AllPhotos = () => {

    const [photos, setPhotos] = useState([]);

    const testClick = () => {
        console.log(photos)
    }

    useEffect(() => {
        apiService.getAllPhotos()
            .then(data => {
                setPhotos(data);
            })
    }, []); // will be executed once upon component mounting

    return (
        <>
        <h1>All Photos</h1>
        <div className={styles["our_photos"]}>
            {photos.map((photo) => {
                return (
                    <div className={styles["photo_box"]} key={photo._id}>
                        <figure>
                            <img src={photo.imageUrl} alt={photo.title} />
                        </figure>
                        <h3><Link to={`/photos/${photo._id}`}>{photo.title}</Link></h3>
                        <h2>£{photo.price}</h2>
                        <p>{photo.description}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}