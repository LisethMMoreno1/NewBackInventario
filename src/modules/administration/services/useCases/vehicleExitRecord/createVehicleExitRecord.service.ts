import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VehicleExitRecordRequestDto } from 'src/modules/administration/domain/vehicleExitRecord/DTO/vehicleExitRecord-request.dto';
import { VehicleExitRecordRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleExitRecord.repository';
import { VehicleExitRecord } from 'src/modules/administration/domain/vehicleExitRecord/vehicleExitRecord.entity';
import { VehicleOwnerRepository } from 'src/modules/administration/infrastructure/persistence/repositories/vehicleOwner.repository';
import { OrderRepository } from 'src/modules/administration/infrastructure/persistence/repositories/order.repository';

@Injectable()
export class CreateVehicleExitRecordService {
    constructor(
        @InjectMapper() private readonly _mapper: Mapper,
        private readonly _vehicleExitRecordRepository: VehicleExitRecordRepository,
        private readonly _vehicleOwnerRepository: VehicleOwnerRepository,
        private readonly _orderRepository: OrderRepository,

    ) { }

    async handle(requestDto: VehicleExitRecordRequestDto): Promise<VehicleExitRecord> {

        const vehicleOwner = await this._vehicleOwnerRepository.getOne({
            where: { identificationNumber: requestDto.identificationNumber_vehicleOwner },
        });

        if (!vehicleOwner) {
            throw new Error(`No se encontró el propietario con identificación: ${requestDto.identificationNumber_vehicleOwner}`);
        }


        const order = await this._orderRepository.getOne({
            where: { orderNumber: requestDto.orderNumber_order },
        });

        if (!order) {
            throw new Error(`No se encontró la orden con número: ${requestDto.orderNumber_order}`);
        }


        const vehicleExitRecord = this._mapper.map(requestDto, VehicleExitRecordRequestDto, VehicleExitRecord);


        vehicleExitRecord.vehicleOwner = vehicleOwner;
        vehicleExitRecord.order = order;


        return await this._vehicleExitRecordRepository.save(vehicleExitRecord);
    }
}
