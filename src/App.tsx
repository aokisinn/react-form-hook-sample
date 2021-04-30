import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
  gender: string
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("example")} />
      <br />
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>必須項目です。</span>}
      <br />
      <select {...register("gender")}>
        <option value="female">女性</option>
        <option value="male">男</option>
        <option value="other">その他</option>
      </select>
      <br />
      <input type="submit" />
    </form>
  );
}
