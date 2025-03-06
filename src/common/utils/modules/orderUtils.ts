export class OrderUtils {
  static generateOrderNumber(lastOrderNumber?: string): string {
    if (!lastOrderNumber) {
      return 'ORD-001';
    }

    const match = lastOrderNumber.match(/ORD-(\d+)/);
    if (!match) {
      throw new Error('Invalid order number format');
    }

    const nextOrderNumber = (parseInt(match[1], 10) + 1)
      .toString()
      .padStart(3, '0');
    return `ORD-${nextOrderNumber}`;
  }
}
