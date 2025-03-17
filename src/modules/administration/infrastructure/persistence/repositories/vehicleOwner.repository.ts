import { HttpException, Injectable, Scope } from '@nestjs/common';
import { VehicleOwner } from 'src/modules/administration/domain/VehicleOwner/VehicleOwner.entity';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { AdministrationContext } from '../context/administrationContext.service';

@Injectable({ scope: Scope.REQUEST })
export class VehicleOwnerRepository {
  constructor(private readonly _context: AdministrationContext) {}

  async getAll(
    options?: GetAllCriteriaType<VehicleOwner>,
  ): Promise<VehicleOwner[]> {
    try {
      return await this._context.vehicleOwner.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async create(VehicleOwner: VehicleOwner): Promise<VehicleOwner> {
    try {
      const VehicleOwnerData =
        await this._context.vehicleOwner.create(VehicleOwner);
      const rawData = VehicleOwnerData?.raw?.[0] ?? {};
      const generatedMaps = VehicleOwnerData?.generatedMaps?.[0] ?? {};
      return {
        ...VehicleOwner,
        ...rawData,
        ...generatedMaps,
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async getOne(
    options: GetOneCriteriaType<VehicleOwner>,
  ): Promise<VehicleOwner | null> {
    try {
      const VehicleOwner = await this._context.vehicleOwner.getOne(options);
      if (!VehicleOwner) {
        throw new HttpException('Usuario no encontrado', 404);
      }
      return VehicleOwner;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }
  async update(
    criteria: UpdateCriteriaType<VehicleOwner>,
    VehicleOwner: VehicleOwner,
  ): Promise<VehicleOwner> {
    try {
      const updateVehicleOwner = await this._context.vehicleOwner.update(
        criteria,
        VehicleOwner,
      );
      return {
        ...VehicleOwner,
        ...(updateVehicleOwner?.raw?.[0] ?? {}),
        ...(updateVehicleOwner?.generatedMaps?.[0] ?? {}),
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async delete(
    criteria: DeleteCriteriaType<VehicleOwner>,
  ): Promise<VehicleOwner | null> {
    try {
      const deleteVehicleOwner =
        await this._context.vehicleOwner.delete(criteria);
      return deleteVehicleOwner?.raw?.[0] ?? null;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async save(
    VehicleOwner: VehicleOwner,
    options?: SaveOptionsType<VehicleOwner>,
  ): Promise<VehicleOwner> {
    try {
      return await this._context.vehicleOwner.save(VehicleOwner, options);
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(`Error de DB: ${error.message}`, 500);
      } else {
        throw new HttpException('Error desconocido', 500);
      }
    }
  }

  async getByIdentificationNumber(id: number): Promise<VehicleOwner | null> {
    return this.getOne({ where: { id } });
  }

  /*   async getByType(type: string): Promise<VehicleOwner[]> {
    try {
      // Usamos find() para filtrar correctamente por la columna 'type'
      return await this._context.vehicleOwner.getAll({ where: { type } });
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  } */

  /*  async getByCode(code: string): Promise<VehicleOwner[]> {
    try {
      // Se utiliza Like para buscar coincidencias parciales en el campo 'code'
      return await this._context.vehicleOwner.getAll({
        where: { code: Like(`%${code}%`) },
      });
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  } */
}
