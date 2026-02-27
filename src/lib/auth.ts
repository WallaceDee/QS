import { cookies } from "next/headers"
import { createHash } from "crypto"

const COOKIE_NAME = "admin_session"

function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex")
}

export function getExpectedCookieValue(): string | null {
  const p = process.env.ADMIN_PASSWORD
  if (!p) return null
  return hashPassword(p)
}

export function isAdminAuthenticated(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false
  const expected = getExpectedCookieValue()
  if (!expected) return false
  return cookieValue === expected
}

export async function getAdminCookie(): Promise<string | undefined> {
  const store = await cookies()
  return store.get(COOKIE_NAME)?.value
}

export async function setAdminCookie(): Promise<void> {
  const expected = getExpectedCookieValue()
  if (!expected) return
  const store = await cookies()
  store.set(COOKIE_NAME, expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  })
}

export async function clearAdminCookie(): Promise<void> {
  const store = await cookies()
  store.delete(COOKIE_NAME)
}

export function verifyAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) return false
  return password === expected
}
