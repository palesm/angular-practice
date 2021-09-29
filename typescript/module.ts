export class Module {
    constructor(private field1?: number, private field2?: number ) {
    }

    log() {
        console.log(this.field1 + this.field2)
    }

}