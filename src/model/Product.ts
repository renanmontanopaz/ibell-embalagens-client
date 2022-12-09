import { AbstractEntity } from "./AbstractEntity"
import { UnitMeasure } from "./enum/UnitMeasure"
import { Provider } from "./Provider"

export class Product extends AbstractEntity {
    code!: string
    productName!: string
    quantity!: number
    unitValue!: number
    profitPercentage!: number
    unitMeasure!: UnitMeasure
    provider!: Provider
    observation!: string
}