import { environment } from 'src/environments/environment';

export class AppEndpoints {
  static API_URL = environment.API_URL;
  static ADDRESS_DELIVERY = AppEndpoints.API_URL + '/direcciones/delivery';
  static LOCATIONS = AppEndpoints.API_URL + '/direcciones/localidad';
  static LOCATIONS_ALL = AppEndpoints.LOCATIONS + '/all';
  static MANUFACTURED = AppEndpoints.API_URL + '/articulos/manufacturados';
  static SUPPLIES = AppEndpoints.API_URL + '/articulos/insumos';
  static SUPPLIES_ALL = AppEndpoints.SUPPLIES + '/all';
  static CATEGORIES = AppEndpoints.API_URL + '/articulos/categorias';
  static CATEGORIES_ALL = AppEndpoints.CATEGORIES + '/all';
  static RUBROS = AppEndpoints.API_URL + '/articulos/rubros';
  static RUBROS_ALL = AppEndpoints.RUBROS + '/all';
  static ORDERS = AppEndpoints.API_URL + '/comprobantes/ordenes';
  static ORDERS_KITCHEN = AppEndpoints.ORDERS + '/cocina';
  static INVOICES = AppEndpoints.API_URL + '/comprobantes/facturas';
  static STATUS = AppEndpoints.API_URL + '/comprobantes/estados';
  static STATUS_ALL = AppEndpoints.STATUS + '/all';
  static REPORTS = AppEndpoints.API_URL + '/reportes';
  static USERS = AppEndpoints.API_URL + '/usuarios';
  static CUSTOMERS = AppEndpoints.API_URL + '/usuarios/clientes';
  static EMPLOYEES = AppEndpoints.API_URL + '/usuarios/empleados';
  static USERS_ROLES = AppEndpoints.API_URL + '/usuarios/roles';
  static USERS_ROLES_ALL = AppEndpoints.USERS_ROLES + '/all';
}
