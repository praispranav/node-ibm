var express = require('express');
var router = express.Router();

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

/* GET home page. */


router.get("/sayHello", function (request, response) {
    var user_name = request.query.user_name;
    console.log(user_name)
    
  
  
    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
      version: '2020-08-01',
      authenticator: new IamAuthenticator({
        apikey: 'vgUJ1QXpzGrShslm2MSm4CfKlt6X8kjqmrua4Su9lSyZ',
      }),
      serviceUrl: 'https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com/instances/80e5674e-3828-4072-b5ee-8d97f6b80089',
    });
    
    var user_name = request.query.user_name;
    console.log(user_name)
    
    const analyzeParams = {
        'url': user_name ,
        'features': {
          'keywords': {
            'sentiment': true,
            'emotion': true,
            'limit': 3
          }
        }
      };
  
  naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
      response.end(JSON.stringify(analysisResults, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });
    
  });

router.get("/sayHello", function (request, response) {
    var user_name = request.query.user_name;
    console.log(user_name)
    
  
  
    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
      version: '2020-08-01',
      authenticator: new IamAuthenticator({
        apikey: 'vgUJ1QXpzGrShslm2MSm4CfKlt6X8kjqmrua4Su9lSyZ',
      }),
      serviceUrl: 'https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com/instances/80e5674e-3828-4072-b5ee-8d97f6b80089',
    });
    
    var user_name = request.query.user_name;
    console.log(user_name)
    
    
const analyzeParams = {
    'html': '<html><head><title>Fruits</title></head><body><h1>Apples and Oranges</h1><p>I love apples! I don\'t like oranges.</p></body></html>',
    'features': {
      'emotion': {
        'targets': [
          'apples',
          'oranges'
        ]
      }
    }
  };
  
  naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
      response.end(JSON.stringify(analysisResults, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });
    
  });
  

module.exports = router;