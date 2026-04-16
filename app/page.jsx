import Login from "./components/login";
import Counter from "./state-management/useState";

export default function Home() {
  return (
    <div className="bg-white text-black h-screen">
      {/* <Login /> */}
      <Counter />
    </div>
  );
}