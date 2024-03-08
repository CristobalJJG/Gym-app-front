export class Training {
    id: number;
    date: string;
    time: string;
    calories: string;

    constructor(id: number, date: string, time: string, calories: string) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.calories = calories;
    }
}