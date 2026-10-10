import { createFileRoute } from "@tanstack/react-router";
import { Overview } from "@/components/health-app";
import { meta } from "@/lib/health";
export const Route = createFileRoute("/")({head:()=>meta("Overview","Your medical records, explained simply. A clear view of your health journey."),component:Overview});
