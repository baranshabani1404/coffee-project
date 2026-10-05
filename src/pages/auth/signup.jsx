

function Signup() {
    return (
        <div className="Signup">
            <h1>ایجاد حساب کاربری</h1>
           
            <form>
           
           <InputField
              label="نام"
              name="name"
              type="name"
            //   value={ }
               onChange={handleChange}
               placeholder=""
              required
          
          />
              <InputField
              label="نام خانوادگی"
              name="last name"
              type="text"
            //   value={ }
              onChange={handleChange}
              placeholder=""
              required
          
                  />
              <InputField
              label=" ایمیل"
              name="email"
              type="email"
            //   value={ }
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
          
                  />
              <PasswordField
              label="رمز عبور"
              name="password"
            //   value={ }
              onChange={handleChange}
              placeholder="رمز عبورخود را وارد نمایید"
              required
          
                  />
              <PasswordField
              label="تکرار رمز عبور"
              name="password"
            //   value={ }
              onChange={handleChange}
              placeholder=" رمز عبور خود را مجدد وارد نمایید"
              required
          
                  />
                  <FormButton
                  loading = {loading}
                      
                  >
                      ورود
                  </FormButton>
  
                    </form>
  
    </div>    
    
    )
}
export default Signup