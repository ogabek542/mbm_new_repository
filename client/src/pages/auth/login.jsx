import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { useLoginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();
  const { isLoading, error } = useSelector((state) => state.auth);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const result = await dispatch(loginUser(formData)).unwrap();
      if (result.success) {
        toast({
          title: result.message || "Login successful",
        });
        if (result.user?.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/shop/home");
        }
      } else {
        toast({
          title: result.message || "Login failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: error.message || "Login failed",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6 relative ">
      <p className="top-[10px] left-[10px]">salom</p>
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
        isLoading={isLoading}
      />
      {error && (
        <p className="text-sm text-red-500 text-center mt-2">{error}</p>
      )}
    </div>
  );
}

export default AuthLogin;
