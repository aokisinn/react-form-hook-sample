import React from "react";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";

interface IFormInput {
    firstName: string;
    lastName: string;
    pokemon: { label: string; value: string };
}

export default function App() {
    const { control, handleSubmit } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* UIライブラリを使う際は、コントローラーを通して操作する */}
            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => <Input {...field} />}
            />
            <br />
            <Controller
                name="pokemon"
                control={control}
                render={({ field }) => <Select
                    {...field}
                    options={[
                        { value: "ヒトカゲ", label: "ヒトカゲ" },
                        { value: "ゼニガメ", label: "ゼニガメ" },
                        { value: "フシギダネ", label: "フシギダネ" }
                    ]}
                />}
            />
            <input type="submit" />
        </form>
    );
};