
export function objectsComnpare<T>(obj1: T, obj2: T): boolean {
  for (const key in obj1)
    if (obj1[key] !== obj2[key]) return false;
  return true;
}
