import { AccordionInfo } from "@/components/accordion-info";
import TextRevealByWord from "@/components/text-reveal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <div className="h-[10vh]" />
      <AccordionInfo className="mt-32" />
      <div className="h-[30vh]" />

      <TextRevealByWord text="lorem ipsum dolor sit amet consectetur adipiscing elit sed do enim ad minim veniam quis nostrud exerciton ullamco laboris nisi ut aliquip ex ea commodo conuat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum" />
      <div className="h-screen"></div>
    </main>
  );
}
