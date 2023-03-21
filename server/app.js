const express = require('express');
const cors = require('cors');
const router = require('./routes');
const AppError = require('./utils/appError');
const errorHandler = require('./utils/errorHandler');


router.use(api, router);

router.all("*", (req, res, next) => {
 next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
router.use(errorHandler);

const PORT = 8000;
router.listen(PORT, () => {
 console.log(`server running on port ${PORT}`);
});

module.exports = app;