import { useState } from "react";
import styles from "./Form.module.css";
import Input from "./Input/Input";
import { regExp } from "./Input/RegExp";
import Button from "./Button/Button";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [user, setUser] = useState("");

  function Check() {
    !regExp.name.test(name) && setNameError("Не верно введено имя");
    name === "" && setNameError("Поле не может быть пустым");
    !regExp.email.test(email) && setEmailError("Некорректный email");
    email === "" && setEmailError("Поле не может быть пустым");
    password !== confirmPassword &&
      setConfirmPasswordError("Пароли не совпадают");
    password === "" && setPasswordError("Поле не может быть пустым");
    confirmPassword === "" &&
      setConfirmPasswordError("Поле не может быть пустым");
    if (
      regExp.name.test(name) &&
      regExp.email.test(email) &&
      password == confirmPassword
    ) {
      setUser("Пользователь успешно создан");
    }
  }

  return (
    <>
      <div className={styles.form}>
        <Input
          type="text"
          placeholder="full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          error={nameError}
        />
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={emailError}
        />
        <Input
          type="text"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={passwordError}
        />
        <Input
          type="text"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          error={confirmPasswordError}
        />

        <button onClick={Check}>Create account</button>
        <div>{user}</div>
        <Button>Create account</Button>
      </div>
    </>
  );
}
