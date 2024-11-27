const operatorGroups = {
        //online
        group1: [
            "64b9f0b4fb8ac2000791bdf5", "64f9a5ce497aae00072272d9", "63b3efa4404b850007958a15", "63b3e957cbeb9e00077e0b00", "63b3ec1c1c479800078b30a9", "65e82d974762c6000828f9f3",
            "65e82d974762c6000828f9f3", "63a178ec2f38ad00073547cd", "6684ed9ec3b6f40007a37fb5", "6374b615ca567c000a8876d3", "6694e074810f60000725abf4", "63b4d50b1c479800078cb50e",
            "64f9a5ce497aae00072272d9", "66c5c6f406d9db00070e0444", "632c08de89794f00087992d5", "64d5a374b62fa60007be03e2", "63dc9ed580937b0007da0191", "66fce88860e52e0007397e51",
            "6454a224b19bca000727d7a1", "63b3ec1c1c479800078b30a9", "638d52315c95780008099128", "63ca6fb50528f10007ff4db5", "63cab0b1ec83650009475dcc"


/*
            //chathurika
            "6374b615ca567c000a8876d3", "64d5b4c8b62fa60007bfc628", "64faafc28e07fd00088ccd6b", "6430d39c71a31b0007ac34b6", "66c6e5737fdb630007b306ea", "66fcf5df7fdb630007ada1da",
            "63a178ec2f38ad00073547cd", "63a26d921c479800077ab7a9", "6410075ec28d0b00073da7fc", "660130ba981a920037d56be7", "66cee35206d9db0007d5b924", "6592883385ac190007d56b4d",
            "65a509cdcfb164000c8028ee", "634e09b4d903190007bbd30c", "64d4bf8f9f99820007a8600d", "66d6c48306d9db0007739485", "66d583c19719680007cfd549", "65d3f44aabd2d300079a6107",
            "66d2b20006d9db000733fc58",


            //lishmi
            "63b40a58f4bf470009740fad", "6387250a264ab00007504988", "66ba04b4ba809f00072b7817", "63a275de2f38ad00073701ef", "63c8e17bec8365000943fe29", "6406938eb6cd670007ce5304",
            "65adf70a85ac1900073fb30c", "66c2ed57726c7800072b59dd"

*/
        ],

        //both centers
        group2: [
            "64b9f0b4fb8ac2000791bdf5", "64f9a5ce497aae00072272d9", "63cf53b610e96b0007f63705", "63db8383ce98f90009e73a89", "644b885e7ed4a80008504cc3", "6374a8f9ca567c000a8857c9",
            "63b3e957cbeb9e00077e0b00", "63b3ec1c1c479800078b30a9", "63b3efa4404b850007958a15", "65e82d974762c6000828f9f3", "65b8d6e0abd2d300072d998c", "6389b12db22ea10007635d7e",
            "63b3c426404b8500079542d9", "66160f91290a110007d5a85b", "63b52722e62a350008ab4bdd", "63b3e8e8cbeb9e00077e09f7", "63c8e8bdfb75450008883928", "6441314fa1cfd9000778468b",
            "64950eacc0af480008f76f1c", "6502c0d2e643c40007e9d895", "65013f4563eccc0007cdd663", "63a178ec2f38ad00073547cd", "65e82d974762c6000828f9f3", "6684ed9ec3b6f40007a37fb5",
            "63a2baa747dece0008557929", "632c0c27001c270007a4da07", "63a16f2f2f38ad0007353478", "634e295f92ff250007d2a0dd", "63a420961c479800077d9368", "63dc60a40f4dbd0008dfbfa2",
            "644b87a5b3df700007315941", "6374b615ca567c000a8876d3", "64f9a5ce497aae00072272d9", "6694e074810f60000725abf4", "66c5c6f406d9db00070e0444", "6374a150eaea9d000707e9de",
            "63749f1c43f05f0007c6c9dc", "6374a8f9ca567c000a8857c9", "63b4dc0bf4bf470009755fb7", "63ec8d31059ec600086b380a", "632c08de89794f00087992d5", "638d52315c95780008099128",
            "63b3ec1c1c479800078b30a9", "63ca6fb50528f10007ff4db5", "63dc9ed580937b0007da0191", "6454a224b19bca000727d7a1", "66fce88860e52e0007397e51", "6389947e887f860008d100c4",
            "632287a716c5be0007f5c049", "63350cf03151e10008148823", "63dc6a787057620007770367", "645369676426920007c6eeae", "659278865587c900073a62ba", "6655a5ab8892c2000757955f","63f5a9278902880007c007c5", "63214f7c5d77ca000868b860", "63cab0b1ec83650009475dcc", "66139de5e60b1f0007bdfd0e", "63899e1ebeaeab0007cfd35d", "63ca236e0a829f00077414cd", "63c9081bec83650009444b91", "63c9222eec83650009448f9c", "63cab50670aec800070c3050", "649ccbd220ffca000718b467", "64950649a4fc5400079ee444"

        ],

        ///team
        group3: [
            "66c2fa2a06d9db0007b1d083", "65e82d974762c6000828f9f3", "63b3e957cbeb9e00077e0b00", "63b3ec1c1c479800078b30a9", "63dc9ed580937b0007da0191", "63b3edc0cbeb9e00077e1539",
            "658aa9325587c90007e4cd18", "65891bcc7226880007f29d05", "63dd27e4adbf4c0009f631c7", "66f392a443927a0008adad6d", "66f38b1c4370970007a82236", "650c288b13595c003734651c",
            "6718c8db681b1d0007bded26", "63b4d50b1c479800078cb50e", "64f9a5ce497aae00072272d9", "66c5c6f406d9db00070e0444", "6721f0fd2bdee70020ac2a14", "63cab0b1ec83650009475dcc"

        ],

        //COTY(LUXURY)IT
        group4: [
            "64b9f0b4fb8ac2000791bdf5", "64f9a5ce497aae00072272d9", "63cf53b610e96b0007f63705", "63db8383ce98f90009e73a89", "644b885e7ed4a80008504cc3", "6374a8f9ca567c000a8857c9"

        ],

        //NESTLEPT
         group5: [
            "63b3e957cbeb9e00077e0b00", "63b3ec1c1c479800078b30a9", "63b3efa4404b850007958a15", "65e82d974762c6000828f9f3", "65b8d6e0abd2d300072d998c", "6389b12db22ea10007635d7e",
            "63b3c426404b8500079542d9", "66160f91290a110007d5a85b", "63b52722e62a350008ab4bdd", "63b3e8e8cbeb9e00077e09f7", "63c8e8bdfb75450008883928", "6441314fa1cfd9000778468b",
            "64950eacc0af480008f76f1c", "6502c0d2e643c40007e9d895", "65013f4563eccc0007cdd663"


        ],

        //JDE Spain
         group6: [
           "63a178ec2f38ad00073547cd", "65e82d974762c6000828f9f3", "6684ed9ec3b6f40007a37fb5", "63a2baa747dece0008557929", "632c0c27001c270007a4da07", "63a16f2f2f38ad0007353478",
           "634e295f92ff250007d2a0dd", "63a420961c479800077d9368", "63dc60a40f4dbd0008dfbfa2", "644b87a5b3df700007315941"

        ],

        //COTY(PROFBEAUTY)GLOBAL
         group7: [
            "6374b615ca567c000a8876d3", "64f9a5ce497aae00072272d9", "6694e074810f60000725abf4", "66c5c6f406d9db00070e0444", "6374a150eaea9d000707e9de", "63749f1c43f05f0007c6c9dc",
             "6374a8f9ca567c000a8857c9", "63b4dc0bf4bf470009755fb7", "63ec8d31059ec600086b380a"

        ],

        //General Mills ME
         group8: [
            "632c08de89794f00087992d5", "638d52315c95780008099128", "63b3ec1c1c479800078b30a9", "63ca6fb50528f10007ff4db5", "63dc9ed580937b0007da0191", "6454a224b19bca000727d7a1",
             "66fce88860e52e0007397e51", "6389947e887f860008d100c4", "632287a716c5be0007f5c049", "63350cf03151e10008148823", "63dc6a787057620007770367", "645369676426920007c6eeae",
             "659278865587c900073a62ba", "6655a5ab8892c2000757955f"

        ],
        group9: [
            "63f5a9278902880007c007c5", "63214f7c5d77ca000868b860", "63cab0b1ec83650009475dcc", "66139de5e60b1f0007bdfd0e", "63899e1ebeaeab0007cfd35d", "63ca236e0a829f00077414cd", "63c9081bec83650009444b91", "63c9222eec83650009448f9c", "63cab50670aec800070c3050", "649ccbd220ffca000718b467", "64950649a4fc5400079ee444"


        ]
    };


