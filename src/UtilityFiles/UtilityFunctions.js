import logger from "./Logger.js";

//returns the id and desc of a section
let getSectionInfo = function(hierarchy, json, fullId="", firstIteration=false){
  logger(json);
  if (!firstIteration){
    fullId+=json.id+"__";
  }
  //if the requested depth is reached set id and desc
  if (hierarchy===null){
    fullId = fullId.substring(0, fullId.length-2);
    let desc = json.desc;
    logger("returning id|desc = "+fullId+"|"+desc);
    return [fullId, desc];
  }
  else{
    let child;
    if(firstIteration) {
      child = json.sections[hierarchy[0]];
    }
    else{
      child = json.children[hierarchy[0]];
    }
    if(hierarchy.length===1){
      hierarchy=null;
    }
    else{
      hierarchy.shift();
    }
    return getSectionInfo(hierarchy, child, fullId);
  }
}

let testFun = () => 1;

export {
  getSectionInfo,
  testFun
}
