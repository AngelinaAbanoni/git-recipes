export class Recipe {
  _name!: string;
  _category!: string;
  _description!: string;
  _preparationTime?: number;

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

  get description(): string | undefined {
    return this._description;
  }

  set description(aDescription: string) {
    const trimmedDes = aDescription.trim();
    if(trimmedDes.length === 0){
      throw new Error("La descripcioooon no puede no tener nadaaaa.");
    }
    this._description = trimmedDes;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    const trimmedCat = aCategory.trim();
    if(trimmedCat.length === 0){
      throw new Error("La categoria no puede no tener nadaaaa.");
    }
    this._category = trimmedCat;
  }

  get preparationTime(): number | undefined {
    return this._preparationTime;
  }

  set preparationTime(aPreparationTime: number) {
    if (aPreparationTime < 0) {
      throw new Error("El tiempo de preparación no puede ser negativo.");
    }
    this._preparationTime = aPreparationTime;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - descripción: ${this.description} - tiempo de preparación: ${this.preparationTime} minutos`;
  }
}
