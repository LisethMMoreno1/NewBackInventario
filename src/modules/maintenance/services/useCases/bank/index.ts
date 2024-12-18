/* istanbul ignore file */
import { CreateBankService } from './createBank.service';
import { DeleteBankService } from './deleteBank.service';
import { GetAllBankService } from './getAllBank.service';
import { GetOneBankService } from './getOneBank.service';
import { UpdateBankService } from './updateBank.service';

/**
 * Array of bank services.
 */
export const BankServices = [
  CreateBankService,
  GetAllBankService,
  GetOneBankService,
  UpdateBankService,
  DeleteBankService,
];
