export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/Profile_Desa_Genengsari")) return path;
  const basePath = process.env.NODE_ENV === "production" ? "/Profile_Desa_Genengsari" : "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
