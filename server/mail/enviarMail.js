"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const handlebars = __importStar(require("handlebars"));
const nodemailer = __importStar(require("nodemailer"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const environment_1 = require("../globals/environment");
const sendEmail = (email, asunto, data, mailTemplate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mail = nodemailer.createTransport({
            host: environment_1.CONFIG.EMAIL_HOST,
            port: 587,
            auth: {
                user: environment_1.CONFIG.EMAIL_USERNAME,
                pass: environment_1.CONFIG.EMAIL_PASSWORD,
            },
            secure: false
        });
        const source = fs.readFileSync(path.join(__dirname, mailTemplate), "utf8");
        const compiledTemplate = handlebars.compile(source);
        const options = () => {
            return {
                from: environment_1.CONFIG.FROM_EMAIL,
                to: email,
                subject: asunto + ' ' + new Date().toLocaleString(),
                html: compiledTemplate(data),
            };
        };
        // Send email
        mail.sendMail(options(), (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(info);
            }
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=enviarMail.js.map