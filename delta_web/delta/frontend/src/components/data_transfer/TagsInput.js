// with help from https://dev.to/0shuvo0/lets_create_an_add_tags_input_with_react_js_d29
import { useEffect, useState } from "react";
import styles from "./tags.module.css";

// src/components/TagsInput.js
function TagsInput(props){
    const [tags, setTags] = useState([])

    // if have prior tags, set them
    useEffect(()=>{
        if(props.priorTags){
            setTags(props.priorTags)
        }
    },[])

    function handleKeyDown(e){
        if(e.key !== 'Enter' || e.which == 32) return
        const value = e.target.value
        // no duplicates
        if(tags.includes(value.trim())) return;
        if(!value.trim()) return;
        setTags([...tags, value])
        e.target.value = ''
        if(props.updateParentTags){
            props.updateParentTags([...tags,value]);
        }
    }

    function removeTag(index){
        const newTags = tags.filter((el, i) => i !== index);
        setTags(newTags)
        if(props.updateParentTags){
            props.updateParentTags(newTags);
        }
    }

    return (
        <div className={styles.tags_input_container}>
            { tags.map((tag, index) => (
                <div className={styles.tag_item} key={index}>
                    <span className={styles.text}>{tag}</span>
                    <span className={styles.close} onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input  
                onKeyDown={handleKeyDown} 
                type="text" 
                className={styles.tags_input} 
                placeholder="Type something" 
            />
        </div>
    )
}

export default TagsInput
