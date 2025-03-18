
export const GetSigninData=()=>{
    
const Data:any=localStorage.getItem("SignInData")

return Data ? JSON.parse(Data) : null;
    
}


export const RemoveSignData=()=>{
    const SignInData:any=localStorage.removeItem("SignInData")
}