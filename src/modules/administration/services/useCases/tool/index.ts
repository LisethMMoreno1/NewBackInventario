import { CreateToolService } from './createTool.service';
import { DeleteToolService } from './deleteTool.service';
import { GetAllCodeService } from './getAllCode.service';
import { GetAllToolService } from './getAllTool.service';
import { GetAllTypeService } from './getAlltype.service';
import { GetOneToolService } from './getOneTool.service';
import { UpdateToolService } from './updateTool.service';

/**
 * Array of module services.
 */
export const ToolServices = [
  CreateToolService,
  DeleteToolService,
  GetAllToolService,
  GetOneToolService,
  UpdateToolService,
  GetAllTypeService,
  GetAllCodeService,
];
