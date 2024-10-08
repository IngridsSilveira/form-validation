import { useState } from "react";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";

interface Apis {
  id: number;
  name: string;
  email: string;
  password: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [api, setApi] = useState<Apis>();

  // Adicionar mensagens de erro no input
  const showError = (input: HTMLInputElement, message: string) => {
    input.focus();
    input.classList.add("border-red-600");
    input.placeholder = message;
  };

  // Remover mensagens de erro
  const clearError = (input: HTMLInputElement, placeholder: string) => {
    input.classList.remove("border-red-600");
    input.placeholder = placeholder;
  };

  //Validação
  const validationEmailandPassword = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inputName = document.getElementById("name") as HTMLInputElement;
    const inputEmail = document.getElementById("email") as HTMLInputElement;
    const inputPass = document.getElementById("password") as HTMLInputElement;

    // Validação da senha
    if (password.length !== 6) {
      showError(inputPass, "Password must be 6 characters");
      setPassword("");
      return false;
    }
    clearError(inputPass, "Enter your Password");

    // Validação do email
    if (!emailRegex.test(email)) {
      showError(inputEmail, "Invalid email format");
      setEmail("");
      return false;
    }
    clearError(inputEmail, "Enter your E-mail");

    // Verificações da API
    if (
      name.toUpperCase() !== api?.name.toUpperCase() ||
      email !== api?.email ||
      password !== api?.password
    ) {
      alert("As informações fornecidas estão incorretas!");
      showError(inputName, "Digite novamente");
      setName("");
      setEmail("");
      setPassword("");
      return false;
    }

    // Tudo validado
    alert("Form submitted successfully");
    clearError(inputName, "Enter your name");
    setName("");
    setEmail("");
    setPassword("");
    return true;
  };

  //API
  const postApi = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const options = {
      method: "POST",
      body: JSON.stringify({
        id: 1,
        name: "Ingrid",
        email: "ingrid@email.com",
        password: "123456",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setApi(json);
    } catch (error) {
      console.error("Não foi possível", error);
    }
    validationEmailandPassword();
  };

  return (
    <div className="font-mono font-bold h-screen w-full flex flex-col md:flex-row items-center justify-center bg-slate-300">
      <div className="bg-f-background bg-cover bg-center bg-no-repeat w-80 h-60 md:h-80 p-3 rounded-t-md md:rounded-l-md md:rounded-none shadow-lg"></div>

      <form
        className="flex flex-col w-80 h-80 p-3 bg-slate-100 rounded-b-md md:rounded-r-md md:rounded-none shadow-lg"
        action="#"
      >
        <h1 className="text-xl text-center">Form Login</h1>

        <Input
          id="name"
          label="Name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          id="email"
          label="E-mail"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          label="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={postApi} />
      </form>
    </div>
  );
}

export default App;
