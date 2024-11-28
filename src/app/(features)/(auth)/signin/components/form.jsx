"use client";

import { useState } from "react";
import Divider from "../../components/divider";
import FormAuthContainer from "../../components/formAuthContainer";
import Heading1 from "../../components/heading1";
import InputCheckbox from "../../components/input/inputCheckbox";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";
import { useRouter } from "next/navigation";
import signIn from "../service/signin.service";

export default function FormSignin() {
  const router = useRouter();
  const [usernameOrPhone, setUsernameOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn({
        usernameOrPhone: usernameOrPhone,
        password: password,
      });

      if (response.isAdmin) {
        router.push("/dashboard");
      } else {
        router.push("/profile");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <FormAuthContainer>
      <div className="text-left">
        <Heading1 text={"Masuk."} />
      </div>
      <Divider />
      <form action="" className="flex flex-col gap-6" onSubmit={handleSignin}>
        <InputText
          type={"text"}
          placeholder={"Nama Pengguna"}
          value={usernameOrPhone}
          onChange={(e) => setUsernameOrPhone(e.target.value)}
        />
        <InputText
          type={"password"}
          placeholder={"Kata Sandi"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputCheckbox label={"Ingat saya"} id={"remember"} />
        <InputSubmit text={"Masuk"} />
      </form>
    </FormAuthContainer>
  );
}