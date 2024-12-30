import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CityResponseDto } from 'src/modules/maintenance/domain/cities/DTO/cities-responce.dto';
import { Department } from 'src/modules/maintenance/domain/department/department.entity';
import { DepartmentRequestDto } from 'src/modules/maintenance/domain/department/DTO/department-request.dto';
import { DepartmentResponseDto } from 'src/modules/maintenance/domain/department/DTO/department-response.dto';
import { GetCitiesByCodeService } from 'src/modules/maintenance/services/useCases/cities/getCitiesByCode.service';
import { CreateDepartmentService } from 'src/modules/maintenance/services/useCases/department/createDepartment.service';
import { DeleteDepartmentService } from 'src/modules/maintenance/services/useCases/department/deleteDepartment.service';
import { GetAllDepartmentService } from 'src/modules/maintenance/services/useCases/department/getAllDepartment.service';
import { GetOneDepartmentService } from 'src/modules/maintenance/services/useCases/department/getOneDepartment.service';
import { UpdateDepartmentService } from 'src/modules/maintenance/services/useCases/department/updateDepartment.service';

@ApiTags('Departments')
@Controller('departments')
export class DepartmentsController {
  constructor(
    private readonly _createDepartmentService: CreateDepartmentService,
    private readonly _updateDepartmentService: UpdateDepartmentService,
    private readonly _getOneDepartmentService: GetOneDepartmentService,
    private readonly _getAllDepartmentService: GetAllDepartmentService,
    private readonly _deleteDepartmentService: DeleteDepartmentService,
    private readonly _getCitiesByCodeService: GetCitiesByCodeService,
  ) {}

  @Post('create')
  async create(
    @Body() departmentRequestDto: DepartmentRequestDto,
  ): Promise<DepartmentResponseDto> {
    return await this._createDepartmentService.handle(departmentRequestDto);
  }

  @Get()
  async getAll(): Promise<DepartmentResponseDto[]> {
    return await this._getAllDepartmentService.handle();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Department> {
    return this._getOneDepartmentService.handle(id);
  }

  @Get(':code_city')
  async getCitiesByCode(
    @Param('code_city') code_city: number,
  ): Promise<CityResponseDto[]> {
    return this._getCitiesByCodeService.handle(code_city);
  }

  @Put(':id')
  async update(
    @Param('id') id_department: number,
    @Body() departmentRequestDto: DepartmentRequestDto,
  ): Promise<DepartmentResponseDto> {
    const updatedDepartment = await this._updateDepartmentService.handle(
      id_department,
      departmentRequestDto,
    );

    return updatedDepartment;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    try {
      await this._deleteDepartmentService.delete(id);
    } catch (error) {
      console.error('Error en el controlador al eliminar departamento:', error);
      throw new InternalServerErrorException(
        `Error al eliminar el departamento: ${error.message}`,
      );
    }
  }
}
