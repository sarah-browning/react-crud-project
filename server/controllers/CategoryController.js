const db = require("../connection");

module.exports = {
    // CREATE
    store(req, res, next) {
        db.query(`INSERT INTO categories (title) VALUES (?)`,
            [req.body.category.title],
            (err, result) => {
                console.log("result: "+ JSON.stringify(result));
                if (err) return res.sendStatus(500);
                return res.send({
                    category: {
                        id: result.insertId,
                        title: req.body.category.title                   
                    }
                });
            } 
        );
    },
    // RETRIEVE
    index(req, res, next) {
        db.query(`SELECT * FROM categories`, (err, results) => {
        if (err) return res.sendStatus(500);
        return res.send({ categories: results });
        });
    },
    // UPDATE
    update(req, res, next) {
        db.query(`UPDATE categories SET title=? WHERE id=?`,
            [req.body.category.title, req.params.category],
            (err, result) => {
                if (err) return res.sendStatus(500);
                return res.sendStatus(200);
            }
        );
    },
    // DELETE
    destroy(req, res, next) {
        db.query(`DELETE FROM categories WHERE id=?`,
            [req.params.category],
            (err, result) => {
                if (err) return res.sendStatus(500);
                return res.sendStatus(200);
            }
        );
    }
}