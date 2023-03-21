const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllEntries = (req, res, next) => {
    conn.query("SELECT * FROM MYDATA", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        id: PersonID,
        latname: LastName,
        firstname: FirstName,
        address: Address,
        city: City
      });
    });
   };


   exports.createEntries = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.id, req.body,LastName, req.body.firstname, req.body.address, req.body.city];
    conn.query(
      "INSERT INTO MYDATA VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "Entry created!",
        });
      }
    );
   };

   exports.getEntries = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No Entries id found", 404));
    }
    conn.query(
      "SELECT * FROM MYDATA WHERE id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
            id: PersonID,
            latname: LastName,
            firstname: FirstName,
            address: Address,
            city: City
        });
      }
    );
   };