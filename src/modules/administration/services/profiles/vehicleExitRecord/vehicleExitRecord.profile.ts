import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { VehicleExitRecordResponseDto } from '../../../domain/vehicleExitRecord/DTO/vehicleExitRecord-response.dto';
import { VehicleExitRecord } from '../../../domain/vehicleExitRecord/vehicleExitRecord.entity';
import { OrderResponseDto } from '../../../domain/order/DTO/order-response.dto';
import { Order } from '../../../domain/order/order.entity';
import { VehicleOwnerResponseDto } from '../../../domain/vehicleOwner/DTO/vehicleOwner-response.dto';
import { VehicleOwner } from '../../../domain/vehicleOwner/vehicleOwner.entity';
import { VehicleExitRecordRequestDto } from 'src/modules/administration/domain/vehicleExitRecord/DTO/vehicleExitRecord-request.dto';

@Injectable()
export class VehicleExitRecordProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      // Mapeo de Request DTO a Entity
      createMap(
        mapper,
        VehicleExitRecordRequestDto,
        VehicleExitRecord,
        forMember(
          dest => dest.vehicleOwner,
          mapFrom((src) => src.identificationNumber_vehicleOwner ? { identificationNumber: src.identificationNumber_vehicleOwner } as VehicleOwner : null)
        ),
        forMember(
          dest => dest.order,
          mapFrom((src) => src.orderNumber_order ? { orderNumber: src.orderNumber_order } as Order : null)
        )
      );

      // Mapeo de Entity a Response DTO
      createMap(
        mapper,
        VehicleExitRecord,
        VehicleExitRecordResponseDto,
        forMember(
          dest => dest.vehicleOwner,
          mapFrom(src => src.vehicleOwner
            ? mapper.map(src.vehicleOwner, VehicleOwner, VehicleOwnerResponseDto)
            : null
          )
        ),
        forMember(
          dest => dest.order,
          mapFrom(src => src.order
            ? mapper.map(src.order, Order, OrderResponseDto)
            : null
          )
        )
      );
    };
  }
}
