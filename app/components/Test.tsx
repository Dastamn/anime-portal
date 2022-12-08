import { initApollo } from "../../apollo";
import {
  GetMediaPageDocument,
  MediaSeason,
  MediaSort,
} from "../../gql/graphql";

async function getData() {
  const client = initApollo();
  return client.query({
    query: GetMediaPageDocument,
    variables: {
      perPage: 5,
      sort: MediaSort.PopularityDesc,
      season: MediaSeason.Winter,
      seasonYear: 2022,
    },
  });
}

export default async function Test() {
  const data = await getData();
  return <div>{JSON.stringify(data.data)}</div>;
}
