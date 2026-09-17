export class Recipe {
  _name!: string;
  _category?: string;
  _estado!: string;
  _asignado?: string;

  constructor(aName: string) {
    this.name = aName;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get asignado(): string | undefined{
    return this._asignado;
  }

  set asignado(aAsignado: string) {
    this._asignado = aAsignado;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  get estado(): string | undefined {
    return this._estado;
  }

  set estado(aEstado: string) {
    const trimmed = aEstado.trim();
    if (trimmed.length === 0) {
      throw new Error("El estado de la receta no puede ser vacío.");
    }
    this._estado = trimmed;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - Estado: ${this.estado} - Asignado: ${this.asignado}`;
  }
}
