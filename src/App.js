import React, { useState } from "react";
import LoginForm from "./components/LoginForm";


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin"
  };
  const [user, setUser] = useState({ name: "", email: "" }); // email and password are empty strings 
  const [error, setError] = useState(""); // Hata mesajının görünümünün boş olduğu durumdur.

  const Login = details => { // details is an object
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Giriş Başarılı");
      setUser({ // İsim ve email bilgilerini setUser fonksiyonuna gönderiyoruz. 
        name: details.name,
        email: details.email
      }); 
    }
    else { // Hata mesajının görünümünün güncellendiği durumdur.
      console.log("Hatalı Giriş");
      setError("Hatalı Giriş");
    }
  };
  const Logout = () => { // Logout is a function
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome"> 
          <h1>Welcome, <span>{user.name}</span></h1> 
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm error={error} Login={Login} /> // Giriş yapılmadıysa LoginForm componentini göster
      )}
    </div>
  );
}

export default App;
