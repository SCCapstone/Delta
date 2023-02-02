// with help from https://dev.to/0shuvo0/lets_create_an_add_tags_input_with_react_js_d29
import { useState } from "react";
import styles from "./tags.module.css";

// src/components/TagsInput.js
function TagsInput(){
    const [tags, setTags] = useState([])

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className={styles.tags_input_container}>
            { tags.map((tag, index) => (
                <div className={styles.tag_item} key={index}>
                    <span className={styles.text}>{tag}</span>
                    <span className={styles.close} onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className={styles.tags_input} placeholder="Type something" />
        </div>
    )
}

export default TagsInput
