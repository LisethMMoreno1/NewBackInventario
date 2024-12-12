import { AutoMap } from '@automapper/classes';

/**
 * Represents the paginated response DTO
 */
export class PaginatedResponseDto<T> {
  /**
   * Paginated data
   */
  @AutoMap()
  public data: T[];

  /**
   * Total pages
   */
  @AutoMap()
  public total: number;

  /**
   * Current page
   */
  @AutoMap()
  public currentPage: number;

  /**
   * Next page
   */
  @AutoMap()
  public nextPage: number;

  /**
   * Previous page
   */
  @AutoMap()
  public previousPage: number;

  /**
   * Last page
   */
  @AutoMap()
  public lastPage: number;

  /**
   * Limit
   */
  @AutoMap()
  public limit: number;
}
