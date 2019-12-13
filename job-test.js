var Job = require('./job.js')
var job = new Job()

// TODO: Implement so you can get data back from the magic job and console.log it
job.on('finished', function(){console.log(magicData)})
