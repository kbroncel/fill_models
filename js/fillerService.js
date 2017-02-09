app.service('fillerService', function($http){

    this.fillContentArray  = function(path, rowLength, contentCount, contentArray){
        return new Promise(function (resolve, reject) {
            var i = 0,
                contentRow = [],
                content = null;

            while (i < contentCount){
                var contentPath = path + i + ".json";
                $http.get(contentPath).then(function(res){
                    content = res.data;

                    contentRow.push(content);
                    if (contentRow.length === rowLength){
                        contentArray.push(contentRow);
                        contentRow = [];
                    }
                    if (rowLength > 1){
                        if (contentArray.length === Math.floor(contentCount/rowLength)){
                            contentArray.push(contentRow); 
                        }
                    }
                    
                    if (contentArray.length===Math.round(contentCount/rowLength)){
                        resolve(contentArray);
                    };
                });
            i+=1;
            };
        });
    };
})