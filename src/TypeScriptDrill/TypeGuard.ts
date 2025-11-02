// Type Predicate 如果这个函数返回 true，那么在接下来的代码中，可以把 value 视为 string 类型。
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

interface User {
  id: number
  name: string
  email: string
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as any).id === 'number' &&
    typeof (value as any).name === 'string' &&
    typeof (value as any).email === 'string'
  )
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export function isPromise<T>(value: unknown): value is Promise<T> {
  return value instanceof Promise
}

export function isStringArray(value: unknown): value is Array<string> {
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
}
