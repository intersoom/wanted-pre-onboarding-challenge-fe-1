import useEmail from "features/auth/hooks/useEmail";
import useForm from "features/auth/hooks/useForm";
import {
  validateEmail,
  validatePassword,
} from "features/auth/utils/validation";
import React, { useCallback, useState } from "react";
import FormLayout from "../FormLayout";

function LoginForm() {
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [email, , handleEmail] = useEmail("");
  const [password, , handlePassword] = useForm("");

  const handleLogin = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      // email 유효성
      if (validateEmail(email)) {
        setIsEmail(true);
      } else {
        setIsEmail(false);
        alert("올바른 형식의 이메일을 입력해주세요.");
      }
      // password 유효성
      if (validatePassword(email)) {
        setIsPassword(true);
      } else {
        setIsPassword(false);
        alert("올바른 형식의 비밀번호를 입력해주세요.");
      }
      try {
        const data = await fetch("localhost:8080/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        console.log(data);
      } catch (error) {
        // 에러 핸들링 해보기..
        console.log(error);
      }
    },
    [email, password],
  );

  return (
    <FormLayout
      handleSubmit={handleLogin}
      submitText="login"
      email={email}
      handleEmail={handleEmail}
      password={password}
      handlePassword={handlePassword}
    />
  );
}

export default LoginForm;
