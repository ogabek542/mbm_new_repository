import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { useLoginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { t } = useTranslation();


  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t("sign_in_to_your_account")}
        </h1>
        <p className="mt-2">
          {t("dont_have_an_account")}
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            {t("register")}
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={useLoginFormControls()}
        buttonText={t("login")}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
