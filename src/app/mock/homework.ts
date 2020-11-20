import set = Reflect.set;

export class Homework {
    id: number;
    dayDate: Date;
    title: string;
    description: string;
    subjectRef: number;
}

class newDate{
    setDate(year, month, day){
        let d = new Date();
        d.setFullYear(year);
        d.setMonth(month);
        d.setDate(day);

        return d;
    }
}

export let HOMEWORKS: Homework[] = [
    { id: 0, dayDate: new newDate().setDate(2020, 11, 29), title: 'Esercizio 1-15', description: 'Lorem ipsum', subjectRef: 1},
    { id: 1, dayDate: new newDate().setDate(2020, 11, 28), title: 'Verifica', description: 'Lorem ipsum', subjectRef: 1},
    { id: 2, dayDate: new newDate().setDate(2020, 11, 27), title: 'Finire ricerca', description: 'Lorem ipsum', subjectRef: 2},
    { id: 3, dayDate: new newDate().setDate(2020, 11, 26), title: 'Portare gomma', description: 'Lorem ipsum', subjectRef: 3},
];



