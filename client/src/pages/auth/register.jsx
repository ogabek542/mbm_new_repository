import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { useRegisterFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();


  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }
  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t("create_new_account")}
        </h1>
        <p className="mt-2">
          {t("already_have_an_account")}
          <Link
            className="font-bold ml-2 text-primary hover:underline"
            to="/auth/login"
          > 
            {t("login")}
          </Link>
        </p>
      </div>

      <CommonForm
        formControls={useRegisterFormControls()}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

    </div>
  );
}

export default AuthRegister;
