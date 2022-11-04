import {parseToJson} from "../Helpers/helpers";
import ErrorStore from "../store/errorStore"
export const signIn =async(email,password)=>{
    const body = {
        email,
        password
    }
    const res = await fetch("http://localhost:4000/signIn", {
        method:"POST",
        mode:"cors",
        body: JSON.stringify(body)
    })
    if (res.status===400){
        let errors = await parseToJson(res)
        ErrorStore.setErrors(errors)
        return errors
    }else if(res.status===500){
        console.log(500)
    }else if (res.status===200){
        var data = await parseToJson(res)
        console.log(data)
        window.localStorage.setItem("accessToken", data.AccessToken)
    }
}

export const signUp =async()=>{

}

export const RefreshAccessToken =async()=>{

}