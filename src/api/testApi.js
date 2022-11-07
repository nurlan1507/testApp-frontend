   
import {parseToJson, ApiErrorHandler} from "../Helpers/helpers";

export const CreateTest =async(title,description,group,startDate,authorId)=>{
   console.log(title,description,group,startDate)
   var body ={
      title,
      description,
      group,
      startAt: Date.parse(startDate),
      authorId
   }

   console.log(body)
    const res = await fetch("http://localhost:4000/createTest",{
       method:"POST",
       mode:"cors",
       body:JSON.stringify(body),
   })
   let  f=  await ApiErrorHandler(res)
   return f
}


