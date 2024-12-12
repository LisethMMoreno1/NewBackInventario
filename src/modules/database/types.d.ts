import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectId,
  SaveOptions,
} from 'typeorm';

/**
 * Represents the type of criteria that can be used for updating entities.
 * It can be a string, number, Date, string array, number array, Date array,
 * FindOptionsWhere object, ObjectId, or ObjectId array.
 *
 * @template E - The type of the entity.
 */
export type UpdateCriteriaType<E> =
  | string
  | number
  | Date
  | string[]
  | number[]
  | Date[]
  | FindOptionsWhere<E>
  | ObjectId
  | ObjectId[];

/**
 * Represents the type of criteria that can be used for deleting entities.
 * It can be a string, number, Date, string array, number array, Date array,
 * FindOptionsWhere object, ObjectId, or ObjectId array.
 *
 * @template E - The type of the entity.
 */
export type DeleteCriteriaType<E> = CriteriaType<E>;

/**
 * Represents the type of criteria that can be used for getting entities.
 * It can be a string, number, Date, string array, number array, Date array,
 * FindOptionsWhere object, ObjectId, or ObjectId array.
 *
 * @template E - The type of the entity.
 */
export type GetAllCriteriaType<E> = FindManyOptions<E>;

/**
 * Represents the type of criteria that can be used for getting a single entity.
 * It can be a string, number, Date, string array, number array, Date array,
 * FindOptionsWhere object, ObjectId, or ObjectId array.
 *
 * @template E - The type of the entity.
 */
export type GetOneCriteriaType<E> = FindOneOptions<E>;

/**
 * Represents the type of criteria that can be used for getting entities.
 * It can be a string, number, Date, string array, number array, Date array,
 * FindOptionsWhere object, ObjectId, or ObjectId array.
 *
 * @template E - The type of the entity.
 */
export type SaveOptionsType<E> = SaveOptions<E>;
