import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export const SESSION_COOKIE = "ki_admin_session";
export const SESSION_DURATION_SECONDS = 60 * 60 * 8; // 8 hours

function getSecret(): Uint8Array {
  const secret = process.env.SESSION_SECRET ?? "kamal-industries-fallback-secret-change-me";
  return new TextEncoder().encode(secret);
}

/** Create a signed JWT session token */
export async function createSessionToken(): Promise<string> {
  return await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getSecret());
}

/** Verify a JWT session token — returns payload or null */
export async function verifySessionToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload;
  } catch {
    return null;
  }
}

/** Read and verify session from Next.js cookies (Server Components / API Routes) */
export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return await verifySessionToken(token);
}

/** Read and verify session from a raw NextRequest (Middleware) */
export async function getSessionFromRequest(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return await verifySessionToken(token);
}

/** Validate admin username + password against env vars — constant-time safe */
export function validateAdminCredentials(username: string, password: string): boolean {
  const envUser = process.env.ADMIN_USERNAME ?? "admin";
  const envPass = process.env.ADMIN_PASSWORD ?? "";
  if (envPass === "") return false; // Force explicit setup
  // Constant-time comparison to prevent timing attacks
  const userMatch = timingSafeStringEqual(username, envUser);
  const passMatch = timingSafeStringEqual(password, envPass);
  return userMatch && passMatch;
}

function timingSafeStringEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    // Still iterate to prevent timing leak
    let diff = 0;
    for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ (b.charCodeAt(i % b.length) || 0);
    return diff === -1;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
