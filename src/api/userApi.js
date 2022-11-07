import {parseToJson} from "../Helpers/helpers";
import ErrorStore from "../store/errorStore"

export const signInApi =async(email,password)=>{
    const body = {
        email,
        password
    }
    const res = await fetch("http://localhost:4000/signIn", {
        method:"POST",
        mode:"cors",
        body: JSON.stringify(body)
    })

    console.log(res)
    if (res.status===400){
        let errors = await parseToJson(res)
        ErrorStore.setErrors(errors)
        return res.status
    }else if(res.status===500){
        console.log(500)
    }else if (res.status===200){
        return await parseToJson(res)
    }
}

export const singUpApi=async(email, username,password, repeatPassword)=>{
    console.log(email,username,password)
    var body ={
        username,
        email,
        password,
        repeatPassword,
    }
    try{
        const res = await fetch("http://localhost:4000/signUp",{
            method:"POST",
            withCredentials:true,
            body:JSON.stringify(body)
        })
        if (res.status===400){
            let errors =await parseToJson(res)
            ErrorStore.setErrors(errors)
            return
        }else if(res.status === 500){
            return
        }else if(res.status===200){
            window.location.href="/home"
            return {...await parseToJson(res)}
        }
    }catch (e){
        return e
    }



}
export const RefreshAccessToken =async()=>{
    const res = await fetch("http://localhost:4000/getNewAccessToken")
    console.log(res)
    console.log(await parseToJson(res))
    if (res.status !== 200){
        // window.location.href='/signUp'
        return
    }
    return await parseToJson(res)
}