//jQuery記述
$(function(){

  //冒頭アニメーションからのボタンページフェードイン
  setTimeout(function(){
    $('.btn-wrapper').fadeIn(1000);
  }, 27000);

　//「新年のご挨拶」をクリック後の演出
  $('.greeting').click(function(){
    $('.btn-wrapper').fadeOut(500);
    $('.greeting-wrapper').fadeIn(2000);
  });

  //「Topページへ戻る」をクリック後の演出
  $('.totop-btn').click(function(){
    $('.btn-wrapper').fadeIn(2000);
    $('.greeting-wrapper').fadeOut(500);
    $('.omikuji-result').fadeOut(500);
  });

  ////「おみくじを引く」をクリック後のアニメーションへの導入
  $('.omikuji-btn').click(function(){
    $('.btn-wrapper').fadeOut(500);
    $('.omikuji-wrapper').fadeIn(1000);
  });

  //「おみくじを引く」をクリック後のアニメーション後演出
  $('.omikuji-btn').click(function(){
    setTimeout(function(){
      $('.omikuji-wrapper').fadeOut(500);
      $('.omikuji-result').fadeIn(1000);
    },5200);

    //おみくじ結果の処理
    var results = ["大吉","中吉","小吉","吉","凶"];


    var random = Math.floor(Math.random() * 5);
    var result = results[random];
    $('#result').html(result);



    //おみくじ結果の解説の処理
    var random2 = Math.floor(Math.random() * 3);

    if(random == 0){
      var kaisetsus1 = [
        "思いを相手に告げなさい、想いは深まり幸せな将来が訪れるでしょう",
        "多くの人や物が集まります。商売は繁盛し、暮らしが豊かなものになるでしょう",
        "即断即決の行動力とバランス感覚が、運とお金の流れを呼び込むでしょう"
      ];
      var kaisetsu1 = kaisetsus1[random2];
      $('#kaisetsu').html(kaisetsu1);
    }
    else if(random == 1){
      var kaisetsus2 = [
        "憂う事があっても、身を慎しんでいれば、後は万事思いのままになるでしょう",
        "新しい出会いに恵まれます。健康管理も大切にしましょう",
        "道を切り拓く力の満ちる時。周囲の意見をよく聞き、力強く前に進みましょう"
      ];
      var kaisetsu2 = kaisetsus2[random2];
      $('#kaisetsu').html(kaisetsu2);
    }
    else if(random == 2){
      var kaisetsus3 = [
        "心を平和にして親類・縁者と交われば、争い事もなくなるでしょう",
        "下り坂で車を押して進むように、何事もうまくいくでしょう",
        "今一つ納得のいかない結果のときは、一歩下がって平穏を守る方がよいでしょう"
      ];
      var kaisetsu3 = kaisetsus3[random2];
      $('#kaisetsu').html(kaisetsu3);
    }
    else if(random == 3){
      var kaisetsus4 = [
        "変化の時、どう身を処するか、いま一度確かめましょう",
        "明るい光が差し、何かが芽生える兆しあり。新しい事を始めるといいでしょう",
        "自分よりも小さい者の面倒を見ることで、全体運が上昇するでしょう"
      ];
      var kaisetsu4 = kaisetsus4[random2];
      $('#kaisetsu').html(kaisetsu4);
    }
    else{
      var kaisetsus5 = [
        "勝てる時期を見極めるべし",
        "落ち着いた交際が続くことなし。思いやりの心で接するべし。",
        "悔いが残らぬよう何事も精いっぱい取り組み いつか必ず実を結ぶと信じるべし"
      ];
      var kaisetsu5 = kaisetsus5[random2];
      $('#kaisetsu').html(kaisetsu5);
    }
  });
});
