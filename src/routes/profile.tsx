import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/components/health-app";
import { meta } from "@/lib/health";
export const Route = createFileRoute("/profile")({head:()=>meta("Health profile","Manage your private health preferences and mock ABHA connection."),component:ProfilePage});
