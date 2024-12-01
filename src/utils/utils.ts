// src/utils/utils.ts

/**
 * Función para esperar un tiempo determinado en milisegundos.
 * @param milliseconds El tiempo en milisegundos.
 */
export const waitFor = async (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

/**
 * Función para imprimir un mensaje en consola con un formato específico.
 * @param message El mensaje que deseas mostrar.
 */
export const printMessage = (message: string) => {
    console.log(`[Utils] - ${message}`);
};

/**
 * Función para obtener un valor aleatorio entre un rango de números.
 * @param min El valor mínimo.
 * @param max El valor máximo.
 */
export const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
