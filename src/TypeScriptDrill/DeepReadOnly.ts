export type DeepReadOnly<T> = T extends object ? { readonly [P in keyof T]: DeepReadOnly<T[P]> } : T
