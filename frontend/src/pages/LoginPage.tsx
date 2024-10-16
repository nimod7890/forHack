import { Button } from "@components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@components/ui/form";
import { Input } from "@components/ui/input";
import useSignin, { SigninFormData } from "@hooks/mutate/useSignin";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import loginLottie from "@assets/lottie-login.json";
import Logo from "@components/layout/Logo";

type SigninMutation = (data: SigninFormData) => void;

export default function LoginPage() {
  const form = useForm<SigninFormData>();
  const { control, handleSubmit } = form;

  const { mutate: signin } = useSignin();

  return (
    <div className="flex items-center justify-center flex-row h-screen bg-white">
      <div className="w-1/2 flex justify-center items-center z-10 ">
        <Form {...form}>
          <form
            onSubmit={handleSubmit(signin as SigninMutation)}
            className="flex flex-col p-12 justify-center items-center"
          >
            <Logo size="lg" />
            <FormField
              control={control}
              name="id"
              render={({ field }) => (
                <FormItem className="w-[300px] mb-5">
                  <FormLabel>ID</FormLabel>
                  <FormControl>
                    <Input autoComplete="username" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-[300px] mb-12">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" autoComplete="current-password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-[150px]">
              로그인
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-[900px] -ml-[200px] -mr-[100px] overflow-hidden">
        <Lottie options={{ animationData: loginLottie, loop: true, autoplay: true }} speed={2} />
      </div>
    </div>
  );
}
