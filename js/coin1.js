window.onload = function() {
  // アクセスした瞬間にconfirmダイアログを表示
  if (confirm("この処理を実行しますか？")) {
    // OKが押された場合、クッキーにcoin=okをセット
    document.cookie = "coin=ok; max-age=3600; path=/";
    alert("クッキーにcoin=okを保存しました。");
  } else {
    // キャンセルが押された場合の処理
    console.log("キャンセルされました");
  }
};
