import { PartialType } from '@nestjs/mapped-types';
import { CreateFileExploreDto } from './create-FileExplore.dto';

export class UpdateFileExploreDto extends PartialType(CreateFileExploreDto) {}
