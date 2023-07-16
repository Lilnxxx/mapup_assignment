import * as turf from '@turf/turf'
import ls from '../linesj.js'
import { logger } from '../logger.js';

export const intersect=async(req,res)=>{
    //no credentials error
    if(!req.headers.authorization){
        logger.log('error','No credentials sent')
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    // no body error
    if(req.body==null){
        logger.log('error','No Body available')
        return res.status(404).json({ error: 'No body available' });
    }
    
    const linestr=req.body
    var cp=[]
    //checking for intersection of which of the 50 lines 
    //intersect with the linestring from POST request
    try {
        for(var i=0;i<ls.length;i++){
            var line3 =turf.lineString(ls[i].line.coordinates)
            var intersects = turf.lineIntersect(line3, linestr);
            //here we are pushing only when intersection happens
            if(intersects.features.length>0)
                cp.push(intersects)
        }    
    } catch (error) {
        logger.log('error','Invalid Linestring')
        return res.status(403).json({ error: 'Invalid LineString' });
    }
    logger.log('info',req.body)
    res.status(200).json(cp)
}

export const home=(req,res)=>{
    res.send('hello world how are you')
}

