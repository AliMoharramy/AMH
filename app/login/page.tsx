import LoginForm from "../ui/login_form";
import ThreeScene from "./ThreeScene";
export default function LoginPage() {
  return (
    <div className="relative">
      <ThreeScene />
      <canvas className="webgl z-0"></canvas>
      <div className="absolute top-0 text-white">Login</div>
      <LoginForm />
    </div>
  );
}
