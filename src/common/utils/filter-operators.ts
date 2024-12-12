/**
 * Defines the possible filter operators that can be used for querying entities.
 * Each operator corresponds to a specific TypeORM condition.
 */
export type FilterOperators<T> = {
  $eq?: T;
  $ne?: T;
  $gt?: T;
  $lt?: T;
  $gte?: T;
  $lte?: T;
  $in?: T[];
  $con?: string;
  $sw?: string;
  $ew?: string;
};
