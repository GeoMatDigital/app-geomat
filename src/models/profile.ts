/**
 * Interface of mineral of profile-detail page
 */
export interface Profile {
  id: number,

  classification: {
  classification_name: string
  },
  systematics: string,
  fracture: string[],
  cleavage: [
  {
    cleavage: string,
    coordinates:string
  }],
  lustre: string[],
  crystal_system: [
  {
    id: number,
    mineral_type: number,
    crystal_system: string,
    temperature: null,
    pressure: null
  }],
  image_file: {
  large: string,
    medium: string,
    small: string,
    thumbnail: string,
    original: string
  },
  trivial_name: string,
  variety: string,
  minerals: string,
  mohs_scale: number,
  density: number,
  streak: string,
  normal_color: string,
  chemical_formula: string,
  other: string,
  resource_mindat: string,
  resource_mineralienatlas: string,
  created_at: string,
  last_modified: string
}
