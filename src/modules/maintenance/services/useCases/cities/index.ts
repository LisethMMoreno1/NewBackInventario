/* istanbul ignore file */
import { CreateCityService } from './createCities.service';
import { DeleteCityService } from './deleteCities.service';
import { GetAllCityService } from './getAllCities.service';
import { GetCitiesByCodeService } from './getCitiesByCode.service';
import { GetOneCityService } from './getOneCities.service';
import { UpdateCityService } from './updateCities.service';

/**
 * Array of City services.
 */
export const CityServices = [
  CreateCityService,
  GetAllCityService,
  GetOneCityService,
  UpdateCityService,
  DeleteCityService,
  GetCitiesByCodeService,
];
