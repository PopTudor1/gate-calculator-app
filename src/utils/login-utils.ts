// Password parts, base64-encoded separately for extra obfuscation
const part1 = "S25pZ2h0"; // base64 for "Knight"
const part2 = "c1hPcmRlcg=="; // base64 for "sXOrder"

function decodeBase64(str: string) {
  try {
    return atob(str);
  } catch {
    return "";
  }
}

// Combine decoded parts to get full password
export const ACCESS_PASSWORD = decodeBase64(part1) + decodeBase64(part2);
