





const query = 'vaibhav Shinde'

const searchGroup = {
    ColumnGroup:[['firstName','middleName','lastName'],['phoneNumber']]
}



function addSerachCondition(query,searchGroup){
    let statement = `(1=1)`;
    let transformedQuery = transformQueryString(query);
    let collesceArr = createColesceArray(searchGroup);
    
    let concatArray = createConcatArray(collesceArr);
    
    console.log(concatArray);
    if (!query.search){
        return statement;
    }
    if(concatArray.length === 0){
        return `(1=1)`
    }else{
        statement='';
        concatArray.forEach((element,index)=>{
            if(concatArray.length === 1){
                statement+= '( '+element+' LIKE '+transformedQuery+')';
            }else{
                if(concatArray.length-1 === index){
                    statement+= '( '+element+' LIKE '+transformedQuery+')'
                }else{
                    statement+= '( '+element+ ' LIKE '+transformedQuery+ ' ) OR ';
                }
            }
        });
    }

     

     

     return statement;

}




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


function createConcatArray (concelArray) {
    let arr = [];

    concelArray.forEach(element=>{
        if(element.length > 0){
            arr.push(getConactString(element));
        }
    });
    return arr;
}



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
        searchGroup.ColumnGroup.forEach((group,cindex)=>{
            coleseceFormatArr.push([]);
            group.forEach((column,index)=>{
                coleseceFormatArr[cindex].push(coleseceFormat.replace('$',column));
            });
        });
    }
    return coleseceFormatArr;
}


function transformQueryString(query){
    if(!query){
        return ''
    }
    return `%${query.trim().replace(" ", "%").replace('.','%')}%`
}



console.log(addSerachCondition(query,searchGroup));






( CONCAT(COALESCE(firstName,''),COALESCE(middleName,''),COALESCE(lastName,'')) LIKE %vaibhav%Shinde% ) OR ( CONCAT(COALESCE(phoneNumber,'')) LIKE %vaibhav%Shinde%)