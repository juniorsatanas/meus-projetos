export class Commitment {
    public date : Date;
    public observation : String;

    constructor(date : Date, observation: string) {
        this.date = date || new Date();
        this.observation = observation || 'Random description...';
    }
}
