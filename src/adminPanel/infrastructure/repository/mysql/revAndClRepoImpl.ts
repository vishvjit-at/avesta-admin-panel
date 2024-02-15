require("dotenv").config();
import { Database } from "duckdb-async";
import { IRevAndClRepo } from "../../../domain/interfaces/repos/revAndClRepo";

export class RevAndClRepoImpl implements IRevAndClRepo {
  private static db: Database;

  public static async getDbInstance(): Promise<Database> {
    if (!this.db) {
      this.db = await Database.create(":memory:");
      await this.attachRevDB(this.db);
      await this.attachClDB(this.db);
      await this.attachAdminDB(this.db);
    }
    return this.db;
  }

  async getDataByGnafIds<T>(gnafIds: string[]): Promise<T> {
    try {
      const db = await RevAndClRepoImpl.getDbInstance();
      const data = await db.all("select * from rev_db.agencies limit 10");
      return data as T;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  static async attachRevDB(db: Database) {
    const { REV_DB_NAME, REV_DB_USER, REV_DB_PASS, REV_DB_HOST } = process.env;

    await db.all(
      `ATTACH 'host=${REV_DB_HOST} port=3306 user=${REV_DB_USER} password=${REV_DB_PASS} database=${REV_DB_NAME}' as rev_db (TYPE mysql_scanner)`
    );
  }

  static async attachClDB(db: Database) {
    const { CL_DB_NAME, CL_DB_USER, CL_DB_PASS, CL_DB_HOST } = process.env;

    db.all(
      `ATTACH 'host=${CL_DB_HOST} port=3306 user=${CL_DB_USER} password=${CL_DB_PASS} database=${CL_DB_NAME}' as cl_db (TYPE mysql_scanner)`
    );
  }
  static async attachAdminDB(db: Database) {
    const { DB_USER, DB_PASS, DB_HOST, DB_DEV_DB_NAME } = process.env;

    db.all(
      `ATTACH 'host=${DB_HOST} port=3306 user=${DB_USER} password=${DB_PASS} database=${DB_DEV_DB_NAME}' as admin_db (TYPE mysql_scanner)`
    );
  }
}
