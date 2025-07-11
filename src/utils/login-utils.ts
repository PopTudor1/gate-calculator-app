const part1 = import.meta.env.VITE_PART1;
const part2 = import.meta.env.VITE_PART2;

function decodeBase64(str: string) {
  try {
    return atob(str);
  } catch {
    return "";
  }
}

// Combine decoded parts to get full password
export const ACCESS_PASSWORD = decodeBase64(part1) + decodeBase64(part2);
