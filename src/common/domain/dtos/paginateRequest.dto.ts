import { AutoMap } from '@automapper/classes';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

/**
 * Represents the pagination request DTO without query.
 */
export class PaginateRequestDto {
  /**
   * Current page.
   */
  @AutoMap()
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  public currentPage: number;

  /**
   * Limit.
   */
  @AutoMap()
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  public limit: number;
}
