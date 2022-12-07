import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import { useMemo } from "react";

import { cache } from "./cache";

let client: ApolloClient<NormalizedCacheObject> | null = null;

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");
  const authorization = (token && `Bearer ${token}`) || "";
  authorization &&
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization,
      },
    }));
  return forward(operation);
});

// TODO: Error link

const httpLink = new HttpLink({
  uri: "https://graphql.anilist.co/",
  credentials: "include",
});

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([authLink, httpLink]),
    cache,
  });
};

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

export const initApollo = (initialState?: NormalizedCacheObject | null) => {
  const _client = client ?? createApolloClient();
  if (initialState) {
    const existingCache = _client.extract();
    const data = merge(existingCache, initialState, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
      ],
    });
    _client.cache.restore(data);
  }
  if (typeof window === "undefined") {
    return _client;
  }
  if (!client) {
    client = _client;
  }
  return _client;
};

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  args: any
) => {
  args[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  return args;
};

export const useApollo = (args?: any) => {
  let state: NormalizedCacheObject | null = null;
  if (args) {
    state = args[APOLLO_STATE_PROP_NAME];
  }
  return useMemo(() => initApollo(state), [state]);
};
