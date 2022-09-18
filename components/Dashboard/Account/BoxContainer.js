import React, { useState } from 'react';
import { DeleteAccountModel } from './billing/Model';
import Box from './Box';
import toast from '../Utils/Toast';
import {Toaster} from 'react-hot-toast';
import useTranslation from "next-translate/useTranslation";

export default function BoxContainer({displayonsmall}) {

    const { t } = useTranslation("common");
    const [open,setopen] = useState(false)

    return(
        <div className={`md:w-[75%] lg:w-[75%] xl:[75%] w-[75%] sm:w-[90%] ${displayonsmall ? 'xs:w-[95%] xs:mx-auto' : 'xs:hidden'}  `}>
            <Toaster />
            <DeleteAccountModel state={open} setstate={setopen}/>
            <Box onClick={() => toast(t("Your Username"),t("Has been Updated Successfully"))} heading={t("Your Username")} para={t("This is your URL namespace within Vercel")} secondtext={t("Please use 48 characters at maximum")} btntext={t("Save")}/>
            <Box onClick={() => toast(t("Your Name"),t("Has been Updated Successfully"))} heading={t("Your Name")} para={t("Please enter your full name, or a display name you are comfortable with")} secondtext={t("Please use 48 characters at maximum")} btntext={t("Save")}/>
            <Box onClick={() => toast(t("Your Email"),t("Has been Updated Successfully"))} heading={t("Your Email")} para={t("Please enter the email address you want to use to log in with Vercel")} secondtext={t("We will email you to verify the change")} btntext={t("Save")}/>
            <Box heading={t("Your Avatar")} para={t("Click on the avatar to upload a custom one from your files")} secondpara={t("This is your avatar")} secondtext={t("An avatar is optional but strongly recommended")} avatar={true}/>
            <Box heading={t("Your ID")} para={t("This is your user ID within Vercel")} secondtext={t("Used when interacting with the Vercel API")}/>
            <Box onClick={() => setopen(true)} deletebox={true} hideinput={true} heading={t("Delete Personal Account")} btntext={t("Delete account")} para={t("Permanently remove your Personal Account and all of its contents from the Vercel platform This action is not reversible, so please continue with caution")} />
        </div>
    )
}