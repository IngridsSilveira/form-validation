import { useState } from "react";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";

function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //Validate
  const validationEmailandPassword = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inputPass = document.getElementById("password") as HTMLInputElement;
    const inputEmail = document.getElementById("email") as HTMLInputElement;

    //validation password
    if (password.length !== 6) {
      inputPass?.focus();
      inputPass?.classList.add("border-red-600");
      inputPass.placeholder = "Password must be 6 characters";
      setPassword("");
      return false;
    } else {
      inputPass?.classList.remove("border-red-600");
      inputPass.placeholder = "Enter your Password";
    }
    //validation email
    if (!emailRegex.test(email)) {
      inputEmail?.focus();
      inputEmail?.classList.add("border-red-600");
      inputEmail.placeholder = "Invalid email format";
      setEmail("");
      return false;
    } else {
      inputEmail?.classList.remove("border-red-600");
      inputEmail.placeholder = "Enter your E-mail";
      setEmail("");
    }

    //All validations passed
    alert("Form submitted successfully");
    setName("");
    setEmail("");
    setPassword("");
    return true;
  };

  return (
    <div className="font-mono font-bold h-screen w-full flex items-center justify-center bg-slate-200">
      <form
        className="flex flex-col w-80 h-80 p-3 bg-slate-100 rounded shadow"
        action="#"
      >
        <h1 className="text-xl text-center">Form Login</h1>

        <Input
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
        <Button onClick={validationEmailandPassword} />
      </form>
    </div>
  );
}

export default App;
