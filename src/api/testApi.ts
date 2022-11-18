
import {parseToJson} from "../Helpers/helpers";
import RootStore from "../store/rootStore";

export const CreateTest:any =async(title:string,description:string,groupId:string,startDate:string,authorId:string)=>{
   console.log(title,description,groupId,startDate)
   var body ={
      title,
      description,
      groupId,
      startAt:Date.parse(startDate),
      authorId
   }

   console.log(body)
    const res = await fetch("http://localhost:4000/createTest",{
       method:"POST",
       mode:"cors",
       body:JSON.stringify(body),
   })
   console.log(res)
   const resBody = await parseToJson(res)
   if(res.status ===400){
      RootStore.errorStore.setErrors(resBody)
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
   if (res.status ===200){
      window.location.href=`/editTest/${resBody.Id}`
   }
   return resBody
}

export const saveTestQuestions=async(questions:string,id:number)=>{
   var body= {
      questions:questions,
   }
   const res = await fetch(`http://localhost:4000/addQuestions?testId=${id}`,{
      method:"POST",
      mode:"cors",
      body:JSON.stringify(body)
   })
   console.log(res)
   const resBody = await parseToJson(res)
   if(res.status ===400){

      RootStore.errorStore.setErrors(resBody)
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
   if(res.status ===200){
      window.location.href='/home'
   }
   console.log(resBody)
   return resBody
}
