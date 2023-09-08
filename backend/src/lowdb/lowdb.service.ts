import { Injectable, Global } from '@nestjs/common';
import * as lowdb from 'lowdb';
import * as FileAsync from 'lowdb/adapters/FileAsync';
import { join } from 'path';

@Global()
@Injectable()
export default class LowdbService<T> {
  private db: lowdb.LowdbAsync<T[]>;
  private databaseName: string;

  constructor(databaseName: string) {
    this.databaseName = databaseName;
    this.initialLowdb();
  }

  private async initialLowdb() {
    const path = join(`src/db/${this.databaseName}.json`);
    const adapter = new FileAsync<T[]>(path);
    this.db = await lowdb(adapter);
    const data = await this.findAll();
    if (!data) {
      await this.db.write([]);
    }
  }

  public async findAll() {
    return this.db.filter().value();
  }

  public async find(conditionals: Partial<T>) {
    return this.db.filter(conditionals).value();
  }

  public async findById(id: string | number) {
    return this.db.find({ id }).value();
  }

  public async insert(record: T) {
    // record.id = GenerateIdService.generateRandomId(Array.from(this.findAll()));
  }
}
