import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: '', email: '', password: '' })

    const submitHandler = (e) => { // Bilgileri göndermek için kullanılır.
        e.preventDefault()
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}> {/* Form submit işlemi için kullanılır. */}
            <div className="form-inner"> {/* Başlık Kısmı */}
                <h2>PROCSİN</h2>
                {(error !== "") ? <div className="error">{error}</div> : ""} {/* Hata mesajı */}
                <div className="form-group"> {/* İsim gösterilmesi için kullanılır. */}
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Adınızı Giriniz" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>
                <div className="form-group"> {/* Email gösterilmesi için kullanılır. */}
                    <label htmlFor="emaili">Email: </label>
                    <input type="email" className="form-control" id="email" placeholder="Mail Adresini Giriniz" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className="form-group"> {/* Şifre gösterilmesi için kullanılır. */}
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Şifrenizi Giriniz" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" /> {/* Submit butonu */}
            </div>
        </form>
    )
}

export default LoginForm;