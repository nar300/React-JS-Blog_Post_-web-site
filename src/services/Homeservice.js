import Axios from "axios";

const url="http://localhost:53962/api/blgs/"

export  function createBlog(body){

    return Axios.post(url,body)
}

export  function getAllBlog(){
    return Axios.get(url)
}

export function deleteBlog(id){
    return Axios.delete(url+id)

}

export function updategetbyid(id){
    return Axios.getbyid(url+id)
}

export function update(id,body){
    return Axios.put(url+id,body)
}