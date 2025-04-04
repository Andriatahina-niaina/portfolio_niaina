import { TopBackground } from "./components/DodyBackground/TopBackground";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <div className="relative overflow-clip " id="home"> 
      <div className="w-screen h-screen top-8"></div>
      <NavBar />
      <TopBackground />
    </div>
  );
}
