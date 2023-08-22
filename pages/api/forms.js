var request = require('request');

function getData(){
    var prom = new Promise(function(resolve, reject){
        var headers = {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'fwQkroul2VVeApK8594HbAYCWGNQQUSqGLCt0c7HlaTLb6UO29t01TAzImmgDYm6'
        };

        var dataString = '{"collection":"ocap","database":"ocapmetrics","dataSource":"Cluster0"}';

        var options = {
            url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-ufybr/endpoint/data/v1/action/findOne',
            method: 'POST',
            headers: headers,
            body: dataString
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
               resolve(body);
            }else{
                resolve('failure');
            }
        }
    });

    return prom;


}
export default async (req, res) => {
   try {
     const data = await getData();
       res.json(data);
   } catch (e) {
       console.error(e);
       res.json('failure')
   }
};