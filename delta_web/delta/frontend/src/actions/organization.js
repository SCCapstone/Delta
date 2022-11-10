import axios from 'axios';

export const getOrganizations = () =>{
    axios.get('/api/organization/')
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err)
    })
}
