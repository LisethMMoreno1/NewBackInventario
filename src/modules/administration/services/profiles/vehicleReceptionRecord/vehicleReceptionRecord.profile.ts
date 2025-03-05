/* import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { VehicleReceptionRecordRequestDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-request.dto';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { VehicleReceptionRecordResponseDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-response.dto';

@Injectable()
export class VehicleReceptionRecordProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        VehicleReceptionRecordRequestDto,
        VehicleReceptionRecord,
        forMember(
          (dest) => dest.arrivalDate,
          mapFrom((src) => new Date(src.arrivalDate)),
        ),
        forMember(
          (dest) => dest.arrivalCondition,
          mapFrom((src) => src.arrivalCondition),
        ),
        forMember(
          (dest) => dest.diagnosis,
          mapFrom((src) => src.diagnosis),
        ),
        forMember(
          (dest) => dest.diagnosisCost,
          mapFrom((src) => src.diagnosisCost),
        ),
        forMember(
          (dest) => dest.repairProposals,
          mapFrom((src) => src.repairProposals),
        ),
        forMember(
          (dest) => dest.invoiceDetails,
          mapFrom((src) => src.invoiceDetails),
        ),
        forMember(
          (dest) => dest.contractSigned,
          mapFrom((src) => src.contractSigned),
        ),
        forMember(
          (dest) => dest.advancePayment,
          mapFrom((src) => src.advancePayment),
        ),
      );

      createMap(
        mapper,
        VehicleReceptionRecord,
        VehicleReceptionRecordResponseDto,
        forMember(
          (dest) => dest.arrivalDate,
          mapFrom((src) => src.arrivalDate),
        ), // Se mantiene como Date
        forMember(
          (dest) => dest.arrivalCondition,
          mapFrom((src) => src.arrivalCondition),
        ),
        forMember(
          (dest) => dest.diagnosis,
          mapFrom((src) => src.diagnosis),
        ),
        forMember(
          (dest) => dest.diagnosisCost,
          mapFrom((src) => src.diagnosisCost),
        ),
        forMember(
          (dest) => dest.repairProposals,
          mapFrom((src) => src.repairProposals),
        ),
        forMember(
          (dest) => dest.invoiceDetails,
          mapFrom((src) => src.invoiceDetails),
        ),
        forMember(
          (dest) => dest.contractSigned,
          mapFrom((src) => src.contractSigned),
        ),
        forMember(
          (dest) => dest.advancePayment,
          mapFrom((src) => src.advancePayment),
        ),
      );
    };
  }
}
 */

import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { VehicleReceptionRecordRequestDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-request.dto';
import { VehicleReceptionRecordResponseDto } from 'src/modules/administration/domain/VehicleReceptionRecord/DTO/VehicleReceptionRecord-response.dto';
import { VehicleReceptionRecord } from 'src/modules/administration/domain/vehicleReceptionRecord/vehicleReceptionRecord.entity';

/**
 * Tool profile
 */
@Injectable()
export class VehicleReceptionRecordProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        VehicleReceptionRecord,
        VehicleReceptionRecordResponseDto,
      );
      createMap(
        mapper,
        VehicleReceptionRecordRequestDto,
        VehicleReceptionRecord,
      );
    };
  }
}
