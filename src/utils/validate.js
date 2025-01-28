export const checkValidateData = (email, password, name) =>{
    const isEmailValid =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const isNameValid =  /^[a-zA-Z ]{2,30}$/.test(name);
 
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(name !== undefined){
        if(!isNameValid) return "Please provide a valid name";
    }
    
}