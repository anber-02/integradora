import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateDireccionDto } from 'src/modules/direccion/dto/create-direccion.dto';

export class CreateEmpresaDto {
  @IsString()
  @MinLength(5)
  nombre: string;

  @IsString()
  @MinLength(3)
  tipo: string;

  @IsString()
  @MinLength(3)
  giro: string;

  @IsString()
  @MinLength(3)
  razon_social: string;

  @IsString()
  sector: string;

  @ValidateNested()
  @Type(() => CreateDireccionDto)
  direccion: CreateDireccionDto;

  @IsBoolean()
  verificada: boolean;

  @IsString()
  @MinLength(5)
  size: string;

  @IsString()
  @MinLength(5)
  ubicacion: string;

  usuario_id: number;
}
