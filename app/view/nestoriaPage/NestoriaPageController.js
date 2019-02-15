Ext.define('QuickStart.view.nestoriaPage.NestoriaPageCoontroller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nestoria-page',



    onSearchBtn: function () {
        let vm = this.getViewModel(),
            countryFieldValue = vm.get('countryFieldValue'),
            typeValue = vm.get('typeValue'),
            cityFieldValue = vm.get('cityFieldValue'),
            page = vm.get('page'),
            url = `https://api.${countryFieldValue}/api?action=search_listings&encoding=json&listing_type=${typeValue}&place_name=${cityFieldValue}&page=${page}`;
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        fetch(proxyurl + url)
            .then(response => response.text())
            .then(contents => this.callbackFunction(contents))
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    },

    callbackFunction: function (contents) {
        let vm = this.getViewModel(),
            store = vm.get('records'),
            request = Ext.JSON.decode(contents);
        console.log(request);
        store.add(request.response.listings);
        debugger
    }


});
