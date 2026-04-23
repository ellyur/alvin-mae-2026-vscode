type CloudinaryOptions = {
  quality?: number | string;
  width?: number;
  height?: number;
  format?: 'auto' | 'webp' | 'avif';
  crop?: 'fill' | 'fit' | 'scale' | 'limit';
  gravity?: 'auto' | 'face' | 'center';
};

export function optimizeCloudinaryUrl(url: string, options: CloudinaryOptions = {}): string {
  const {
    quality = 'auto:good',
    width,
    height,
    format = 'auto',
    crop = 'limit',
    gravity = 'auto'
  } = options;

  const transformations: string[] = [];

  if (format) transformations.push(`f_${format}`);
  if (quality) transformations.push(`q_${quality}`);
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop && (width || height)) transformations.push(`c_${crop}`);
  if (gravity && crop === 'fill') transformations.push(`g_${gravity}`);

  const transformString = transformations.join(',');

  if (url.includes('/upload/')) {
    return url.replace('/upload/', `/upload/${transformString}/`);
  }
  
  return url;
}

export function optimizeCloudinaryVideo(url: string, options: { quality?: string; width?: number } = {}): string {
  const {
    quality = 'auto:good',
    width = 1920
  } = options;

  const transformations = [
    `q_${quality}`,
    `w_${width}`,
    'c_limit',
    'f_auto'
  ].join(',');

  if (url.includes('/upload/')) {
    return url.replace('/upload/', `/upload/${transformations}/`);
  }
  
  return url;
}

export function getResponsiveImageSet(url: string, sizes: number[] = [640, 768, 1024, 1280, 1920]) {
  return sizes.map(size => ({
    src: optimizeCloudinaryUrl(url, { width: size, quality: 'auto:good' }),
    width: size
  }));
}
