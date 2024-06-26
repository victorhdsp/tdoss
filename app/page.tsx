import Image from "next/image";
import CursusUsers from "@/components/CursusUsers";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-12 p-24">
      <h1>Piscina</h1>
      <div className="flex flex-col gap-12">
        <CursusUsers />
      </div>
    </main>
  );
}
