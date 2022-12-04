// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const _noKeyFieldTypes = [
  "MediaConnection",
  "CharacterConnection",
  "StaffConnection",
  "StudioConnection",
  "AiringScheduleConnection",
  "MediaTrendConnection",
  "ReviewConnection",
  "RecommendationConnection",
  "MediaStats",
];

const cache = new InMemoryCache({
  typePolicies: {
    // Queries
    Query: {
      fields: {
        Page: {
          keyArgs: false,
          merge(existing = {}, incoming) {
            if (!existing) {
              return incoming;
            }
            const merged: { [x: string]: any } = {};
            for (const key of Object.keys(incoming)) {
              if (key == "pageInfo" || !existing[key]) {
                merged[key] = incoming[key];
              } else {
                const acc = existing[key].slice();
                for (let i = 0; i < incoming[key].length; i++) {
                  acc[acc.length + i] = incoming[key][i];
                }
                merged[key] = acc;
              }
            }
            return merged;
          },
        },
        // media: {
        //   read(_, { args, toReference }) {
        //     return toReference({
        //       __typename: "Media",
        //       id: args?.id,
        //     });
        //   },
        // },
      },
    },
    // Objects
    Page: {
      keyFields: [],
    },
    MediaTitle: {
      keyFields: ["romaji"],
    },
    MediaCoverImage: {
      keyFields: ["medium", "large"],
    },
    ..._noKeyFieldTypes.reduce(
      (acc, curr) => ({ ...acc, [curr]: { keyFields: false } }),
      {}
    ),
    Media: {
      fields: {
        type: {
          read(name: string) {
            return name.toLowerCase();
          },
        },
        // TODO: process airing date
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://flyby-gateway.herokuapp.com/",
  // uri: 'https://anilist.co/graphiql',
  cache,
});

export default () =>
  client
    .query({
      query: gql`
        query GetLocations {
          locations {
            id
            name
            description
            photo
          }
        }
      `,
    })
    .then(result => console.log(result));
