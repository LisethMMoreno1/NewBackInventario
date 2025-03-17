export class OrderUtils {
  static generateOrderNumber(lastOrderNumber: string | null): string {
    if (!lastOrderNumber) {
      return 'ORD-0001'; // Primera orden
    }

    const match = lastOrderNumber.match(/(\d+)$/); // Extrae solo los números
    const lastNumber = match ? parseInt(match[0], 10) : 0;
    const newNumber = (lastNumber + 1).toString().padStart(4, '0');

    return `ORD-${newNumber}`;
  }
}
