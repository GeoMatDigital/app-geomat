
/**
 * Model of a mineral
 */
export class Mineral_Type  {
  constructor(
    /**
     * id of mineral
     */
    public id: number,
    /**
     * classification-object of mineral (currently only used for 'silikate')
     */
    public classification: {
      /**
       * classification of mineral (currently only used for 'Silikate')
       */
      classification_name: string
    },
    /**
     * trivia name of mineral
     */
    public trivial_name: string,
    /**
     * main category of minerals (e.g. 'Silikate und Germanate' or 'Carbonate und Nitrate', etc.)
     */
    public systematics: string,
    /**
     * variety of the mineral (e.g.: "Bronzit", "Adular", "Fuchsit")
     */
    public variety: string,
    /**
     * Alternative name to trivia name?
     */
    public minerals: string,
    /**
     * toughness of mineral
     */
    public mohs_scale: string,
    /**
     * density of mineral
     */
    public density: string,
    /**
     * streak of mineral
     */
    public streak: string,
    /**
     * common color of mineral
     */
    public normal_color: string,
    /**
     * fracture of mineral
     */
    public fracture: string[],
    /**
     * cleavage of mineral
     */
    public cleavage: string[],
    /**
     * lustre of mineral
     */
    public lustre: string[],
    /**
     * chemical formula of mineral
     */
    public chemical_formula: string,
    /**
     * additional info of mineral (rarely used)
     */
    public other: string,
    /**
     * external-link to [Mindat]{@link http://www.mindat.org}
     */
    public resource_mindat: string,
    /**
     * Links to external reference of mineral to [Mineralienatlas]{@link https://www.mineralienatlas.de}
     */
    public resource_mineralienatlas: string,
    /**
     * date of mineral's creation
     */
    public created_at: string,
    /**
     * date of mineral's last modification
     */
    public last_modified: string
  ) {}
}
