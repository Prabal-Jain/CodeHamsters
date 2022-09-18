// const { exec } = require("child_process");
const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}


function executeCpp(filepath) {
  const jobId = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}.out`);

  return new Promise(function(resolve, reject) {
    try{
    childProcess.exec(`g++ ${filepath} -o ${outPath} && ./${outPath} `, function(error, standardOutput, standardError) {
      if (error) {
        console.log("error>>>>>>>>>>>>>>>>>",error)
        reject();
    
        return;
      }
    
      if (standardError) {
        console.log("standError",standardError)
        reject(standardError);
    
        return;
      }
    console.log("stroutput>>>>>>>>>>>>>>>",standardOutput)
      resolve(standardOutput);
    })}catch(error){
      console.log("errrrrooorrr>>>>>>>>>>>>>>>>")
    }
  })
}

module.exports = {
  executeCpp,
};
