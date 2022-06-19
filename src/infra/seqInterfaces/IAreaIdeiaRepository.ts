import { AreaIdeia } from '../../entities/AreaIdeia'

export interface IAreaIdeiaRepository{
    save(areaIdeia: AreaIdeia): Promise<void>
    findById(id: number): Promise<AreaIdeia>
    delete(id: number): Promise<void>
}
