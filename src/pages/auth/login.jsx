import { useState } from "react";
import FormButton from "../../components/FormButton";
import PasswordField from "../../components/auth/passwordField";
import InputField from "../../components/inputField";

function Login() {
    const [formData, setFormData] = useState({
        email: "" ,
        mobile: "",
        password : ""
    })

    const [errors, setErrors] = useState({})

    const [loading, setLoading] = useState(false)
    

    function handleChange(event){
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value ,
        })

        setErrors({
            ...errors,
            [name] : ""
            
        })
    }

  

    return (
        <div clasName="login">
          
            <h1>ورود به حساب کاربری</h1>
           
            <form>
           
         <InputField
            label="ایمیل"
            neme="email"
            type="email"
            value={formData.email }
             onChange={handleChange}
             placeholder="example@gmail.com"
            required
        
        />
            <InputField
            label="موبایل"
            neme="mobile"
            type="mobile"
            value={formData.mobile }
            onChange={handleChange}
            placeholder="09121234567"
            required
        
                />
            <PasswordField
            label="رمز عبور"
            neme="password"
            value={formData.password }
            onChange={handleChange}
            placeholder="رمز عبورخود را وارد نمایید"
            required
        
                />
                <FormButton
                loading = {loading}
                    
                >
                    ورود
                </FormButton>

                  </form>

            <p>
                حساب کاربری دارید؟
                {""}

                <Link to ="/signup" >ثبت نام کنید </Link>
            </p>
      


        
    </div>
    )
   

}


































