
db.dropDatabase();

db.client.insertMany([
    {
        '_id': ObjectId('000000000000000000000001'),
        'nom': 'Tao',
        'cognom': 'martinez',
        'adreça': 'carrer u',
        'cp': 43820,
        'telefon': 977777777,
        'provincia': {
            '_id': ObjectId('000000000000000000000001'),
            'nom': 'barcelona',
            'localitat': {
                '_id': ObjectId('000000000000000000000001'),
                'nomlocalitat': 'terrassa'
            }
        }
    },

    {
        '_id': ObjectId('000000000000000000000002'),
        'nom': 'Roy',
        'cognom': 'sanchez',
        'adreça': 'carrer a',
        'cp': 43820,
        'telefon': 977777777,
        'provincia': {
            '_id': ObjectId('000000000000000000000002'),
            'nom': 'tarragona',
            'localitat': {
                '_id': ObjectId('000000000000000000000001'),
                'nomlocalitat': 'calafell'
            }
        }
    },

    {
        '_id': ObjectId('000000000000000000000003'),
        'nom': 'Kira',
        'cognom': 'martinez',
        'adreça': 'carrer c',
        'cp': 43820,
        'telefon': 977777777,
        'provincia': {
            '_id': ObjectId('000000000000000000000001'),
            'nom': 'barcelona',
            'localitat': {
                '_id': ObjectId('000000000000000000000001'),
                'nomlocalitat': 'artes'
            }
        }
    }
]);

db.categoriapizza.insertMany([
    { '_id': ObjectId('000000000000000000000001'), 
    'nompizza': 'margarita' },
    { '_id': ObjectId('000000000000000000000002'),
    'nompizza': 'carbonara' }
]);

db.comanda.insertMany([
    
        {
        '_id': ObjectId('000000000000000000000001'),
        'date/hour': new Date("2022-01-01T11:00:01"),
        'servei':{'servei':'repartir','ref':'empleats','$_id': ObjectId('000000000000000000000001'),'dataentrega': new Date("2022-01-03T11:03:01")},
        'quantityproductes': 1,
        'preutotal': 100,
        'client':{ '$ref': 'client', '$_id': ObjectId('000000000000000000000001') },
        'productes': {
            '_id': ObjectId('000000000000000000000001'),
            'nomproducte': 'pizza',
            'descripcio': 'pizza margarita',
            'imatge': 'null',
            'preu': 100,
            'categoriapizza': { '$ref': 'categoriapizza', '$_idpizza': ObjectId('000000000000000000000001'), '$nompizza': 'margarita' }
        }
    },{
        '_id': ObjectId('000000000000000000000002'),
        'date/hour': new Date("2022-01-01T12:02:01"),
        'servei':{'servei':'recollir'},
        'quantityproductes': 2,
        'preutotal': 100,
        'client': { '$ref': 'client', '$_id': ObjectId('000000000000000000000001') },
        'productes': {
            '_id': ObjectId('000000000000000000000002'),
            'nomproducte': 'hamburguesa',
            'descripcio': 'completa',
            'imatge': 'null',
            'preu': 100
        },
        'productes': {
            '_id': ObjectId('000000000000000000000003'),
            'nomproducte': 'cocacola',
            'descripcio': 'beguda amb gas',
            'imatge': 'null',
            'preu': 100
        },
    },

]);

db.botiga.insertMany([
    {
        '_id': ObjectId('000000000000000000000003'),
        'adreça': 'carrer one',
        'cp': 43820,
        'localitat': 'calafell',
        'provincia': 'tarragona',
        'client': { '$ref': 'client', '$_id': ObjectId('000000000000000000000001') },
        'comanda': { '$ref': 'comanda', '$_id': ObjectId('000000000000000000000001') }
    },
    {
        '_id': ObjectId('000000000000000000000002'),
        'adreça': 'carrer two',
        'cp': 43820,
        'localitat': 'calafell',
        'provincia': 'tarragona',
        'client': { '$ref': 'client', '$_id': ObjectId('000000000000000000000001') },
        'comanda': { '$ref': 'comanda', '$_id': ObjectId('000000000000000000000002') }
    }
]);

db.empleats.insertMany([
    {
        '_id':ObjectId('000000000000000000000001'),
        'nom':'veronica',
        'cognom':'martinez',
        'nif':'444444',
        'telefono':97777777,
        'cuiner/repartidor':'cuiner',
        'botiga': { '$ref': 'botiga', '$_id': ObjectId('000000000000000000000002') }
    },
    {
        '_id':ObjectId('000000000000000000000002'),
        'nom':'carlos',
        'cognom':'martinez',
        'nif':'444444',
        'telefono':97777777,
        'cuiner/repartidor':'repartidor',
        'botiga': { '$ref': 'botiga', '$_id': ObjectId('000000000000000000000003') }
    }
]);
