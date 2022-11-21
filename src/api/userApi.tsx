import {parseToJson} from "../Helpers/helpers";
import RootStore from "../store/rootStore"
import {IUser} from '../store/userStore'

export const signInApi =async(email:string ,password:string)=>{
    const body = {
        email,
        password
    }
    const res = await fetch("http://localhost:4000/signIn", {
        method:"POST",
        mode:"cors",
        body: JSON.stringify(body)
    })
    if (!res.ok){
      if(res.status===500){
          window.location.href="/serverError"
          return
      }
      if (res.status===400){
          let errors = await parseToJson(res)
          console.log(errors)
          RootStore.errorStore.setErrors(errors)
          return
      }
      RootStore.errorStore.errors.set("fetchError", "Some error occured, please try againg later")
      return
    }
    if (res.status===200){
        return await parseToJson(res)
    }
}

export const singUpApi=async(email:string , username:string ,password:string , repeatPassword:string ,groupId:number|null )=>{
    console.log(email,username,password)
    var body ={
        username,
        email,
        password,
        repeatPassword,
        groupId
    }
      const res = await fetch("http://localhost:4000/signUp",{
          method:"POST",
          body:JSON.stringify(body)
      })
      console.log(res)
      if (!res.ok){
        if(res.status===500){
          window.location.href="/serverError"
          return
        }
        if (res.status===400){
          let errors = await parseToJson(res)
          console.log(errors)
          RootStore.errorStore.setErrors(errors)
          console.log(  RootStore.errorStore)
          return
        }
        RootStore.errorStore.errors.set("fetchError", "Some error occured, please try againg later")
          return
        }
      return await parseToJson(res)
}

// export const RefreshAccessToken =async()=>{
//     const res = await fetch("http://localhost:4000/getNewAccessToken")
//     if (res.status !== 200){
//         // window.location.href='/signUp'
//         return
//     }
//     return await parseToJson(res)
// }
