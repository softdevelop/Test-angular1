myAngularApp.factory('ratingDataService', ['$window', function($window, RATING_DATA_STORAGE_NAME) {
  return {
    set: function(key, value) {
      var ratingData = this.getObject(RATING_DATA_STORAGE_NAME, {});
      if (key in ratingData) {
        ratingData[key] = value;
      } else if (this.getTotal() < 10) {
        ratingData[key] = value;
      }
      this.setObject(RATING_DATA_STORAGE_NAME, ratingData);
    },

    get: function(key, defaultValue) {
      var ratingData = this.getObject(RATING_DATA_STORAGE_NAME, {});
      return ratingData[key] || defaultValue || 0;
    },

    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },

    getObject: function(key, defaultValue) {
      if($window.localStorage[key] != undefined){
        return JSON.parse($window.localStorage[key]);
      }else{
        return defaultValue || {};
      }
    },

    remove: function(key) {
      var ratingData = this.getObject(RATING_DATA_STORAGE_NAME, {});
      delete ratingData[key];
      this.setObject(RATING_DATA_STORAGE_NAME, ratingData);
    },

    getTotal: function() {
      var ratingData = this.getObject(RATING_DATA_STORAGE_NAME, {});
      return Object.keys(ratingData).length;
    }
  }
}]);