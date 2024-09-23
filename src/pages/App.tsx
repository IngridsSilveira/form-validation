import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //Validate
  const validationEmailandPassword = () => {
    //validation password
    if (password.length !== 6) {
      const inputPass = document.getElementById("password") as HTMLInputElement;

      inputPass?.focus();
      inputPass?.classList.add("border-red-600");
      inputPass.placeholder = "Password must be 6 characters";
      setPassword("");

      return false;
    } else {
      const inputPass = document.getElementById("password") as HTMLInputElement;
      inputPass?.classList.remove("border-red-600");
      inputPass.placeholder = "Enter your Password";
    }

    //validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const inputEmail = document.getElementById("email") as HTMLInputElement;

      inputEmail?.focus();
      inputEmail?.classList.add("border-red-600");
      inputEmail.placeholder = "Invalid email format";
      setEmail("");
      return false;
    } else {
      const inputEmail = document.getElementById("email") as HTMLInputElement;
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
    <div className="h-screen w-full flex items-center justify-center bg-slate-200">
      <form
        className="flex flex-col w-72 p-3 bg-slate-100 rounded shadow"
        action="#"
      >
        <h1 className="text-lg font-bold text-center">Form Login</h1>

        <label htmlFor="name">Name:</label>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name"
          required
        />

        <label htmlFor="email">E-mail:</label>
        <input
          className="border"
          id="email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your E-mail"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          className="border"
          id="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
          required
        />

        <button
          className="bg-slate-600 mt-2 w-16 py-1 px-2 rounded  text-white"
          onClick={validationEmailandPassword}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
