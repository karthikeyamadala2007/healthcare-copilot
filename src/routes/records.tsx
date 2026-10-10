import { createFileRoute } from "@tanstack/react-router";
import { RecordsPage } from "@/components/health-app";
import { meta } from "@/lib/health";
export const Route = createFileRoute("/records")({head:()=>meta("My health records","Privately organize prescriptions, lab reports and diagnostic records."),component:RecordsPage});
