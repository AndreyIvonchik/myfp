Ext.define('QuickStart.view.nestoriaPage.NestoriaPageCoontroller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nestoria-page',


    clearFilter: function () {
        let vm = this.getViewModel();

        vm.set('minPriceField', 0);
        vm.set('maxPriceField', 'max');
        vm.set('bathroomsValues', [0, 15]);
        vm.set('bedroomsValues', [0, 15]);
    },

    onSearchBtn: function () {
        this.createQuery(1);
    },

    createQuery: function(page){
        let vm = this.getViewModel(),
            view = this.getViewModel(),
            countryFieldValue = vm.get('countryFieldValue'),
            typeValue = vm.get('typeValue').radioBtnType,
            cityFieldValue = vm.get('cityFieldValue'),
            minPrice = vm.get('minPriceField'),
            maxPrice = vm.get('maxPriceField'),
            minBedrooms = vm.get('bedroomsValues')[0],
            maxBedrooms = vm.get('bedroomsValues')[1],
            minBathrooms = vm.get('bathroomsValues')[0],
            maxBathrooms = vm.get('bathroomsValues')[1],
            url = `https://api.${countryFieldValue}/api?action=search_listings&encoding=json&listing_type=${typeValue}&place_name=${cityFieldValue}&page=${page}&price_min=${minPrice}&price_max=${maxPrice}&bathroom_min=${minBathrooms}&bathroom_max=${maxBathrooms}&bedroom_min=${minBedrooms}&bedroom_max=${maxBedrooms}`;
        //const proxyurl = 'https://cors.io/?';
        view.getView('mainPanel').mask('Loading..');
        vm.set('page', page);
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        fetch(proxyurl + url)
            .then(response => response.text())
            .then(contents => this.callbackFunction(contents))
            .catch(() => Ext.MessageBox.alert('Error', 'Ошибка запроса'))
    },

    callbackFunction: function (contents) {
        let vm = this.getViewModel(),
            view = this.getView(),
            request = Ext.JSON.decode(contents);
        view.unmask();
        vm.set('mainTitle', request.response.locations[0].long_title);
        vm.set('recordsStore', request.response.listings);
        vm.set('showPagination', true);
    },

    clickPagination: function(element){
        let vm = this.getViewModel(),
            page = vm.get('page');

        if(element.name == "pageNext"){
            page += 1;
            if(page > 50) page = 1;
            this.createQuery(page);
        }

        if(element.name == "pagePrev"){
            page -= 1;
            if(page < 1) page = 50;
            this.createQuery(page);

        }

    },

    clickRecord: function (element) {
        let vm = this.getViewModel();
        if (element.target.closest('.card') && !element.target.id){
            let record = vm.get('recordsStore')[+element.target.closest('.card').id - 1],
                modal = Ext.create({
                    xtype: 'nestoria-description',
                    title: record.title,
                    viewModel: {
                        data: {
                            img: record.img_url,
                            price: record.price_formatted,
                            bedrooms: record.bedroom_number,
                            bathrooms: record.bathroom_number,
                            descr: record.summary,
                            urlSite: record.lister_url,
                            urlMaps: `https://maps.google.com/?hl=ru&q=${record.latitude},${record.longitude}`
                        },
                        parent: vm
                    }
                });
            modal.show();
        } else if( element.target.id === 'addFavorite'){
            let record = vm.get('recordsStore')[+element.target.closest('.card').id - 1];
            this.saveLocalStorage(record);
        } else if( element.target.id === 'dellFavorite'){
            let id = +element.target.closest('.card').id - 1;
            this.dellLocalStorage(id);
        }

    },

    dellLocalStorage: function (id) {
        let array = Ext.JSON.decode(localStorage.getItem('nestoriaStore'));
        array.splice(id, 1);
        localStorage.setItem('nestoriaStore', Ext.JSON.encode(array));
        this.loadLocalStorage();
    },

    saveLocalStorage: function (record) {
        let array = [];
        record.favorite = true;
        localStorage.getItem('nestoriaStore') ? array = (Ext.JSON.decode(localStorage.getItem('nestoriaStore'))) : '';
        array.push(record);
        localStorage.setItem('nestoriaStore', Ext.JSON.encode(array));
        Ext.MessageBox.alert('Status', 'Saved successfully.');
    },

    loadLocalStorage: function () {
        let vm = this.getViewModel();
        vm.set('showPagination', false);
        if(localStorage.getItem('nestoriaStore')) {
            vm.set('recordsStore', Ext.JSON.decode(localStorage.getItem('nestoriaStore')));
            vm.set('mainTitle', 'Favorites');
            vm.set('flagFavirie', true);
        }else {
            Ext.MessageBox.alert('Status', 'Favorite list is empty.');
        }
    },

    clearStorage: function () {
        let vm = this.getViewModel();
        localStorage.removeItem('nestoriaStore');
        vm.set('recordsStore', []);
    }
});
