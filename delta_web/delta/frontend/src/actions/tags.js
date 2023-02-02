import axios from "axios";
import { tokenConfig } from "./auth";
import { createMessage } from "./messages";

export const addTag = (dictData) => (getState) =>{
    axios.post('/api/tags/',dictData,tokenConfig(getState))
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}