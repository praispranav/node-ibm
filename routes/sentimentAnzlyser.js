const express = require('express');
const router = express.Router()
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');








router.get('/sayHello',(req,res)=>{
  var user_name = request.query.user_name;
  console.log(user_name)

  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2020-08-01',
    authenticator: new IamAuthenticator({
      apikey: 'vgUJ1QXpzGrShslm2MSm4CfKlt6X8kjqmrua4Su9lSyZ',
    }),
    serviceUrl: 'https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com/instances/80e5674e-3828-4072-b5ee-8d97f6b80089',
  });

  const analyzeParams = {
  'features': {
    'syntax': {
      'sentences': true,
      'tokens': {
        'lemma': true,
        'part_of_speech': true
      }
    }
  },
  'text': user_name
};

naturalLanguageUnderstanding.analyze(analyzeParams)
  .then(analysisResults => {
    console.log(JSON.stringify(analysisResults, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

})



