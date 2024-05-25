import Container from "@/components/Container";
import { Home } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container className=" h-screen flex flex-col items-center justify-center gap-5">
      <form
        className="flex flex-col w-[370px] gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="rounded"
          placeholder="example@gmail.com"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">Email field is required</span>
        )}

        <input
          className="rounded"
          placeholder="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">Password field is required</span>
        )}

        <input
          className=" bg-red-500 text-white rounded py-2  font-bold"
          type="submit"
        />
      </form>
      <p className=" text-black text-sm">
        New at Foodie Bee?{" "}
        <Link className="text-tangerine text-base font-semibold" to="/register">
          Register here...
        </Link>
      </p>

      <Link to="/">
        <div className="flex gap-2 mt-10">
          <Home className=" text-tangerine " />
          <h3 className="font-bold text-tangerine">Back to home</h3>
        </div>
      </Link>
    </Container>
  );
};

export default Login;
