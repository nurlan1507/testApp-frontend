
export async function parseToJson(res){
    const data = (await res.body.getReader().read()).value
    const str = String.fromCharCode.apply(String, data);
    return JSON.parse(str)
}
