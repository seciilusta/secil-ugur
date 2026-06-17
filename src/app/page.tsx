import { redirect } from "next/navigation";
import { activeInvitation } from "@/data";

export default function HomePage() {
  redirect(`/${activeInvitation}`);
}
