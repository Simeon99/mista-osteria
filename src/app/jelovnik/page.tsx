import type { Metadata } from "next";
import { FullMenu } from "@/components/full-menu";

export const metadata: Metadata = {
  title: "Jelovnik | Mista Osteria",
  description:
    "Kompletan jelovnik Mista Osteria — predjela, supe, rižoto, paste, glavna jela, sendviči i dezerti.",
};

export default function JelovnikPage() {
  return <FullMenu />;
}
