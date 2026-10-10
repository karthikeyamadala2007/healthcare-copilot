import { createFileRoute } from "@tanstack/react-router";
import { TimelinePage } from "@/components/health-app";
import { meta } from "@/lib/health";
export const Route = createFileRoute("/timeline")({head:()=>meta("Health timeline","Follow your health journey through a chronological medical record timeline."),component:TimelinePage});
