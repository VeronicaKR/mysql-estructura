
db.dropDatabase();

db.proveidor.insertMany([
  { '_id':1,'nom': 'proveidor1', 'adreça':{'carrer':'c/pepventura','numero':'25','pis':'1','porta':'a','ciutat':'calafell','cp':'43820','pais':'spain'}, 'telefon': 977777777, 'fax': 977777777, 'nif': 'b99999999' },
  { '_id':2,'nom': 'proveidor2', 'adreça':{'carrer':'c/rocboronat','numero':'26','pis':'2','porta':'b','ciutat':'calafell','cp':'43820','pais':'spain' },'telefon': 977777777, 'fax': 977777777, 'nif': 'b99999999' },
  { '_id':3,'nom': 'proveidor3', 'adreça':{'carrer':'c/mariecurie','numero':'27','pis':'3','porta':'c','ciutat':'calafell','cp':'43820','pais':'spain'}, 'telefon': 977777777, 'fax': 977777777, 'nif': 'b99999999' },
  { '_id':4,'nom': 'proveidor4', 'adreça':{'carrer':'c/cadi','numero':'28','pis':'4','porta':'d','ciutat':'calafell','cp':'43820','pais':'spain'}, 'telefon': 977777777, 'fax': 977777777, 'nif': 'b99999999' }
]);
db.createCollection('ulleres');
db.ulleres.insertMany([
{'marca':'tous','gdret':'2.5','gesquerre':'2.5','tipus':'flotant','color':'blau','colorvidre':'blanc','preu':'200', 'proveidor': {'$ref':'proveidor','$_id':1},'client':{'$ref':'clients', '$_id':1}},
{'marca':'rayban','gdret':'2.6','gesquerre':'2.6','tipus':'metalica','color':'blau','colorvidre':'blanc','preu':'300','proveidor': {'$ref':'proveidor','$_id':2},'client':{'$ref':'clients', '$_id':1}},
{'marca':'chinchin','gdret':'2.7','gesquerre':'2.7','tipus':'pasta','color':'blau','colorvidre':'blanc','preu':'400','proveidor': {'$ref':'proveidor','$_id':3},'client':{'$ref':'clients', '$_id':2}},
{'marca':'oackley','gdret':'2.8','gesquerre':'2.8','tipus':'flotant','color':'blau','colorvidre':'blanc','preu':'500','proveidor': {'$ref':'proveidor','$_id':4},'client':{'$ref':'clients', '$_id':3}}
]);
db.createCollection('clients');
db.clients.insertMany([
  {'_id':1,'nom':'Juan','adreça':'av/diagonal','cp':'08222','telefon':'977777777', 'mail':'mail1@mail.com', 'dataregistre': new Date("2022-01-01"), 'recomenat':{'$ref':'clients','$_id':1},'empleatvenda':'Lluis','datavenda': new Date('2022-02-02') },
  {'_id':2,'nom':'Roy','adreça':'av/gracia','cp':'08222','telefon':'977777777', 'mail':'mail1@mail.com', 'dataregistre': new Date("2022-01-02"), 'recomenat':{'$ref':'clients','$_id':1},'empleatvenda':'Lluisa','datavenda': new Date('2022-02-05')},
  {'_id':3,'nom':'kira','adreça':'av/corts','cp':'08222','telefon':'977777777', 'mail':'mail1@mail.com', 'dataregistre': new Date("2022-01-03"), 'recomenat':'no','empleatvenda':'Lluis','datavenda': new Date('2022-02-03')},
  {'_id':4,'nom':'Tao','adreça':'av/artes','cp':'08222','telefon':'977777777', 'mail':'mail1@mail.com', 'dataregistre': new Date("2022-01-04"), 'recomenat':'no','empleatvenda':'Lluis','datavenda': new Date('2022-02-04')}
]);
