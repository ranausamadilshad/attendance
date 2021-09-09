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
  const { request, error } = useApi(api.login);
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
      sessionStorage.setItem("token", data.user.token);
      sessionStorage.setItem("isAdmin", data.user.isAdmin);
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
