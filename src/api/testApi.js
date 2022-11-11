   
import {parseToJson, ApiErrorHandler} from "../Helpers/helpers";
import ErrorStore from "../store/errorStore";

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
   const resBody = await parseToJson(res)
   if(res.status ===400){
      ErrorStore.setErrors(res)
      return res
   }
   if(res.status === 500){
      console.log("internal server error")
      window.location.href="/serverIsDown"
      return res
   }
   if(res.status === 404){
      window.location.href="/notFound"
      return res
   }
   if (resBody.status ===200){
      window.location.href=`/editTest?testId=${resBody.Id}`
   }
   return resBody
}

export const saveTestQuestions=async(questions,id)=>{
   var body= {
      testId: id,
      questions:questions,
   }
   const res = await fetch("http://localhost:4000/addQuestions",{
      method:"POST",
      mode:"cors",
      body:JSON.stringify(body)
   })
   console.log(res)
   const resBody = await parseToJson(res)
   await ApiErrorHandler(resBody)
   if(resBody.status ===200){
      window.location.href='/home'
   }
   console.log(resBody)
   return resBody
}


