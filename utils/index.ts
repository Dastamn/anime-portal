import _ from "lodash";

export const compareObjects = (o1: any, o2: any) =>
  o1.id === o2.id || o1.mediaId === o2.mediaId || _.isEqual(o1, o2);
