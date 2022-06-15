db.dropDatabase();

db.usuari.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'mail': 'mail@mail.com',
        'password': '1234',
        'nom': 'roy',
        'datanaixement': '05/03/2017',
        'sexe': 'mascle',
        'pais': 'spain',
        'cp': '43820',
        'subscripcions': { '$ref': 'usuari', '$_id': ObjectId('000000000000000000000002') }
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'mail': 'mail@mail.com',
        'password': '1234',
        'nom': 'kira',
        'datanaixement': '05/03/2010',
        'sexe': 'femella',
        'pais': 'spain',
        'cp': '43820',
        'subscripcions': {
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000001'),
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000003')
        }
    },
    {
        '_id': ObjectId('000000000000000000000003'),
        'mail': 'mail@mail.com',
        'password': '1234',
        'nom': 'tao',
        'datanaixement': '05/03/2012',
        'sexe': 'femella',
        'pais': 'spain',
        'cp': '43820',
        'subscripcions': {
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000001'),
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000002')
        }
    }
]);
db.videos.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'titol': 'gosets',
        'descripcio': 'jugant',
        'grandaria': 20,
        'nom video': 'gossets jugant',
        'thumbnail': 'image',
        'nºreproduccions': 1.000,
        'nºlikes': {
            'nº': 900,
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000001'),
            'date/hour': new Date("2022-01-01T12:02:01")
        },
        'nºdislikes': {
            'nº': 100,
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000002'),
            'date/hour': new Date("2022-01-01T12:02:01")
        },
        'estat': 'public',
        'etiquetes': {
            '$ref': 'etiqueta',
            '$_id': ObjectId('000000000000000000000001'),
            '$ref': 'etiqueta',
            '$_id': ObjectId('000000000000000000000002')
        },
        'publicat per': {
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000001'),
            'data/hora publicacio': new Date("2022-01-01T12:02:01")
        }
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'titol': 'gatets',
        'descripcio': 'jugant',
        'grandaria': 20,
        'nom video': 'gatets jugant',
        'thumbnail': 'image',
        'nºreproduccions': 1.000,
        'nºlikes': {
            'nº': 100,
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000002'),
            'date/hour': new Date("2022-01-01T12:02:01")
        },
        'nºdislikes': {
            'nº': 900,
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000003'),
            'date/hour': new Date("2022-01-01T12:02:01")
        },
        'estat': 'public',
        'etiqueta': [
            { '$_id': ObjectId('000000000000000000000002') },
            { '$_id': ObjectId('000000000000000000000003') }
        ],
        'publicat per': {
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000002'),
            'data/hora publicacio': new Date("2022-01-01T12:02:01")
        }
    },
    {
        '_id': ObjectId('000000000000000000000003'),
        'titol': 'gosets i gatets',
        'descripcio': 'jugant',
        'grandaria': 20,
        'nom video': 'gossets i gatets jugant',
        'thumbnail': 'image',
        'nºreproduccions': 1.000,
        'nºlikes': {
            'nº': 500,
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000003'),
            'date/hour': new Date("2022-01-01T12:02:01")
        },
        'nºdislikes': {
            'nº': 500,
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000002'),
            'date/hour': new Date("2022-01-01T12:02:01")
        },
        'estat': 'public',
        'etiquetes': [
            { '$_id': ObjectId('000000000000000000000001') },
            { '$_id': ObjectId('000000000000000000000003') }
        ],
        'publicat per': {
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000003'),
            'data/hora publicacio': new Date("2022-01-01T12:02:01")
        }
    }
]);
db.etiqueta.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'nom':'bonic'
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'nom':'cadells'
    },
    {
        '_id': ObjectId('000000000000000000000003'),
        'nom':'divertit'
    }
]);
db.canal.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'nom':'canal de gosos',
        'descripcio':'canal amb videos de gosos',
        'data': new Date("2022-01-05T15:02:01") 
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'nom':'canal de gats',
        'descripcio':'canal amb videos de gats',
        'data': new Date("2022-01-05T15:02:01") 
    },
    {
        '_id': ObjectId('000000000000000000000003'),
        'nom':'canal de gosos i gats',
        'descripcio':'canal amb videos de gosos i gats',
        'data': new Date("2022-01-05T15:02:01") 
    }
]);
db.playlist.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'nom':'playlist gosos',
        'datacreacio':new Date("2022-01-08T18:02:01") ,
        'estat':'public'
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'nom':'playlist gats',
        'datacreacio':new Date("2022-01-08T18:02:01") ,
        'estat':'public'
    },
    {
        '_id': ObjectId('000000000000000000000003'),
        'nom':'playlist gosos i gats',
        'datacreacio':new Date("2022-01-08T18:02:01") ,
        'estat':'public'
    }
]);
db.comentari.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'text':'video divertit',
        'data/hora comentari': new Date("2022-02-08T18:02:01") ,
        'agrada a':{
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000001'),
            'date/hour': new Date("2022-04-01T12:02:01")
        },
        'no agrada a':{
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000002'),
            'date/hour': new Date("2022-04-03T12:02:01")
        },
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'text':'video entretingut',
        'data/hora comentari': new Date("2022-03-08T18:02:01") ,
        'agrada a':{
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000002'),
            'date/hour': new Date("2022-04-01T12:02:01")
        },
        'no agrada a':{
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000003'),
            'date/hour': new Date("2022-04-03T12:02:01")
        },
    },
    {
        '_id': ObjectId('000000000000000000000003'),
        'text':'video llarg',
        'data/hora comentari': new Date("2022-03-08T18:02:01") ,
        'agrada a':{
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000003'),
            'date/hour': new Date("2022-04-01T12:02:01")
        },
        'no agrada a':{
            '$ref': 'usuari',
            '$_id': ObjectId('000000000000000000000001'),
            'date/hour': new Date("2022-04-03T12:02:01")
        },
    }
]);