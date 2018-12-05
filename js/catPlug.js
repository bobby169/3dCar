(function(win, doc) {
    //兼容配置：如果requestAnimFrame支持不可用，还是可以用回内置的setTimeout。 
    win.requestAnimFrame = (function() {
        return win.requestAnimationFrame ||
            win.webkitRequestAnimationFrame ||
            win.mozRequestAnimationFrame ||
            win.oRequestAnimationFrame ||
            win.msRequestAnimationFrame ||
            function(callback) {
                win.setTimeout(callback, 1000 / 30); //如果requestAnimFrame支持不可用，还是可以用回内置的setTimeout。
            };
    })();

    /*==========  构造方法  ==========*/
    var CreateClass = function() {

    }

    /*==========  构造函数属性设定  ==========*/


    /*========== 根据宽度 rem初始化设定  ==========*/
    CreateClass.prototype.remInit = function(desginWidth, designScale) {
        //根据比例改变 HTML字号大小
        var docEle = doc.documentElement, //获取html元素
            width = docEle.clientWidth;
        width && (docEle.style.fontSize = designScale * width / desginWidth + 'px'); //设置html的fontSize，随着event的改变而改变。
    }

    /*========== 所有内容都可见 rem初始化设定  ==========*/
    CreateClass.prototype.remInitShowAll = function(w,h) {
        //根据比例改变 HTML字号大小
        var docEle = doc.documentElement, //获取html元素
            width = docEle.clientWidth,
            height = docEle.clientHeight;
        if( width / height > w / h) {
            height && (docEle.style.fontSize = 10 * height / h + 'px'); //设置html的fontSize，随着event的改变而改变。
        } else {
            width && (docEle.style.fontSize = 10 * width / w + 'px'); //设置html的fontSize，随着event的改变而改变。
        }      
    }

    /*========== 内容最大化 rem初始化设定  ==========*/
    CreateClass.prototype.remInitShowMax = function(w,h) {
        //根据比例改变 HTML字号大小
        var docEle = doc.documentElement, //获取html元素
            width = docEle.clientWidth,
            height = docEle.clientHeight;
        if( width / height < w / h) {
            height && (docEle.style.fontSize = 10 * height / h + 'px'); //设置html的fontSize，随着event的改变而改变。
        } else {
            width && (docEle.style.fontSize = 10 * width / w + 'px'); //设置html的fontSize，随着event的改变而改变。
        }      
    }

    /*==========  判断相关属性  ==========*/
    //判断是否是手机
    CreateClass.prototype.isMobile = function() {
        var isMobile = true;
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            isMobile = true;
        } else {
            isMobile = false;
        }
        return isMobile;
    }
    //ios验证
    CreateClass.prototype.isIos = function () {
        var u = navigator.userAgent;
        // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        // alert('是否是Android：'+isAndroid);
        // alert('是否是iOS：'+isiOS);
        return isiOS;
    }

    //wx验证
    CreateClass.prototype.isWeiXin = function () {
        var weixin = false;
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            weixin = true;
        } else {
            weixin = false;
        }
        return weixin;
    }

    //预加载图片  传递图片路径数组  当所有图片加载完回调函数  传递数组
    CreateClass.prototype.preloadimages = function(arr, callback, stepCallback) {
        var newimages = [],
            loadedimages = 0;

        function imageloadpost() {
            loadedimages++;
            stepCallback(loadedimages, arr.length);
            if (loadedimages == arr.length) {
                callback(newimages) //加载完成用我们调用postaction函数并将newimages数组做为参数传递进去
            }
        }
        for (var i = 0; i < arr.length; i++) {
            newimages[i] = new Image();
            newimages[i].src = arr[i];
            newimages[i].onload = function() {
                imageloadpost();
            }
            newimages[i].onerror = function() {
                imageloadpost();
            }
        }
    }

    //预加载图片  传递图片路径数组  当所有图片加载完回调函数 传递对象
    CreateClass.prototype.preloadimagesOBJ = function(arrobj, callback, stepCallback) {
        
        var arrobjLength = 0;

        for(var k in arrobj) {
            arrobjLength++;
        }

        var newimages = {},
            loadedimages = 0;
        function imageloadpost() {
            loadedimages++;
            stepCallback(loadedimages, arrobjLength);
            if (loadedimages == arrobjLength) {
                callback(newimages) //加载完成用我们调用postaction函数并将newimages数组做为参数传递进去
            }
        }
        for (var k in arrobj) {
            newimages[k] = new Image();
            newimages[k].src = arrobj[k];
            newimages[k].onload = function() {
                imageloadpost();
            }
            newimages[k].onerror = function() {
                imageloadpost();
            }
        }
    }

    /*==========  地址栏相关  ==========*/
    // 得到页面文件夹路径
    CreateClass.prototype.getBaseURL = function () {
        var baseURL =  decodeURI(window.location.href);
        baseURL = baseURL.indexOf('?') == -1 ? baseURL : baseURL.substring(0, baseURL.indexOf('?'));
        baseURL = baseURL.indexOf('.html') == -1 ? baseURL : baseURL.replace('/' + baseURL.split('/').pop(), '');
        baseURL = baseURL.indexOf('.php') == -1 ? baseURL : baseURL.replace('/' + baseURL.split('/').pop(), '');
        baseURL = baseURL.replace(/\/$/g, '');
        return baseURL;
    }
    // 得到 # 地址
    CreateClass.prototype.getHash = function() {
        return win.location.hash;
    }
    // 设置 # 地址
    CreateClass.prototype.setHash = function(str) {
        win.location.hash = str;
    }
    // 返回地址栏参数
    CreateClass.prototype.getParameters = function() {
        var searchUrl = decodeURIComponent(win.location.search);
        searchUrl = searchUrl.replace(/&amp;/g, '&'); //微信将 & 转意 &amp;删除多余字符
        var requestUrl = new Object();
        if (searchUrl.indexOf("?") != -1) { //判断是否存在，如果返回-1，则表明不存在-->
            var str = searchUrl.substr(1); //从第1个字符开始截取-->
            var strs = str.split("&"); //表示以“&’”为分隔符进行分隔，返回的是一个数组-->
            for (var i = 0; i < strs.length; i++) {
                var fistIndex = strs[i].indexOf('=');
                 requestUrl[strs[i].slice(0, fistIndex)] = strs[i].slice((fistIndex + 1));
            }
        }
        return requestUrl;
    }
    // url 去参数
    CreateClass.prototype.delQueStr = function (url) {
        var str = '';
        if (url.indexOf('?') != -1) {
            str = url.substr(0, url.indexOf('?'));
        } else {
            str = url;
        }
        return str;
    }

    /*==========  验证相关   ==========*/
    //手机验证
    //手机号码验证
    CreateClass.prototype.checkMobile = function (str) { // 验证手机号正则
        var re = /^1[3|4|5|7|8][0-9]{9}$/;
        if (re.test(str)) {
            return true;
        } else {
            return false;
        }
    }
    //输入框号码 只能数字限制
    CreateClass.prototype.inputPhoneCode = function (obj) {
        obj.value = obj.value.replace(/[^0-9-]+/g, '');
        if (obj.value.length >= 11) {
            obj.value = obj.value.substring(0, 11);
        }
    }

    /*==========  字符串相关  ==========*/
    // 判断英文字符串长度
    CreateClass.prototype.getStrLength = function(str) {
        var leng = str.length;
        var cnChar = str.match(/[^\x00-\x80]/g); //利用match方法检索出中文字符并返回一个存放中文的数组  
        if (cnChar) leng += cnChar.length; //算出实际的字符长度  
        return leng;
    }
    // 限制最多字数
    // 自动添加 ...
    CreateClass.prototype.outText = function(str, maxLeng) {
        str = str + '';
        var removeText = 3;
        var contentLeng = getStrLength(str);
        var l = str.length;
        var endLeng = 1;

        if (contentLeng > maxLeng) {
            for (; endLeng <= l; endLeng++) {
                if (getStrLength(str.substring(0, endLeng)) > (maxLeng - 3)) {
                    endLeng--;
                    break;
                } else if (getStrLength(str.substring(0, endLeng)) == (maxLeng - 3)) {
                    break;
                }
            }
            str = str.substring(0, endLeng) + '...';
        }
        return str;
    }
    // 删除多出文字
    CreateClass.prototype.outText2 = function(str, maxLeng) {
        str = str + '';
        var removeText = 3;
        var contentLeng = getStrLength(str);
        var l = str.length;
        var endLeng = 1;

        if (contentLeng > maxLeng) {
            for (; endLeng <= l; endLeng++) {
                if (getStrLength(str.substring(0, endLeng)) >= maxLeng - 1) {
                    endLeng--;
                    break;
                }
            }
            str = str.substring(0, endLeng);
        }
        return str;
    }

    //手势事件
    /*封装tap*/
    CreateClass.prototype.tap = function (dom, callback) {
        /*
         * 要求  没有触发 touchmove 事件
         *       并且响应速度要比click快
         */
        if (dom && typeof dom == 'object') {
            var isMove = false;
            var startTime = 0;
            dom.addEventListener('touchstart', function(e) {
                // e.preventDefault();
                //if(debug) console.log('touchstart');
                //console.time('tap');/*记录tap这个参数现在的时间*/
                startTime = Date.now();
            });
            dom.addEventListener('touchmove', function(e) {
                // e.preventDefault();
                //if(debug) console.log('touchmove');
                isMove = true;
            });
            dom.addEventListener('touchend', function(e) {
                //if(debug) console.log('touchend');
                //console.timeEnd('tap')/*打印tap这个参数距离上一次记录的时候的时间*/
                /*判读  是否满足tap 的要求  一般要求tap的响应时间150*/
                if (!isMove && (Date.now() - startTime) < 150) {
                    /*调用 callback*/
                    callback && callback(e);
                }
                /*重置 参数*/
                isMove = false;
                startTime = 0;
            });
        }
    }  

    // 统计代码封装
    //百度统计
    CreateClass.prototype.sendBD = function (string) {
        _hmt.push(['_trackEvent', string, 'event']);
    }

    win.shanGong = new CreateClass();

}(window, document));