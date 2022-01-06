/**
 * write serach condition that will CONCAT column
 */




/**
 * algorithm to search db using serach string
 * 
 * 1 transform query string such that all spaces must be replace %
 */
const query = {
    search:'vaibhav Shinde'
}

const searchGroup = {
    ColumnGroup:[['firstName','middleName','lastName'],['phoneNumber']]
}



function addSerachCondition(query,searchGroup){
    let statement = `(1=1)`;
    let transformedQuery = transformQueryString(query.search);
    let concatArray = createConcatArray(createColesceArray(searchGroup));

     console.log(concatArray);
    if (!query.search){
        return statement;
    }
    if(concatArray.length === 0){
        return `(1=1)`
    }else{
        concatArray.forEach((element,index)=>{
            if(concatArray.length === 1){
                statement+= 'LIKE '+transformedQuery+')';
            }else{
                if(concatArray.length-1 === index){
                    statement+= 'LIKE '+transformedQuery+')'
                }else{
                    statement+= 'LIKE '+transformedQuery+ ' OR';
                }
            }
        });
    }

     

     

     return statement;

}


const collesceArray = [[
      "COALESCE(firstName,'')",
      "COALESCE(middleName,'')",
      "COALESCE(lastName,'')"],
    
 [ "COALESCE(phoneNumber,'')" ]];
 


function getConactString(array){
    let format = `CONCAT(`;
    array.forEach((element,index)=>{
        if(array.length === 1){
            format+=element+`)`
        }else{
            
            if(array.length-1 === index){
                format+=element+')'
            }else{
                format+=element+`,`
            }
        }
    });
    return format
}



function createColesceArray(searchGroup){
    let coleseceFormat = `COALESCE($,'')`;
     const coleseceFormatArr = [];
    if(searchGroup.ColumnGroup.length === 0){
        return [];
    } else {
        statement = `(CONCAT(COALESCE(`
        searchGroup.ColumnGroup.forEach((group,cindex)=>{
            coleseceFormatArr.push([]);
            group.forEach((column,index)=>{
                coleseceFormatArr[cindex].push(coleseceFormat.replace('$',column));
            });
        });
    }
    return coleseceFormatArr;
}


function createConcatArray (concelArray) {
    let arr = [];

    concelArray.forEach(element=>{
        if(element.length > 0){
            arr.push(getConactString(element));
        }
    });
    return arr;
}






function transformQueryString(query){
    if(!query.search){
        return ''
    }
    return `%${query.trim().replace(" ", "%").replace('.','%')}%`
}


//console.log(transformQueryString('john ree'));
//console.log(transformQueryString('jo re'));
//console.log(transformQueryString('john rees'));
//console.log(transformQueryString('j%%%r'));
//console.log(transformQueryString('johnreese'));
//console.log(transformQueryString('mr . '));
//console.log(transformQueryString(' '));

//console.log(addSerachCondition('',searchGroup));


//console.log(getConactString(collesceArray1));

//console.log(getConactString([]));

console.log(addSerachCondition(collesceArray));
