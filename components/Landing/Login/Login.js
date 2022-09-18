import React,{useState} from 'react';
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import { login,getUser } from "../../../data/auth";
import { showToast } from "../../../utils/helpers";
import { setToken,setUser } from '../../../utils/auth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../Dashboard/Utils/Loader";
import { useRouter } from 'next/router';


export default function Login() {
    const { t,lang } = useTranslation("common");
    const router= useRouter()
    const [submitloading,sutubmitloading] = useState(false)
    const { register, handleSubmit, watch,reset, formState: { errors, } } = useForm();
    async function onSubmit(inputs)
    {
        if(!submitloading){
          try{
            sutubmitloading(true)
            const {data} = await login(inputs)
            setToken(data.access_token)

            if(data){
                const {data:user}= await getUser()
                if(user){
                    setUser(user)
                }
                showToast('Login successful','success')
                sutubmitloading(false)
                router.push(`/${lang}/dashboard`)
                return;
            }
          }catch(e){
            sutubmitloading(false)
            showToast('Incorrect email or password','error')
          }
        }
    }

  return (
    <div className='bg-white w-full h-auto py-10 md:py-0'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex justify-center align-middle w-full h-full min-h-screen'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-[60%] h-fit flex flex-col align-middle shadow-contact-card m-auto p-5 md:p-10'>
                    <h2 className='text-blue-content text-lg md:text-xl font-bold text-center'>
                        {t("Login to your account")}
                    </h2>
                    <div className='flex flex-col align-start w-full md:w-[70%] mx-auto mt-10'>
                        <label className='text-black text-sm md:text-base font-medium text-start'>{t("Email")}</label>
                        <input {...register('username',{required:true})}  className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl px-5 shadow-contact-card mt-3 text-sm md:text-base' placeholder='Enter Your Username' type={'text'} />
                        <label className='text-black text-sm md:text-base font-medium text-start mt-4'>{t("Password")}</label>
                        <input {...register('password',{required:true})}  className='w-full bg-white border border-black-100 outline-none leading-relaxed h-12 md:h-14 rounded-xl px-5 shadow-contact-card mt-3 text-sm md:text-base' placeholder='Enter Your Password' type={'password'} />
                        <a className='text-black text-sm md:text-base font-semibold text-end mt-4'>
                            {t("Forgot Password?")}
                        </a>
                        <button className='w-full text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mx-auto mt-5 font-normal'>
                        {
                            submitloading?(
                                <Loader/>
                            ):(
                                t("Login")
                            )
                        }
                            
                        </button>
                        <a className='text-black text-sm md:text-base font-semibold text-start mt-5 underline underline-offset-4'>
                            {t("Don")}&apos;{t("t have an account? Sign Up")}
                        </a>
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}
