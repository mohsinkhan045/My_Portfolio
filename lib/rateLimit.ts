/**
 * Simple sliding-window rate limit for contact API (per-instance memory).
 * For production at scale, use Redis or your edge provider's rate limiting.
 */

const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

function getKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function rateLimitContact(request: Request): { ok: true } | { ok: false } {
  const key = getKey(request);
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const prev = hits.get(key) ?? [];
  const recent = prev.filter((t) => t > windowStart);
  if (recent.length >= MAX_REQUESTS) {
    return { ok: false };
  }
  recent.push(now);
  hits.set(key, recent);
  return { ok: true };
}
