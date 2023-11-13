import winston from 'winston';
import {log} from "../config/config"

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${level}:[${timestamp}] ${message}`;
});

const logger = winston.createLogger({
    level: log.level, //aqui activamos modo debug
    format: winston.format.combine(
        winston.format.timestamp({ format: "DD/MMM/YYYY:HH:mm:ss ZZ" }),
        myFormat
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.timestamp({ format: "DD/MMM/YYYY:HH:mm:ss ZZ" }),
            myFormat
        ),
    }));
}

export default logger;