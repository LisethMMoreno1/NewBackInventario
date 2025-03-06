import { AutoMap } from '@automapper/classes';

export class ToolResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;

  @AutoMap()
  type: string;

  @AutoMap()
  code: string;

  @AutoMap()
  description?: string;

  @AutoMap()
  state?: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
