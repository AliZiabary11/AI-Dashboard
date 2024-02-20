export class ComponentInputValidationException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ComponentInputValidationException';
    }
}
