import { useState } from "react";
import { loginUser } from "../../services/AuthServises";
import FormButton from "../../components/auth/FormButton";
import InputField from "../../components/auth/InputField";
import PasswordField from "../../components/auth/passwordField";
import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/authLayout";
import {
    ValidateEmail,
    ValidateMobile,
    ValidatePassword

} from "../../utils/Validation";



function Login() {
    const [formData, setFormData] = useState({
        email: "",
        mobile: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const [loading, setLoading] = useState(false)


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })

        setErrors({
            ...errors,
            [name]: ""

        })
    }



    const handleSubmit = async (event) => {
        event.preventDefault();
        let newErrors = {}
        if (!ValidateEmail(email)) {
            newErrors.email = "ایمیل شما معتبر نمی باشد"
        }
        if (!ValidateMobile(mobile)) {
            newErrors.mobile = "شماره تلفن شما معتبر نمی باشد"
        }
        if (!ValidatePassword(password)) {
            newErrors.password = "حدداقل کاراکترهاها باید بیشتر از 6 باشد"
        }
        setErrors(newErrors)

        try {
            const response = await loginUser(formData)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <AuthLayout>
            <div className="login">

                <h1>ورود به حساب کاربری</h1>

                <form onSubmit={handleSubmit}>

                    <InputField
                        label="ایمیل"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        required
                        

                    />
                    <InputField
                        label="موبایل"
                        name="mobile"
                        type="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="09121234567"
                        required

                    />
                    <PasswordField
                        label="رمز عبور"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="رمز عبورخود را وارد نمایید"
                        required

                    />
                    <FormButton
                        loading={loading}

                    >
                        ورود
                    </FormButton>
                    

                </form>

                <p>
                    حساب کاربری دارید؟
                    {""}

                    <Link to="/signup" >ثبت نام کنید </Link>
                </p>
            </div>

        </AuthLayout>


    )


}
export default Login


































