export class Mineral_Type  {
  constructor(
    public id: number,
    public classification: {
      classification_name: string
    },
    public trivial_name: string,
    public systematics: string,
    public variety: string,
    public minerals: string,
    public mohs_scale: string,
    public density: string,
    public streak: string,
    public normal_color: string,
    public fracture: string[],
    public cleavage: string[],
    public lustre: string[],
    public chemical_formula: string,
    public other: string,
    public resource_mindat: string,
    public resource_mineralienatlas: string,
    public created_at: string,
    public last_modified: string
  ){}
}
