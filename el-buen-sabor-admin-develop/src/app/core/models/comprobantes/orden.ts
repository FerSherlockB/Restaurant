import { Comprobante } from './comprobante';
import { Cliente } from '../usuarios/cliente';
import { DireccionDelivery } from '../direccion/direccion-delivery';
import { Empleado } from '../usuarios/empleado';
import { DetalleOrden } from './detalle-orden';

export interface Orden extends Comprobante {
  aclaraciones: string;
  detalles: Array<DetalleOrden>;
  delivery: boolean;
  tiempoTotalPreparacion: number;
  horarioEntrega: Date;
  cliente: Cliente;
  direccionEntrega: DireccionDelivery;
  repartidor: Empleado;
}
