import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/health-app";
import { meta } from "@/lib/health";
export const Route = createFileRoute("/about")({head:()=>meta("About Wellnest","Explore the secure upload-to-summary pipeline and FHIR-style prototype architecture."),component:AboutPage});
