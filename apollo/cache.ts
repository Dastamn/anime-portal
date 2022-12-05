import { InMemoryCache } from "@apollo/client";
import _ from "lodash";

import { compareObjects } from "../utils";

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
            if (!existing || _.isEmpty(existing)) {
              return incoming;
            }
            const merged = _.cloneDeep(existing);
            Object.entries(incoming).forEach(
              ([k, v]: [string, any]) =>
                (merged[k] = v
                  ? !!merged[k]
                  : _.unionWith(merged[k], v, compareObjects))
            );
            return merged;
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
