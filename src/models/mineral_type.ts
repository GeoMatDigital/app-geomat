/**
 * Interface of type of mineral
 */
export interface MineralType  {
    /**
     * id of mineral
     */
    id: number,
    /**
     * classification-object of mineral (currently only used for 'silikate')
     */
    classification: {
      /**
       * classification of mineral (currently only used for 'Silikate')
       */
      classification_name: string
    },
    /**
     * trivia name of mineral
     */
    trivial_name: string,
    /**
     * main category of minerals (e.g. 'Silikate und Germanate' or 'Carbonate und Nitrate', etc.)
     */
    systematics: string,
    /**
     * variety of the mineral (e.g.: "Bronzit", "Adular", "Fuchsit")
     */
    variety: string,
    /**
     * Alternative name to trivia name?
     */
    minerals: string,
    /**
     * toughness of mineral
     */
    mohs_scale: string,
    /**
     * density of mineral
     */
    density: string,
    /**
     * streak of mineral
     */
    streak: string,
    /**
     * common color of mineral
     */
    normal_color: string,
    /**
     * fracture of mineral
     */
    fracture: string[],
    /**
     * cleavage of mineral
     */
    cleavage: string[],
    /**
     * lustre of mineral
     */
    lustre: string[],
    /**
     * chemical formula of mineral
     */
    chemical_formula: string,
    /**
     * additional info of mineral (rarely used)
     */
    other: string,
    /**
     * external-link to [Mindat]{@link http://www.mindat.org}
     */
    resource_mindat: string,
    /**
     * Links to external reference of mineral to [Mineralienatlas]{@link https://www.mineralienatlas.de}
     */
    resource_mineralienatlas: string,
    /**
     * date of mineral's creation
     */
    created_at: string,
    /**
     * date of mineral's last modification
     */
    last_modified: string
}

