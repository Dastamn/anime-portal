import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://anilist.co/graphql",
  documents: ["apollo/**/*.{gql,graphql}"],
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
