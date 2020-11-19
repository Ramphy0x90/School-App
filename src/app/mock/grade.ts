export let GRADES: Grade[] = [
    {id: 0, score: 1, mark: 4.75, dayDate: new Date(), subjectRed: 1},
    {id: 1, score: 1.5, mark: 5, dayDate: new Date(), subjectRed: 1},
    {id: 1, score: 1, mark: 4.5, dayDate: new Date(), subjectRed: 1},
    {id: 1, score: 1, mark: 4.5, dayDate: new Date(), subjectRed: 2},
    {id: 1, score: 2, mark: 5.5, dayDate: new Date(), subjectRed: 2},
    {id: 1, score: 1.5, mark: 4, dayDate: new Date(), subjectRed: 3},
    {id: 1, score: 1, mark: 3, dayDate: new Date(), subjectRed: 3},
];

export class Grade {
    id: number;
    score: number;
    mark: number;
    dayDate: Date;
    subjectRed: number;
}

