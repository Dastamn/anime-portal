import { InMemoryCache } from "@apollo/client";
import _merge from "deepmerge";

import { dataObjectEquals } from "../lib";

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

export const cache = new InMemoryCache({
  typePolicies: {
    // Queries
    Query: {
      fields: {
        Page: {
          keyArgs: false,
          merge(existing, incoming) {
            return _merge(existing, incoming, {
              arrayMerge: (destinationArray, sourceArray) => [
                ...sourceArray,
                ...destinationArray.filter(d =>
                  sourceArray.every(s => !dataObjectEquals(d, s))
                ),
              ],
            });
          },
        },
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
