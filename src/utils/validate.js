
export const validate = (email,password) => {
  const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!emailValidate ) {
    return "Email is not Valid";
  } else if(!passwordValidate) {
    return "Password is not valid";
  } else {
    return true;
  }
}


