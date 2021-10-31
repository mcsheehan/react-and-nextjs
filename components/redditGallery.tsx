import React, {useState} from "react";

import styles from './redditgallery.module.css'
import {PostData} from "../src/redditInterface";

export interface RedditPostProps{
    allUrls: Array<PostData>
}

const RedditGallery = (props: RedditPostProps ) => {
    let key = 0

    const allImages = props.allUrls.map((postData) => {
        key += 1
        const clickHandler = () => {
            window.open(postData.url)
        }

        return (
            <a className={styles.hyper} href={postData.url}>
                <img className={styles.redditimage}
                     key={key}
                     src={postData.thumbnail}
                     height={postData.thumbnail_height + "px"} width={postData.thumbnail_width + "px"} alt={postData.title}
                />
            </a>)
    })

    return(
        <div className={styles.containercentre}>
            <div className={styles.redditgallery}>
                {allImages}
            </div>
        </div>
    )
}


export default RedditGallery
