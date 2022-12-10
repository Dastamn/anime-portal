import { initApollo } from "#root/apollo";
import {
  BaseMediaFragment,
  GetBaseMediaPageDocument,
  GetBaseMediaPageQueryVariables,
} from "#root/types";
import MediaCover from "./MediaCover";

async function getData(variables: GetBaseMediaPageQueryVariables) {
  const client = initApollo();
  return await client.query({ variables, query: GetBaseMediaPageDocument });
}

export default async function MediaList({
  variables,
}: {
  variables: GetBaseMediaPageQueryVariables;
}) {
  const { data } = await getData(variables);
  return data.Page && data.Page.media ? (
    <div>
      {data.Page.media.map((media, i) => (
        <MediaCover key={i} data={media as BaseMediaFragment} />
      ))}
    </div>
  ) : null;
}
