export function getAllowed(transactions: Transaction[]) {
  return new Set(transactions)
}
