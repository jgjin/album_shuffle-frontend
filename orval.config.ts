import { defineConfig } from "orval"

export default defineConfig({
  album_shuffle: {
    input: {
      target: "./album_shuffle_openapi.json",
    },
    output: {
      client: "react-query",
      target: "src/queries/album_shuffle.ts",
      schemas: "src/models",
    },
    hooks: {
      afterAllFilesWrite: "pnpm prettier",
    },
  },
})
