import { AbstractEntity } from "./AbstractEntity"
import { Product } from "./Product"
import { Provider } from "./Provider"

export class StockInput extends AbstractEntity{
    product!: Product
    provider!: Provider
    costValue!: number
    inputQuantity!: number
    dateEntry!: Date
    observation!: string
}