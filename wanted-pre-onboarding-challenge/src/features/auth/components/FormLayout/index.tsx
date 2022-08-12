import React from "react";

type AuthProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  submitText: string;
  email: string;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormLayout({
  handleSubmit,
  submitText,
  email,
  handleEmail,
  password,
  handlePassword,
}: AuthProps) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmail}
          value={email}
          type="text"
          placeholder="email"
        />
        <input
          onChange={handlePassword}
          value={password}
          type="password"
          placeholder="password"
        />
        <button type="submit">{submitText}</button>
      </form>
    </div>
  );
}

export default FormLayout;
