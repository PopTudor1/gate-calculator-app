/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PART1: string;
  readonly VITE_PART2: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
