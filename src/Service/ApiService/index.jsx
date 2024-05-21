import instance from "../Instance";

const backendUrl = 'http://182.75.105.186:3071';


const post = (path,data)=>{
    return (instance.post(`${backendUrl}/${path}`,data).then((res)=>{
        return(res.data)
    })).catch((error)=>{
        return(error)
    })
}
const put = (path,data)=>{
    return (instance.put(`${backendUrl}/${path}`,data).then((res)=>{
        return(res.data)
    })).catch((error)=>{
        return(error)
    })
}
const patch = (path,data)=>{
    return (instance.patch(`${backendUrl}/${path}`,data).then((res)=>{
        return(res.data)
    })).catch((error)=>{
        return(error)
    })
}
const get = (path)=>{
    return (instance.get(`${backendUrl}/${path}`).then((res)=>{
        return(res.data)
    })).catch((error)=>{
        return(error)
    })
}
const Delete = (path,data1)=>{
    return (instance.delete(`${backendUrl}/${path}`,{data:data1}).then((res)=>{
        return(res.data)
    })).catch((error)=>{
        return(error)
    })
}
export{post,get,put,Delete,patch};