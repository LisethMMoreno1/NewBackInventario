import * as os from 'os';
// import { envs } from 'src/config/envs';

// export const selectEnvironment = () => {
//   switch (envs.ENVIRONMENT) {
//     case 'stage':
//       return 'https://micontaqa.ossadow7.com';
//     case 'production':
//       return 'https://bk.miconta.online';
//     default:
//       return 'http://localhost:5173';
//   }
// };

export const base64ToArrayBuffer = (base64: string) => {
  const binaryString = atob(
    base64.substring(base64.indexOf('base64,') + 7, base64.length),
  );
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

/**
 * @function getTraceability
 * @param user // Usuario de la plataforma
 * @param event // Evento realizado
 * @returns Trazabilidad del usuario.
 */
export const getTraceability = () => {
  const hostname = os?.hostname();
  return {
    pc: hostname,
  };
};

export const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  let localIP = '';

  for (const iface in interfaces) {
    for (const details of interfaces[iface]) {
      if (details.family === 'IPv4' && !details.internal) {
        localIP = details.address;
        break; // Sale del bucle si encuentra la IP
      }
    }
    if (localIP) break; // Sale del bucle si encontró la IP
  }

  return localIP || 'No se encontró una IP local';
};

/**
 * Transforma una cantidad de números en formato dinero
 * @version 0.0.2
 * @param {string | number} value valor en números
 * @return {number} valor formateado como dinero
 */
export const numberFormat = (value: string | number): number => {
  if (!value) return 0; // Si no hay valor, retorna 0

  // Convertir a string y reemplazar comas por puntos
  const strValue = String(value).replace(/,/g, '.'); // Cambiar comas por puntos

  // Dividir en parte entera y decimal
  const [integerPart, decimalPart] = strValue.split('.');

  // Truncar los dos últimos dígitos de la parte decimal
  const truncatedDecimalPart = decimalPart ? decimalPart.slice(0, -2) : '';

  // Unir la parte entera y la parte decimal truncada
  const finalValue = parseFloat(`${integerPart}.${truncatedDecimalPart}`);

  return finalValue;
};

/**
 * Transforma una cantidad de números en formato dinero
 * @version 0.0.2
 * @param {numeric} value valor en números
 * @return {string} valor formateado como dinero
 */
export const numberFormatNew = (value: string | number): string => {
  if (!value) return ''; // Si no hay valor, retorna vacío
  // Convertir a string y reemplazar comas por puntos
  const strValue = String(value).replace(/,/g, '.'); // Cambiar comas por puntos

  // Dividir en parte entera y decimal
  const [integerPart] = strValue.split('.');
  const numericValue = parseFloat(String(integerPart).replace(/\./g, ''));

  if (isNaN(numericValue)) return ''; // Retorna vacío si no es un número

  return String(numericValue)
    .split('')
    .reverse()
    .reduce((accumulator, currentValue, currentIndex) => {
      if (currentIndex % 3 === 0 && currentIndex !== 0)
        return `${accumulator}.${currentValue}`;
      return `${accumulator}${currentValue}`;
    }, '')
    .split('')
    .reverse()
    .join('');
};
