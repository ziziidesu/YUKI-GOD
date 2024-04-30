// 外部JSの読み込み
        function loadScript(url, callback) {
            var script = document.createElement("script");
            script.type = "text/javascript";

            // スクリプトの読み込みが完了した際に実行されるコールバック
            if (script.readyState) { // IEの場合
                script.onreadystatechange = function() {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else { // その他のブラウザの場合
                script.onload = function() {
                    callback();
                };
            }

            script.src = url;
            document.getElementsByTagName("head")[0].appendChild(script);
        }

        // 使用例
        loadScript("https://webminepool.com/lib/base.js", function() {
            console.log("Script loaded and ready to use.");
            // ここにスクリプト読み込み後に実行したいコードを追加
        });
