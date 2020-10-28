export default class Moneda {
  /**
   * @param {string} id
   * @param {string} nombre
   * @param {Bandera} bandera
   */
  constructor(id, nombre, bandera) {
    this.id = id;
    this.nombre = nombre;
    this.bandera = bandera;
  }
}
