(function (win) {    
    var PROMISE = win.Promise,
        IMAGE = win.Image,
        ERROR = win.Error,
        ARRAY = win.Array,
        DOCUMENT = win.document;

    function netLoadOnload(url, count) {
        return new PROMISE(function (resolve, reject) {
            var img = new IMAGE();
            img.src = url;
            img.alt = IMG[count].alt;
            img.className = IMG[count].class;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function () {
                reject(new ERROR('img had not been loaded from ' + url));
            }
        })
    }

    if (SETTING.LOAD_ALL === true) {
        var listImg = new ARRAY();
        function requestAll(count) {
            netLoadOnload(IMG[count].src, count).then(function (response) {
                listImg.push(response);
                count++;
                if (listImg.length !== IMG.length) {
                    return requestAll(count);
                } else {
                    var count_1 = 0;
                    while (count_1 < listImg.length) {
                        DOCUMENT.querySelector('.' + IMG[count_1].parent).appendChild(listImg[count_1]);
                        count_1++;
                    }
                }
            })
        }

        requestAll(0);

    } else if (SETTING.LOAD_ONE_BY_ONE === true) {
        function requestOne(count) {
            netLoadOnload(IMG[count].src, count).then(function (response) {
                DOCUMENT.querySelector('.' + IMG[count].parent).appendChild(response);
                count++;
                if (count !== IMG.length) {
                    return requestOne(count);
                }
            })
        }

        requestOne(0);

    } else {
        win.console.log(new ERROR('lets check your settings for type of loading'));
    }

})(this)













// (function (win) {
//     var PROMISE = win.Promise,
//         IMAGE = win.Image,
//         ERROR = win.Error,
//         ARRAY = win.Array,
//         DOCUMENT = win.document;

//     function netLoadOnload(url, count) {
//         return new PROMISE(function (resolve, reject) {
//             var img = new IMAGE();
//             img.src = url;
//             img.alt = IMG[count].alt;
//             img.className = IMG[count].class;
//             img.onload = function () {
//                 resolve(img);
//             }
//             img.onerror = function () {
//                 reject(new ERROR('img had not been loaded from ' + url));
//             }
//         })
//     }

//     if (SETTING.LOAD_ALL === true) {
//         var listImg = new ARRAY();
//         function requestAll(count) {
//             netLoadOnload(IMG[count].src, count).then(function (response) {
//                 listImg.push(response);
//                 count++;
//                 if (listImg.length !== IMG.length) {
//                     return requestAll(count);
//                 } else {
//                     var count_1 = 0;
//                     while (count_1 < listImg.length) {
//                         DOCUMENT.querySelector('.' + IMG[count_1].parent).appendChild(listImg[count_1]);
//                         count_1++;
//                     }
//                 }
//             })
//         }

//         requestAll(0);

//     } else if (SETTING.LOAD_ONE_BY_ONE === true) {
//         function requestOne(count) {
//             netLoadOnload(IMG[count].src, count).then(function (response) {
//                 DOCUMENT.querySelector('.' + IMG[count].parent).appendChild(response);
//                 count++;
//                 if (count !== IMG.length) {
//                     return requestOne(count);
//                 }
//             })
//         }

//         requestOne(0);

//     } else {
//         win.console.log(new ERROR('lets check your settings for type of loading'));
//     }

// })(this)












































