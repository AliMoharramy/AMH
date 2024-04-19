import { NextRequest } from "next/server";
import { updateSession } from "./app/lib/data";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
