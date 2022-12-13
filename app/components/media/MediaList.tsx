import { initApollo } from "#root/apollo";
import {
  BaseMediaFragment,
  GetBaseMediaPageDocument,
  GetBaseMediaPageQueryVariables,
} from "#root/types";
import { List } from "../List";
import MediaCover from "./MediaCover";

interface MediaListProps {
  title: string;
  link?: string;
  variables: GetBaseMediaPageQueryVariables;
}

async function getData(variables: GetBaseMediaPageQueryVariables) {
  const client = initApollo();
  return await client.query({ variables, query: GetBaseMediaPageDocument });
}

export default async function MediaList({
  title,
  link,
  variables,
}: MediaListProps) {
  const { data } = await getData(variables);
  return data.Page && data.Page.media ? (
    <List title={title} link={link}>
      {data.Page.media.map((media, i) => (
        <MediaCover key={i} data={media as BaseMediaFragment} />
      ))}
    </List>
  ) : null;
}
