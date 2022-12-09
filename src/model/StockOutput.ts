import { AbstractEntity } from "./AbstractEntity"
import { Client } from "./Client"
import { Product } from "./Product"

export class StockOutput extends AbstractEntity{
    client!: Client
    product!: Product
    quantityOutput!: number
    saleValue!: number
    departureDate!: Date
    observation!: string
}