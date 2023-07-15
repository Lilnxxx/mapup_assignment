import * as turf from '@turf/turf'
import ls from '../linesj.js'

export const intersect=async(req,res)=>{
    if(!req.headers.authorization)
    return res.status(403).json({ error: 'No credentials sent!' });

    if(req.body==null)return res.status(404).json({ error: 'No body available' });
    
    const linestr=req.body
    // console.log(req.body)
    var cp=[]
    try {
        for(var i=0;i<ls.length;i++){
            var line3 =turf.lineString(ls[i].line.coordinates)
            var intersects = turf.lineIntersect(line3, linestr);
            if(intersects.features.length>0)
                cp.push(intersects)
        }    
    } catch (error) {
        return res.status(403).json({ error: 'Invalid LineString' });
    }
    res.status(200).json(cp)
}

export const intersect2=(req,res)=>{
    // var line1 = turf.lineString([[-74.0386542, 40.7302174],
    //     [-74.038756, 40.7295611]]);
    // var line2 = turf.lineString([[-123, -18], [-131, -14]]);
    var cp=[]
    for(var i=0;i<ls.length;i++){
        var line3 =turf.lineString(ls[i].line.coordinates)
        var intersects = turf.lineIntersect(line3, linestr);
        cp.push(intersects)
    }
    // console.log(ls[0])
    res.status(200).json(cp)
}
