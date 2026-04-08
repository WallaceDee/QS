import { NextRequest, NextResponse } from "next/server"
import { clearAdminCookie } from "@/lib/auth"

function getOrigin(request: NextRequest): string {
  const forwardedProto = request.headers.get("x-forwarded-proto")
  const forwardedHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
  if (forwardedProto && forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`
  }
  return new URL(request.url).origin
}

export async function POST(request: NextRequest) {
  await clearAdminCookie()
  const origin = getOrigin(request)
  return NextResponse.redirect(new URL("/admin/login", origin))
}
