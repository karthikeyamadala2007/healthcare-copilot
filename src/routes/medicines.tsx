import { createFileRoute } from "@tanstack/react-router";
import { MedicinesPage } from "@/components/health-app";
import { meta } from "@/lib/health";
export const Route = createFileRoute("/medicines")({head:()=>meta("My medicines","Review medicine names and directions extracted from your prescriptions."),component:MedicinesPage});
