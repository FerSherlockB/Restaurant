import { Base } from '../base';

export interface Rubro extends Base {
  imagen: string;
  denominacion: string;
  rubroPadre: Rubro;
}
