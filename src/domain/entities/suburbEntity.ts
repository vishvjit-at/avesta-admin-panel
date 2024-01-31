import { ISuburbDto } from "../interfaces/dtos/suburbDto";

export class SuburbEntity {
    constructor(
        private suburbs: ISuburbDto
    ) { }

    getId(): number | undefined {
        return this.suburbs.id;
    }
    getName(): string {
        return this.suburbs.name;
    }
    getState(): string {
        return this.suburbs.state;
    }
    getPostcode(): number {
        return this.suburbs.postcode;
    }
    setId(id: number) {
        this.suburbs.id = id;
    }
    setName(name: string) {
        this.suburbs.name = name;
    }
    setState(state: string) {
        this.suburbs.state = state;
    }
    setPostcode(postcode: number) {
        this.suburbs.postcode = postcode;
    }
}