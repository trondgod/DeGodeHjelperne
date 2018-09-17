export class Today {
    public currentCount = 0;
    public dateFormatted: string = "";
    
    constructor() {
        const today = new Date();
        this.dateFormatted = today.toLocaleDateString('nb-NO', { weekday: 'long' }) + " " +
                             today.getDate() + " " + today.toLocaleDateString('nb-NO', { month: 'long' });
    }

    //    
    // Converts a day number to a string.
    //
    // @method dayOfWeekAsString
    // @param {Number} dayIndex
    // @return {Number} Returns day as number
    dayOfWeekAsString(dayIndex: number) {
        return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayIndex];
    }

    public incrementCounter() {
        this.currentCount++;
    }
}
