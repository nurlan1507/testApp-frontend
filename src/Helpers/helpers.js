
export async function parseToJson(res){
    try{
        const data = (await res.body.getReader().read()).value
        const str = String.fromCharCode.apply(String, data);
        return JSON.parse(str)
    }catch (e){
        console.log(e)
    }

}
