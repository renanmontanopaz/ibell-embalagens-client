import { AbstractEntity } from "./AbstractEntity"

export class Administrator extends AbstractEntity {
    username!: string
    password!: string
}