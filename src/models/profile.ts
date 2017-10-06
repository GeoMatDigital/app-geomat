import { MineralType } from './mineral_type';

/**
 * Interface of mineral of profile-detail page
 */
export interface Profile {
    /**
     * id of mineral
     */
    id: number,
    /**
     * type of mineral
     *
     * [Mineral_Type](@link Mineral_Type)
     */
    mineral_type: MineralType,
    /**
     * type of crystal-system's abbreviation (e.g. 'TR' for trigonal', 'HG' for 'hexagonal')
     */
    crystal_system: string,
    /**
     * temperature of mineral (currently not used)
     */
    temperature: string,
    /**
     * pressure of mineral (currently not used)
     */
    pressure: string
}
