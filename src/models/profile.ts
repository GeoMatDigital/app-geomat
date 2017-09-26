export class Profile {  crystal_system: string;

  constructor(
    public id: number,
    public mineral_type: {
      id: number,
      classification: {
        classification_name: string
      },
      trivial_name: string,
      systematics: string,
      variety: string,
      minerals: string,
      mohs_scale: string,
      density: string,
      streak: string,
      normal_color: string,
      fracture: string[],
      cleavage: string[],
      lustre: string[],
      chemical_formula: string,
      other: string,
      resource_mindat: string,
      resource_mineralienatlas: string,
      created_at: string,
      last_modified: string
    },
    crystal_system: string,
    temperature: string,
    pressure: string){}
}
