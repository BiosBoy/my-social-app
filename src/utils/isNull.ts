export const isNull = <T>(value: T | null | undefined) =>
  value === null || value === undefined || value === 'undefined'
