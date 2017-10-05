import { Mineral_Type } from './mineral_type';

/**
 * Model of mineral of profile-detail page
 */
export class Profile {
  constructor(
    /**
     * id of mineral
     */
    public id: number,
    /**
     * type of mineral
     *
     * [Mineral_Type](@link Mineral_Type)
     */
    public mineral_type: Mineral_Type,
    /**
     * type of crystal-system's abbreviation (e.g. 'TR' for trigonal', 'HG' for 'hexagonal')
     */
    public crystal_system: string,
    /**
     * temperature of mineral (currently not used)
     */
    public temperature: string,
    /**
     * pressure of mineral (currently not used)
     */
    public pressure: string){}
}
