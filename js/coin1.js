// クッキーの値を取得
        function getCookie(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        // クッキーが設定されていない場合にのみ選択画面を表示
        window.onload = function() {
            if (getCookie('coin') === undefined) {
                if (confirm("この処理を実行しますか？")) {
                    // OKが選択された場合、coin=okを設定
                    document.cookie = "coin=ok; path=/; max-age=3600"; // 1時間有効
                    alert("「OK」が選択されました。coin=okを保存しました。");
                } else {
                    // キャンセルが選択された場合、coin=noを設定
                    document.cookie = "coin=no; path=/; max-age=3600"; // 1時間有効
                    alert("キャンセルが選択されました。coin=noを保存しました。");
                }
            }
        };
