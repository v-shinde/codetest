let regEx = new RegExp('^BITBUCKET');


console.log(regEx.test('BITBUCKET_COMMIT_PULL'));
console.log(regEx.test('BITBUCKET_COMMIT'));
console.log(regEx.test('GITLAB_COMMIT'));