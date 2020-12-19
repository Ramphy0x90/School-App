import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {HttpClient} from '@angular/common/http';
import {SQLitePorter} from '@ionic-native/sqlite-porter/ngx';

@Injectable({
    providedIn: 'root'
})

export class SqliteDbService {
    public dbObj;
    public tmpNumRows;

    constructor(
        private sqlite: SQLite,
        private httpClient: HttpClient,
        private sqlPorter: SQLitePorter
    ) {
        this.initDb();
    }

    private initDb() {
        this.sqlite.create({name: 'SA_db', location: 'default'})
            .then((db: SQLiteObject) => {
                this.dbObj = db;
                this.createStructure();
            });
    }

    private createStructure() {
        this.httpClient.get(
            'assets/data.sql',
            {responseType: 'text'}
        ).subscribe(data => {
            this.sqlPorter.importSqlToDb(this.dbObj, data).then(r => {
                console.log("Structure ready");
            });
        });
    }

    getNumRows(tableName: String){
        this.dbObj.executeSql(`SELECT COUNT(*) AS count FROM ${tableName}`, [])
            .then(res => {
                this.tmpNumRows = res.rows.item(0).count;
                console.log("AUASID");
                console.log(this.tmpNumRows);
            })
            .catch(errorLastId => console.log(errorLastId));

        console.log(this.tmpNumRows)
    }

    getLastId(tableName: String): number{
        let lastId: number;

        this.dbObj.executeSql(`SELECT MAX(id) FROM ${tableName}`, [])
            .then(res => {
                lastId = res.rows.item(0).id;
            })
            .catch(errorLastId => console.log(errorLastId));

        return lastId;
    }

    public setPassword(password: String){
        if(this.tmpNumRows == 0){
            this.dbObj.executeSql('INSERT INTO credentials(password) VALUES(?)', [password]);
        }else{
            let id = this.getLastId('credentials');
            this.dbObj.executeSql('UPDATE credentials SET password = ? WHERE id = ?', [password, id]);
        }

    }

    public exec(query: String, params: any[]) {
        this.dbObj.executeSql(query, params)
            .then()
            .catch(errorQuery => {
                console.log(errorQuery);
            });
    }

    public getAll() {
        this.dbObj.executeSql('SELECT * FROM credentials', [])
            .then(res => {
                let tmp = [];
                for (let row = 0; row < res.rows.length; row++) {
                    tmp.push({id: res.rows.item(row).id, password: res.rows.item(row).password});
                }

                console.log(tmp);
            })
            .catch(errorSelect => {
               console.log('Select error: ' + errorSelect)
            });
    }
}
