import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  setItem<T>(key: string, value: T): boolean {
    if (!key) return false;
    sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  }
  getItem<T>(key: string): T | null { return JSON.parse(sessionStorage.getItem(key) as string) ?? null; }
  clear(): void { sessionStorage.clear(); }

}
