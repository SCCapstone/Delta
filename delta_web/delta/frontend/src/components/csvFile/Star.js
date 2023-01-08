import React from 'react';

import styles from "./cssFile.module.css";

const Star = (props) => {

    const changeRating = (e) => {
        props.changeRatingIndex(e.target.value);
    }

    return (
        <label className={styles.star}>
            <input
                type="radio"
                name="rating"
                id={props.grade}
                value={props.index}
                className={styles.stars_radio_input}
                onClick={changeRating}
            />
            <svg 
                width="58" 
                height="58" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#393939" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={props.style}
            >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        </label>
    );
}

export default Star;