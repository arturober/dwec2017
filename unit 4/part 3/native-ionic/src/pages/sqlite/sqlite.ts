import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@IonicPage()
@Component({
  selector: 'page-sqlite',
  templateUrl: 'sqlite.html',
})
export class SqlitePage {
  db: SQLiteObject = null;
  error: string = "";
  persons: { id?: number, name: string, age: number }[] = [];
  person: { id?: number, name: string, age: number } = {
    name: "",
    age: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public sqlite: SQLite) {
  }

  ionViewDidLoad() {
    this.sqlite.create({
      name: 'my.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      db.executeSql('CREATE TABLE IF NOT EXISTS person (id integer primary key, name text, age integer)', {}).then(() => {
        db.executeSql('SELECT * FROM person', []).then(resultSet => {
          for (let i = 0; i < resultSet.rows.length; i++) {
            this.persons.push({
              id: resultSet.rows.item(i).id,
              name: resultSet.rows.item(i).name,
              age: resultSet.rows.item(i).age
            });
          }
        });
      }).catch(e => console.error("Can't create table: ", e));
    }).catch(error => {
      console.error("Connection error: ", error);
    });
  }

  ionViewWillUnload() {
    if (this.db !== null) {
      this.db.close();
      this.db = null;
    }
  }

  add() {
    if (this.db === null) return;

    this.db.executeSql('INSERT INTO person (name, age) VALUES (?,?)',
      [this.person.name, this.person.age]).then(res => {
        this.person.id = res.insertId;
        this.persons.push(this.person);
        this.person = { name: "", age: null };
      });
  }

  remove(person, index: number) {
    if (this.db === null) return;

    this.db.executeSql('DELETE FROM person WHERE id = ?',
      [person.id]).then(res => {
        if (res.rowsAffected > 0) {
          this.persons.splice(index, 1);
        }
      });
  }
}
