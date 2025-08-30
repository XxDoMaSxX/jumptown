import type { Metadata } from "next";
import HomeClient from "./_client-home";

export const metadata: Metadata = {
  title: "JumpTown - batutų nuoma Panevėžyje su pristatymu visoje Lietuvoje",
  description:
    "Vienas didžiausių mobilių batutų parkų Europoje. 9 batutai, pristatymas ir montavimas visoje Lietuvoje.",
};

export default function Page() {
  return <HomeClient />;
}
