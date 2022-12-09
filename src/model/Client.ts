import { AbstractEntity } from "./AbstractEntity"

export class Client extends AbstractEntity{
    name!: string
    cnpjCpf!: string
    phoneNumber!: string
    address!: string
    email!: string
    observation!: string
}