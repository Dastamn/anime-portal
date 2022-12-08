import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://anilist.co/graphql",
  documents: ["apollo/**/*.{gql,graphql}"],
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
