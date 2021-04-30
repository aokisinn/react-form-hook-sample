import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
    firstName: string
    age: number
}

const schema = yup.object().shape({
    firstName: yup.string().required('必須です'),
    age: yup.number()
        .typeError('数値を入力してね')
        .required('必須です'),
});

export default function YupApp() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IFormInputs) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <p>{errors.firstName?.message}</p>

            <input {...register("age")} />
            <p>{errors.age?.message}</p>

            <input type="submit" />
        </form>
    );
}