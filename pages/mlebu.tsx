import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangeName = (e: any) => {
    const name: string = e.target.value;
    setNama(name);
  };
  const onChangePassword = (e: any) => {
    const password: string = e.target.value;
    setPassword(password);
  };

  function submitLogin() {
    const data = {
      nama: nama,
      password: password,
    };
    console.log(data);
    axios
      .post("http://localhost:3001/mlebu", data)
      .then((res) => {
        console.log("terkirim");
      })
      .catch((err) => {
        setError(err.response.data.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  }

  return (
    <>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card p-4 latar"
              style={{ boxShadow: "1px 1px 7px -1px #f5e188" }}
            >
              <div className="card-body">
                <div>
                  <h2 className={styles.subTitle}>Halaman Login</h2>
                </div>
                {error && (
                  <div className="alert alert-warning">
                    <p>{error}</p>
                  </div>
                )}
                <div className="form-group">
                  <label>Nama/E-mail</label>
                  <input
                    type="email"
                    placeholder="Nama/E-mail"
                    className="form-control"
                    value={nama}
                    onChange={onChangeName}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={onChangePassword}
                  />
                </div>
                <div className="row mt-5 justify-content-between">
                  <div className="col-md-6">
                    <button
                      className="d-flex btn btn-primary"
                      onClick={submitLogin}
                    >
                      LOGIN SLUR!
                    </button>
                    {/* asuu */}
                  </div>
                  <div className="a d-flex col-md-4 align-self-center justify-content-end">
                    <Link href="/lupa-password">
                      <a style={{ textDecoration: "none" }}>Lupa password</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
