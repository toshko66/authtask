import { SignIn } from "@clerk/nextjs";


export default function Page() {
  return (
    <div className=" flex items-center justify-center flex-col gap-10">
      <h1 className="text-4xl font-bold mt-20">Sign in to access your personal dashboard</h1>
      <SignIn path="/sign-in" />;
    </div>)

}