const { Bitbucket }  = require('bitbucket');

/*
const clientOptions = {
    auth: {
      token: 'NogZyUu4PhYGZcWtidsdA76D',
    },
  }

*/



  const clientOptions = {
    auth: {
      username: 'itechuser',
      password: 'ZgewGMREJdCXJYzExw2f',
    },
  }

/*

  const clientOptions = {
    auth: {
      token: 'dmRzaGluZGUzNjpSTVg1bXZmZkdXVUxVRFNCdGFUcA==',
    },
  }
*/

  const bitBucket = new Bitbucket(clientOptions);

/*

  bitBucket.workspaces.getWorkspaces({pagelen:100})
  .then(response=>{
    console.log(response.data);
    })
  .catch(err => { console.log('er');console.log(err)});
*/

/*

  bitBucket.repositories.list({workspace:'workspaceab'})
  .then(response=> {
      console.log(response);
      response.data.values.map(repo=>{
          const { project, mainbranch, workspace } = repo;
          // console.log('Project' , project);
          //console.log('Main Branch' , mainbranch);
          //console.log('workspace' , workspace);
          console.log(repo);
      });
  })
  .catch(err=> { console.log(err)});
*/


/*

  bitBucket.commits.list({workspace:'workspaceab',repo_slug:'respositorya',pagelen:1})
  .then(response=>{
    console.log(response.data.values);
    response.data.values.forEach(commit=>{
      const { repository, parents, summury, author } = commit;
      //console.log(author);
    });
  })
  .catch(err=>{console.log(err)});
*

/*
  bitBucket.workspaces.getMembersForWorkspace({workspace:'workspaceab',pagelen:1,page:2})
  .then((response)=>{
    console.log(response.data.values);
  })
  .catch((err)=>{
    console.log(err);
  });
*/



/*

const getWorkspaces = async (page=1, data=[])=> {
  console.log('Downloading Page :',page);
  const response = await bitBucket.workspaces.getWorkspaces({pagelen:100, page:page});

  if(response.status !== 200){
    return;
  }
  
  data=Array.prototype.concat.apply(data,response.data.values);

  if(response.data.next){
    return  await getWorkspaces(page+1,data)
  }

  return data;
}

getWorkspaces().then((result)=>{
  console.log('Downloading BitBucket Repository Data : ')
  console.log(result);
  console.log('---------------------------')
});

*/



/*
const getRepository = async (bitBucket, workspaceSlug, page=1, data=[] )=> {
  console.log(`Downloading From Repository : ${workspaceSlug} Page: ${page}`);
  if(!bitBucket){
    logger.info('bitBucket Instance Not Found Exiting.....')
    return;
  }
  const response = await bitBucket.repositories.list({workspace:workspaceSlug})

  if(response.status !== 200){
    return;
  }
  
  data=Array.prototype.concat.apply(data,response.data.values);

  if(response.data.next){
    return  await getRepository(bitbucket,workspaceSlug,page+1,data)
  }

  return data;
}

*/


/*

(async () =>{
  try{
  const resposnse = await bitBucket.pullrequests.list({workspace:'workspaceab',repo_slug:'respositorya', state:'MERGED', state:'OPEN'});
  console.log(resposnse);
  }catch(err){
    console.log(err);
  }

})()
*/

/*
(async () =>{
  try{
  const resposnse = await bitBucket.issue_tracker.list({workspace:'workspaceab',repo_slug:'respositorya'})
  console.log(resposnse.data);
  }catch(err){
    console.log(err);
  }

})();
*/

/*
(async () =>{
  try{
  const resposnse = await bitBucket.workspaces.getProjects({workspace:'workspaceab'})
  console.log(resposnse.data);
  }catch(err){
    console.log(err);
  }

})();
*/




(async () =>{
  try{
    const response = await bitBucket.commitstatuses.list({
      workspace:'workspacebb',
      repo_slug:'blockchainrepo',
      commit:"ac07d216e0dd2157577194bb5f75b037abdeed40"});
  console.log(response.data);
  }catch(err){
    console.log(err);
  }

})();

  