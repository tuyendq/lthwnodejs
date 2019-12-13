// weekly.js

var Job = require('./jobs.js')
var job = new Job()

job.on('finished', function(anythinghere){
    console.log('Weekly email job was completed at', anythinghere.completedOn)
    // job.removeAllListeners()
})

// job.process()
job.emit('begin')