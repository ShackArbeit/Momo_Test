export type TelemetryEvent =
  | { type: 'search'; query: string }
  | { type: 'product_click'; productId: string; productName: string }
  | { type: 'add_to_cart'; productId: string; productName: string; price: number }

const STORAGE_KEY = 'momo_telemetry'

export function logEvent(event: TelemetryEvent): void {
  const existing = getEvents()
  existing.push({ ...event, timestamp: new Date().toISOString() })
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
  } catch {
    // localStorage 寫入失敗時靜默忽略
  }
}

export function getEvents(): (TelemetryEvent & { timestamp: string })[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}
