// Browser shim for @vercel/blob: no-op store, never reachable in previews.
export async function head(_url: string): Promise<never> {
  throw new Error("@vercel/blob not available in preview");
}

export async function put(_path: string, _body: unknown, _opts?: unknown): Promise<never> {
  throw new Error("@vercel/blob not available in preview");
}
