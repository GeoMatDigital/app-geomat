import { Mineral_Type } from './mineral_type';

export class Profile {
  constructor(
    public id: number,
    public mineral_type: Mineral_Type,
    public crystal_system: string,
    public temperature: string,
    public pressure: string){}
}
