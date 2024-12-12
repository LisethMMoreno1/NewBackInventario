/* istanbul ignore file */
import { Request } from 'express';
import { ENTITY_MANAGER_KEY } from 'src/common/interceptors/transaction.interceptor';
import { DataSource, EntityManager, Repository } from 'typeorm';

/* istanbul ignore next */
/**
 * A base class representing a repository.
 */
export class BaseRepository {
  /**
   * Constructor
   * @param dataSource - The data source.
   * @param request - The request object.
   */
  constructor(
    private dataSource: DataSource,
    private request: Request,
  ) {}

  /**
   * Retrieves a repository for the specified entity.
   * @param entityCls - The entity class.
   * @returns The repository
   * @template T - The entity type.
   */
  protected getRepository<T>(entityCls: new () => T): Repository<T> {
    const entityManager: EntityManager =
      this.request[ENTITY_MANAGER_KEY] ?? this.dataSource.manager;
    return entityManager.getRepository(entityCls);
  }
}
