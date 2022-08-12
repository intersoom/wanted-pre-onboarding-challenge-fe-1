import useEmail from "features/auth/hooks/useEmail";
import useForm from "features/auth/hooks/useForm";
import React, { useCallback } from "react";
import FormLayout from "../FormLayout";

function SignupForm() {
  const [email, , handleEmail] = useEmail("");
  const [password, , handlePassword] = useForm("");

  const handleSignup = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      console.log(email, password);

      try {
        const data = await fetch("http://localhost:8080/users/create", {
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
      handleSubmit={handleSignup}
      submitText="signup"
      email={email}
      handleEmail={handleEmail}
      password={password}
      handlePassword={handlePassword}
    />
  );
}

export default SignupForm;
