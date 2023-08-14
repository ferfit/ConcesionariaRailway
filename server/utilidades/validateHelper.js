"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateResult = void 0;
const express_validator_1 = require("express-validator");
const ValidateResult = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        next();
    }
    catch (error) {
        res.status(403);
        res.send({ errors: error.array() });
    }
};
exports.ValidateResult = ValidateResult;
//# sourceMappingURL=validateHelper.js.map