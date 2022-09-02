import Head from "next/head";
import styles from "../styles/Login.module.scss";
import { Button, Checkbox, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";

export default function Teacher() {
  const { register, handleSubmit } = useForm();
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Entrar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header>
          <h2>Iscool</h2>
        </header>
        <div>
          <form onSubmit={handleSubmit((data) => setUser(data))}>
            <h2>Login</h2>
            <div>
              <p>Email</p>
              <Input
                {...register("email")}
                type="email"
                name="email"
                required
              />
            </div>
            <div>
              <p>Senha</p>
              <Input
                {...register("password")}
                type="password"
                name="password"
                required
              />
            </div>
            <span>
              <Checkbox {...register("remember")} name="remember">
                Lembrar de mim
              </Checkbox>
              <Button
                type="submit"
                onClick={() => {
                  window.location.href = "/workflow/dashboard";
                }}
              >
                Enviar
              </Button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
