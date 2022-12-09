import { AbstractEntity } from "./AbstractEntity"

export class Provider extends AbstractEntity{
    name!: string
    cnpjCpf!: string
    phoneNumber!: string
    address!: string
    email!: string
    observation!: string
}