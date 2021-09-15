import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import * as Yup from "yup";
import { useHistory } from "react-router";
import * as api from "../../apis/auth";
import useApi from "../../hooks/useApi";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().min(8).required("Required"),
});

const Login = () => {
  const history = useHistory();
  const { request, error, data } = useApi(api.login);
  useEffect(() => {
    if (window.localStorage) {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;
        window.location.reload();
      } else localStorage.removeItem("firstLoad");
    }
  }, []);

  const onSubmit = async (values) => {
    try {
      const { data } = await request(values);
      console.log("data", data);
      sessionStorage.setItem("token", data.staff.token);
      sessionStorage.setItem("isAdmin", data.staff.is_admin);
      sessionStorage.setItem("staffId", data.staff.id);
      history.push("/");
    } catch (_) {}
  };
  console.log("error", error);
  return (
    <>
      <LoginForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        error={error}
      />
    </>
  );
};

export default Login;
