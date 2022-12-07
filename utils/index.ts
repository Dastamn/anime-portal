import isEqual from "lodash/isEqual";

export const dataObjectEquals = (o1: any, o2: any) =>
  o1.id === o2.id || o1.mediaId === o2.mediaId || isEqual(o1, o2);
