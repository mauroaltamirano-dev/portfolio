/**
 * Utilidades para manejo de imágenes en el portfolio
 */

/**
 * Obtiene la URL completa de una imagen de proyecto
 * @param imagePath - Ruta de la imagen (ej: "/projects/ecommerce-home.png")
 * @returns URL completa de la imagen
 */
export const getProjectImageUrl = (imagePath: string): string => {
  // En desarrollo con Bun, las imágenes en public/ son servidas directamente
  if (imagePath.startsWith("/")) {
    return imagePath;
  }
  return `/projects/${imagePath}`;
};

/**
 * Genera una imagen placeholder con gradiente
 * @param title - Título del proyecto para generar colores únicos
 * @returns Objeto con estilos CSS para el placeholder
 */
export const generatePlaceholderGradient = (title: string) => {
  // Genera colores basados en el hash del título
  const hash = title
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue1 = hash % 360;
  const hue2 = (hash + 60) % 360;

  return {
    background: `linear-gradient(135deg, hsl(${hue1}, 70%, 50%) 0%, hsl(${hue2}, 70%, 60%) 100%)`,
  };
};

/**
 * Lista de imágenes placeholder disponibles
 */
export const placeholderImages = [
  "🚀",
  "💻",
  "🎨",
  "📱",
  "⚡",
  "🔧",
  "🌟",
  "🎯",
];

/**
 * Obtiene un emoji placeholder basado en el índice del proyecto
 * @param index - Índice del proyecto
 * @returns Emoji placeholder
 */
export const getPlaceholderEmoji = (index: number): string => {
  return placeholderImages[index % placeholderImages.length];
};