const projectColors = {
        'BAT Sweden - Rollout': '#4CAF50',
        'Beiersdorf DE Mass - Rollout': '#2196F3',
        'Beiersdorf Spain - RollOut': '#9C27B0',
        'CCEP BE (Vending) - Rollout': '#FF5722',
        'CCEP Fr': '#607D8B',
        'Coty Dach - Rollout': '#795548',
        'Coty Italy Luxury - Rollout': '#E91E63',
        'Coty Luxe France - Rollout': '#00BCD4',
        'Coty Pro Beauty': '#00BCD4',
        'Coty SP Luxury - Pilot': '#3F51B5',
        'Coty Spain Luxury - Rollout': '#009688',
        'Damm Spain - Pilot': '#CDDC39',
        'Danone JP - Rollout': '#673AB7',
        'FactPharma - Pilot': '#FFC107',
        'Ferrero ES - Rollout': '#F44336',
        'Fleury Michon - Rollout': '#4CAF50',
        'FrieslandCampina Greece - Rollout': '#2196F3',
        'General Mills ME - Rollout': '#FF9800',
        'Hengstenberg Germany': '#2196F3',
        'Hewlett Packard FR - Pilot': '#795548',
        'JDE Greece - Rollout': '#E91E63',
        'JDE Spain - Roll out': '#00BCD4',
        'JTI CZ - Pilot': '#8BC34A',
        'JTI FR - Pilot': '#3F51B5',
        'JTI RU - Rollout': '#CDDC39',
        'JTI_Spain_HoReCa': '#FFC107',
        'Kraft Heinz GER - Rollout': '#F44336',
        'Mills Norway': '#4CAF50',
        'Modelez FN - Pilot': '#2196F3',
        'Mondelez BE - EDGE': '#9C27B0',
        'Mondelez DE - Rollout': '#FF5722',
        'Mondelez GR - Rollout': '#607D8B',
        'Mondelez Portugal - Rollout': '#795548',
        'Mondelez SE - Rollout': '#E91E63',
        'Mondelez Spain - Rollout': '#5bab47',
        'Nestle Portugal': '#4CAF50',
        'P&G Australia': '#009688',
        'P&G Bahrain - Rollout': '#CDDC39',
        'p&g baltics - rollout': '#673AB7',
        'P&G Croatia - Rollout': '#FFC107',
        'P&G Hungary - Rollout': '#2196F3',
        'P&G Iraq - Rollout': '#9C27B0',
        'P&G Jordan - Rollout': '#FF5722',
        'P&G Kenya - Rollout': '#607D8B',
        'P&G Kuwait - Rollout': '#E91E63',
        'P&G Lebanon - Rollout': '#00BCD4',
        'P&G Malaysia': '#8BC34A',
        'P&G Multi Spain': '#009688',
        'P&G Nigeria - Rollout': '#CDDC39',
        'P&G Oman - Rollout': '#673AB7',
        'P&G Pakistan': '#FFC107',
        'P&G Poland - Rollout': '#4CAF50',
        'P&G Qatar - Rollout': '#9C27B0',
        'P&G Singapore': '#FF5722',
        'P&G Slovakia - Rollout': '#607D8B',
        'JDE Spain - Rollout': '#FFC107',
        'Pasquier France - Pilot': '#CDDC39',
        'Perfetti Spain - Rollout': '#673AB7',
        'Pr Portugal - Rollout': '#FFC107',
        'Procter & Gamble - EMEA - FRA': '#2196F3',
        'PR Spain': '#2196F3',
        'Schwartau DE - Rollout': '#9C27B0',
        'Unilever AUS - Rollout': '#00BCD4',
        'Unilever Belgium - RollOut': '#8BC34A',
        'Unilever Greece - Rollout': '#3F51B5',
        'Unilever Italy Rollout': '#009688',
        'Unilever Kenya - Pilot': '#CDDC39',
        'Unilever MEX - Pilot': '#673AB7',
        'Unilever Nederland': '#FFC107',
        'Unilever PL - RollOut': '#F44336',
        'Unilever Portugal': '#4CAF50',
        'Unilever Spain - Vincle - Prod': '#2196F3'
    };
    const caMapping = {
        '5a16e4ab2522f722e44a89fc': 'BAT Sweden - Rollout',
        '5c5ac4250e4ea80001c66597': 'Beiersdorf DE Mass - Rollout',
        '5c8fa69ac62e5e0001f87434': 'Beiersdorf Italy - Rollout',
        '5ad9fe6b13c00c0001422dc9': 'Beiersdorf Spain - RollOut',
        '5abcb78474b16c0001774eb7': 'CCEP BE (Vending) - Rollout',
        '5a2a75163c878649db9ea3ec': 'CCEP Fr',
        '5bb7912ac7a55b0001793fc8': 'Coty Dach - Rollout',
        '5b8eb7ec3a35810001ef64e9': 'Coty Italy Luxury - Rollout',
        '5b50cd134df7f30001a61d7e': 'Coty Luxe France - Rollout',
        '58ced67910ef7b09ebbdd763': 'Coty Pro Beauty',
        '5bd3326e722cfd00015e9da7': 'Coty SP Luxury - Pilot',
        '5c0131410040340001e9fa7b': 'Damm Spain - Pilot',
        '5cd9326bc4c8bbb33b46601b': 'Danone JP - Rollout',
        '5abbbaff74b16c000175ffb1': 'FactPharma - Pilot',
        '596f215549420552258975dc': 'Ferrero ES - Rollout',
        '5c1b5ac9ad7055000197f277': 'Fleury Michon - Rollout',
        '5df752f01391627d305c53e8': 'FrieslandCampina Greece - Rollout',
        '5b057626a9a3e000011b3924': 'FrieslandCampina HU - RollOut',
        '619bd0f203d6960006a178db': 'FrieslandCampina Romania - Pilot',
        '5877c3a78ff2197bcd14c20e': 'General Mills ME - Rollout',
        '5dcbd573b96db5eb125558e2': 'Hengstenberg Germany',
        '5c6bbf14d21e4700016a79ee': 'Hewlett Packard FR - Pilot',
        '59b0f50344a19d580e8ab9b6': 'JDE Greece - Rollout',
        '592d7c412d64d32dcde7f1a1': 'JDE Spain - Rollout',
        '59cbb3e200363a079a051c1b': 'JTI CZ - Pilot',
        '5c0edc68cd395f00012c4a5c': 'JTI FR - Pilot',
        '5d27427e0c638016c654698e': 'JTI Kazakhstan- Rollout',
        '5bed468acf05f300010b563a': 'JTI RU - Rollout',
        '5bb77bb6c7a55b0001792635': 'JTI Serbia - Rollout',
        '601416d0e3f1330006821fcc': 'JTI Spain HoReCa',
        '62b9520a8d2cd50007065052': 'Kraft Heinz GER - Rollout',
        '5cb43cf9b54c190001353a96': 'Mills Norway',
        '5d725cb4f67a299407b29d0b': 'Mondelez FN - Pilot',
        '5ed112ab4515510008bbcb98': 'Mondelez AU - Rollout',
        '584fd693aef0bc15e704238f': 'Mondelez BE - EDGE',
        '573d7e23ac7ed16535eac141': 'Mondelez DE - Rollout',
        '5ac52a234a86350001b22eec': 'Mondelez GR - Rollout',
        '5b30fe9e5fc9150001be2540': 'Mondelez Portugal - Rollout',
        '5ac3df9f74b16c00017ece8c': 'Mondelez SE - Rollout',
        '5b55f5064df7f30001aa57a2': 'Mondelez Spain - Rollout',
        '6006da12ddf20200068913e2': 'Nestle Portugal',
        '5e4bae14b3d9830008f6dd9b': 'Nestle Spain- Rollout',
        '5f7aa9297e39ea000627305b': 'P&G Australia',
        '5a204867e1fae4079cac8fdb': 'P&G Bahrain - Rollout',
        '5ced4065b13386782d063961': 'P&G Baltics - Rollout',
        '5c82914d1d44cb0001e6e4b9': 'P&G Croatia - Rollout',
        '5bbe26e57dc37a00015e0e79': 'P&G Czechia - Rollout',
        '5a27f098db533e0aa827c806': 'P&G Egypt - Rollout',
        '5bb4b5f7b487bd00011bc304': 'P&G Hungary - Rollout',
        '5d68e3f8738cb5fd58e373c3': 'P&G Indonesia',
        '5f4d16a26c4c21000618f636': 'P&G Iraq - Rollout',
        '5f4d16abc3ea4100063f3f3a': 'P&G Jordan - Rollout',
        '5a27f099db533e0aa827c809': 'P&G Kenya - Rollout',
        '5e5ccace44ad6100081b373b': 'P&G Korea',
        '5a27f099db533e0aa827c80a': 'P&G Kuwait - Rollout',
        '5c878f6e1d44cb0001f6a173': 'P&G Lebanon - Rollout',
        '5f64cbdf7e39ea0006272da7': 'P&G Malaysia',
        '5a27fff4db533e0aa827db36': 'P&G Morocco - Rollout',
        '6554906d37245200090e75f4': 'P&G Multi Spain',
        '5c878f6f1d44cb0001f6a179': 'P&G Nigeria - Rollout',
        '5a27fff4db533e0aa827db35': 'P&G Oman - Rollout',
        '6046fefadb9ade001ecc7082': 'P&G Pakistan',
        '5e4d0432a61bae0008395bf4': 'P&G Philippines',
        '5ad509f29ca126000112e9c0': 'P&G Poland - Rollout',
        '5a699540c3b9672d489174c2': 'P&G Portugal - Rollout',
        '5c878f6e1d44cb0001f6a174': 'P&G Qatar - Rollout',
        '5a27fff5db533e0aa827db39': 'P&G Saudi Arabia - Rollout',
        '5f34abce7307bd0008b13c10': 'P&G Singapore',
        '5bbe12027dc37a00015df141': 'P&G Slovakia - Rollout',
        '58dcbd8fc70eae0a14633dfa': 'P&G South-Africa - Rollout',
        '5a4eff7a6dba8d09cb2314ca': 'P&G Spain - Rollout2',
        '5c07b223a590bb0001612d2c': 'P&G Spain Pharma - Rollout',
        '5a27fff4db533e0aa827db37': 'P&G UAE - Rollout',
        '5f02f302e478950008fe2a6f': 'P&G Ukraine - Rollout',
        '601c08a5d956f600070a32ba': 'P&G Vietnam',
        '608128b03fb8ae0007704d2e': 'Pasquier France - Pilot',
        '5d08a4ebf7ab6e43927b9395': 'Perfetti Spain - Rollout',
        '60b4d4b0d838840006546c5d': 'Pr Portugal - Rollout',
        '591423c20491be66bbaa0de5': 'PR Spain',
        '608ff1e5514110000660f8af': 'Procter & Gamble - EMEA - DE',
        '6041f5b2d859d300061aacce': 'Procter & Gamble - EMEA - FRA',
        '608ff1bdb599b60006d4874e': 'Procter & Gamble - EMEA - IT',
        '66697f96cfb30a0007a57ab9': 'Procter & Gamble - EMEA - RO',
        '645b4cffef182f0007ee3f04': 'Procter & Gamble - EMEA - TR',
        '608ff18525a12d0007dedff6': 'Procter & Gamble - EMEA - UK',
        '5a16ac602522f722e44a47a7': 'Schwartau DE - Rollout',
        '5d7ba64d759dd717550810ad': 'Smollan SA - Rollout',
        '5915222b67e2ee0a156f2443': 'Unilever AUS - Rollout',
        '5511acb355c467fd66faab36': 'Unilever Belgium - RollOut',
        '5640c1b6cab7782f502c985b': 'Unilever Greece - Rollout',
        '55e44c6ddeab06f164adf180': 'Unilever Italy - Rollout',
        '5ece6d33cb3a4e0009a3b3d4': 'Unilever Kenya - Pilot',
        '5c6567754698620001d827b0': 'Unilever MEX - Pilot',
        '5511acb355c467fd66faab2d': 'Unilever Nederland',
        '58333b408ec860428612256e': 'Unilever Poland - RollOut',
        '55adfa816743d98b34a6060d': 'Unilever Portugal',
        '5a993e68d004195545c693dc': 'Unilever Spain - Vincle - Prod',
        '5511acb355c467fd66faab3a': 'Unilever Sweden'
    };
