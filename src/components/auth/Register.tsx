import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

const apiUrl = "http://localhost:5284/API";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/Account/register`, {
        email,
        password,
      });
      console.log("Registration response:", response.data);
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Registration error:", error.response?.data);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };
  return (
    <div className={styles.authContainer}>
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
