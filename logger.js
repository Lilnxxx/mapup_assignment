import {createLogger,transports,format} from 'winston'
export const logger = createLogger({
    transports:[
        new transports.File({
            filename:'incomingReq.log',
            level:'info',
            format:format.combine(format.timestamp(), format.json())
        })
    ]
})