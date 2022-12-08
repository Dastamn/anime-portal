/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "fragment mediaTitle on MediaTitle {\n  romaji\n  english\n  userPreferred\n  native\n}\n\nfragment mediaCover on MediaCoverImage {\n  color\n  large\n  extraLarge\n}\n\nfragment nextAiringEpisode on AiringSchedule {\n  id\n  episode\n  airingAt\n  timeUntilAiring\n}\n\nfragment mediaListEntryStatus on MediaList {\n  id\n  status\n}\n\nfragment mediaListEntry on MediaList {\n  ...mediaListEntryStatus\n  score(format: POINT_100)\n  repeat\n  progress\n  progressVolumes\n}": types.MediaTitleFragmentDoc,
    "fragment pageInfo on PageInfo {\n  total\n  perPage\n  currentPage\n  lastPage\n  hasNextPage\n}\n\nfragment date on FuzzyDate {\n  day\n  month\n  year\n}": types.PageInfoFragmentDoc,
    "query getMediaPage($page: Int, $perPage: Int, $type: MediaType, $sort: [MediaSort], $season: MediaSeason, $seasonYear: Int, $status: MediaStatus, $status_in: [MediaStatus], $status_not_in: [MediaStatus]) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      ...pageInfo\n    }\n    media(\n      type: $type\n      sort: $sort\n      season: $season\n      seasonYear: $seasonYear\n      status: $status\n      status_in: $status_in\n      status_not_in: $status_not_in\n    ) {\n      id\n      title {\n        ...mediaTitle\n      }\n      genres\n      status\n      nextAiringEpisode {\n        ...nextAiringEpisode\n      }\n      mediaListEntry {\n        ...mediaListEntryStatus\n      }\n    }\n  }\n}\n\nquery getMedia {\n  Media(id: 1) {\n    id\n    title {\n      ...mediaTitle\n    }\n  }\n}": types.GetMediaPageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment mediaTitle on MediaTitle {\n  romaji\n  english\n  userPreferred\n  native\n}\n\nfragment mediaCover on MediaCoverImage {\n  color\n  large\n  extraLarge\n}\n\nfragment nextAiringEpisode on AiringSchedule {\n  id\n  episode\n  airingAt\n  timeUntilAiring\n}\n\nfragment mediaListEntryStatus on MediaList {\n  id\n  status\n}\n\nfragment mediaListEntry on MediaList {\n  ...mediaListEntryStatus\n  score(format: POINT_100)\n  repeat\n  progress\n  progressVolumes\n}"): (typeof documents)["fragment mediaTitle on MediaTitle {\n  romaji\n  english\n  userPreferred\n  native\n}\n\nfragment mediaCover on MediaCoverImage {\n  color\n  large\n  extraLarge\n}\n\nfragment nextAiringEpisode on AiringSchedule {\n  id\n  episode\n  airingAt\n  timeUntilAiring\n}\n\nfragment mediaListEntryStatus on MediaList {\n  id\n  status\n}\n\nfragment mediaListEntry on MediaList {\n  ...mediaListEntryStatus\n  score(format: POINT_100)\n  repeat\n  progress\n  progressVolumes\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment pageInfo on PageInfo {\n  total\n  perPage\n  currentPage\n  lastPage\n  hasNextPage\n}\n\nfragment date on FuzzyDate {\n  day\n  month\n  year\n}"): (typeof documents)["fragment pageInfo on PageInfo {\n  total\n  perPage\n  currentPage\n  lastPage\n  hasNextPage\n}\n\nfragment date on FuzzyDate {\n  day\n  month\n  year\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getMediaPage($page: Int, $perPage: Int, $type: MediaType, $sort: [MediaSort], $season: MediaSeason, $seasonYear: Int, $status: MediaStatus, $status_in: [MediaStatus], $status_not_in: [MediaStatus]) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      ...pageInfo\n    }\n    media(\n      type: $type\n      sort: $sort\n      season: $season\n      seasonYear: $seasonYear\n      status: $status\n      status_in: $status_in\n      status_not_in: $status_not_in\n    ) {\n      id\n      title {\n        ...mediaTitle\n      }\n      genres\n      status\n      nextAiringEpisode {\n        ...nextAiringEpisode\n      }\n      mediaListEntry {\n        ...mediaListEntryStatus\n      }\n    }\n  }\n}\n\nquery getMedia {\n  Media(id: 1) {\n    id\n    title {\n      ...mediaTitle\n    }\n  }\n}"): (typeof documents)["query getMediaPage($page: Int, $perPage: Int, $type: MediaType, $sort: [MediaSort], $season: MediaSeason, $seasonYear: Int, $status: MediaStatus, $status_in: [MediaStatus], $status_not_in: [MediaStatus]) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      ...pageInfo\n    }\n    media(\n      type: $type\n      sort: $sort\n      season: $season\n      seasonYear: $seasonYear\n      status: $status\n      status_in: $status_in\n      status_not_in: $status_not_in\n    ) {\n      id\n      title {\n        ...mediaTitle\n      }\n      genres\n      status\n      nextAiringEpisode {\n        ...nextAiringEpisode\n      }\n      mediaListEntry {\n        ...mediaListEntryStatus\n      }\n    }\n  }\n}\n\nquery getMedia {\n  Media(id: 1) {\n    id\n    title {\n      ...mediaTitle\n    }\n  }\n}"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;