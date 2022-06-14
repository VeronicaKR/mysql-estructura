
db.dropDatabase();

db.client.insertMany([
    {
        '_idclient': 1,
        'nom': 'Tao',
        'cognom': 'martinez',
        'adreça': 'carrer u',
        'cp': 43820,
        'telefon': 977777777,
        'provincia': {
            '_idprovincia': 1,
            'nom': 'barcelona',
            'localitat': {
                '_idlocalotat': 1,
                'nomlocalitat': 'terrassa'
            }
        }
    },

    {
        '_idclient': 2,
        'nom': 'Roy',
        'cognom': 'sanchez',
        'adreça': 'carrer a',
        'cp': 43820,
        'telefon': 977777777,
        'provincia': {
            '_idprovincia': 2,
            'nom': 'tarragona',
            'localitat': {
                '_idlocalotat': 1,
                'nomlocalitat': 'calafell'
            }
        }
    },

    {
        '_idclient': 3,
        'nom': 'Kira',
        'cognom': 'martinez',
        'adreça': 'carrer c',
        'cp': 43820,
        'telefon': 977777777,
        'provincia': {
            '_idprovincia': 1,
            'nom': 'barcelona',
            'localitat': {
                '_idlocalotat': 1,
                'nomlocalitat': 'artes'
            }
        }
    }
]);

db.categoriapizza.insertMany([
    { '_idpizza': 1, 'nompizza': 'margarita' },
    { '_idpizza': 2, 'nompizza': 'carbonara' }
]);

db.comanda.insertMany([
    {
        '_idcomanda': 1,
        'date/hour': new Date("2022-01-01T11:00:01"),
        'repartir/recollir': 'repartir',
        'quantityproductes': 1,
        'preutotal': 100,
        'client': { '$ref': 'client', '$_idclient': 1 },
        'productes': {
            'id_producte': 1,
            'nomproducte': 'pizza',
            'descripcio': 'pizza margarita',
            'imatge': 'null',
            'preu': 100,
            'categoriapizza': { '$ref': 'categoriapizza', '$_idpizza': 1, '$nompizza': 'margarita' }
        },
        '_idcomanda': 2,
        'date/hour': new Date("2022-01-01T11:00:01"),
        'repartir/recollir': 'repartir',
        'quantityproductes': 2,
        'preutotal': 100,
        'client': { '$ref': 'client', '$_idclient': 1 },
        'productes': {
            'id_producte': 2,
            'nomproducte': 'hamburguesa',
            'descripcio': 'completa',
            'imatge': 'null',
            'preu': 100
        },
        'productes': {
            'id_producte': 3,
            'nomproducte': 'cocacola',
            'descripcio': 'beguda amb gas',
            'imatge': 'null',
            'preu': 100
        }
    }
]);

db.botiga.insertMany([
    {
        '_idbotiga': 1,
        'adreça': 'carrer one',
        'cp': 43820,
        'localitat': 'calafell',
        'provincia': 'tarragona',
        'client': { '$ref': 'client', '$_idclient': 1 },
        'comanda': { '$ref': 'comanda', '$_idcomanda': 1 },
        'empleat': { '$ref': 'empleat', '$_id_empleat': 1 }
    },
    {
        '_idbotiga': 2,
        'adreça': 'carrer two',
        'cp': 43820,
        'localitat': 'calafell',
        'provincia': 'tarragona',
        'client': { '$ref': 'client', '$_idclient': 1 },
        'comanda': { '$ref': 'comanda', '$_idcomanda': 2 },
        'empleat': { '$ref': 'empleat', '$_id_empleat': 2 }
    }
]);

db.empleats.insertMany([
    {
        '_idempleat':1,
        'nom':'veronica',
        'cognom':'martinez',
        'nif':'444444',
        'telefono':97777777,
        
        
    }
]);