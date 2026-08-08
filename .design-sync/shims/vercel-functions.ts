// Browser shim for @vercel/functions: in-memory no-op runtime cache.
export function getCache() {
  return {
    get: async (_key: string) => null,
    set: async (_key: string, _value: unknown, _opts?: unknown) => {},
    delete: async (_key: string) => {},
  };
}
