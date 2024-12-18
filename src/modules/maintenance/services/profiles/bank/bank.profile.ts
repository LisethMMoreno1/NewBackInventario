import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Department } from 'src/modules/maintenance/domain/department/department.entity';
import { DepartmentRequestDto } from 'src/modules/maintenance/domain/department/DTO/department-request.dto';
import { DepartmentResponseDto } from 'src/modules/maintenance/domain/department/DTO/department-response.dto';

/**
 * User profile
 */
@Injectable()
export class DepartmentProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, Department, DepartmentResponseDto);
      createMap(mapper, DepartmentRequestDto, Department);
    };
  }
}
