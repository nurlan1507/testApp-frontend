import ErrorStore from "../store/errorStore";


export async function parseToJson(res){
    try{
        const data = (await res.body.getReader().read()).value
        const str = String.fromCharCode.apply(String, data);
        return JSON.parse(str)
    }catch (e){
        console.log(e)
    }
}

export async function ApiErrorHandler(res){
    const resBody = await parseToJson(res)
    if(res.status ===400){
        ErrorStore.setErrors(resBody)
        return res.status
    }
    if(res.status === 500){
        console.log("internal server error")
        window.location.href="/serverIsDown"
        return
    }
    if(res.status === 404){
        window.location.href="/notFound"
        return
    }
    if(res.status === 200){
        window.location.href=`/editTest/${resBody.Id}`
        return resBody
    }
}
