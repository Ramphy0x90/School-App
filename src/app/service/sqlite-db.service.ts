import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {Platform} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {SQLitePorter} from '@ionic-native/sqlite-porter/ngx';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SqliteDbService {
    private sqliteObj: SQLiteObject;
    private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private tableName = 'credentials';

    constructor(
        private platform: Platform,
        private sqlite: SQLite,
        private httpClient: HttpClient,
        private sqlPorter: SQLitePorter
    ) {
        this.platform.ready().then(() => {
            this.createDb();
        });
    }

    getDbStatus(){
        return this.isDbReady.getValue();
    }

    createDb() {
        this.sqlite.create({name: 'data.db', location: 'default'})
            .then((db: SQLiteObject) => {
                this.sqliteObj = db;
                this.populateDb(this.sqliteObj);
            }).catch(e => {
            console.log(e);
        });
    }

    populateDb(database){
        this.httpClient.get(
            'assets/data.sql',
            {responseType: 'text'}
        ).subscribe(data => {
            this.sqlPorter.importSqlToDb(database, data)
                .then(_ => {
                    this.isDbReady.next(true);
                    this.getOnce(1).then(r => console.log(r))
                })
                .catch(error => console.error(error));
        });
    }

    getOnce(id): Promise<String> {
        return this.sqliteObj.executeSql(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id]).then(res => {
            return res.rows.item(0).password
        });
    }
}
