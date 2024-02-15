var duckdb = require("duckdb");
const db = new duckdb.Database(":memory:");

/* function connect() {
    db.all(
        "SELECT * FROM postgres_scan('host=dev-all.cg2lgvdeau2i.ap-south-1.rds.amazonaws.com port=5432 user=postgres password=Lionking9 dbname=test-migration','public','environment');",
        function (err, res) {
            console.log("res: ", res);

            if (err) {
                throw err;
            }
        }
    );
} */

async function connect() {
    await attachAdminDB();
    await attachRevDB();

    db.all(
        `select l.name as language_name,m.* from admin_movie_db.movie m inner join rev_movie_db.movie_language ml on m.id=ml.movie_id
        inner join rev_movie_db.language l ON l.id=ml.language_id  order by m.id LIMIT 1;`,
        (err, res) => {
            console.log("res: ", res);
        }
    );
}

connect();

async function attachAdminDB() {
    return new Promise((resolve, reject) => {
        db.all(
            "ATTACH 'host=192.168.10.100 port=3306 user=root password=example database=movie_ticket' as admin_movie_db (TYPE mysql_scanner)",
            (err, res) => {
                if (err) {
                    return reject(err);
                }

                resolve(res);
            }
        );
    });
}

async function attachRevDB() {
    return new Promise((resolve, reject) => {
        db.all(
            "ATTACH 'host=192.168.10.105 port=3306 user=root password=example database=rev_movie_ticket' as rev_movie_db (TYPE mysql_scanner)",
            (err, res) => {
                if (err) {
                    return reject(err);
                }

                resolve(res);
            }
        );
    });
}
