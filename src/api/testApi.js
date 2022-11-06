   
import {parseToJson, ApiErrorHandler} from "../Helpers/helpers";

export const CreateTest =async(title,description,group,startDate,authorId)=>{
   var body ={
      title,
      description,
      group,
      startDate: Date.parse(startDate),
      authorId
   }
   console.log(body)
    const res = await fetch("http://localhost:4000/createTest",{
       method:"POST",
       headers:{
          accessToken:"bearer "+window.localStorage.getItem("accessToken"),
       },
       body:JSON.stringify(body),
   })
   console.log(res)
   let  f=  await ApiErrorHandler(res)
   return f
}


