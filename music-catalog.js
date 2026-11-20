/* 20.000 preset metadata musik untuk dipasangkan dengan desain. Tidak mengandung audio palsu. */
(function(){
 const moods=[
  ["romantic","Romantis","Piano lembut","classic"],["acoustic","Akustik","Gitar akustik","garden"],["islamic","Islami","Instrumental lembut","classic"],["classical","Klasik","Piano dan string","royal"],["modern","Modern","Piano ambient","modern"],["traditional","Tradisional","Instrumen tradisional","classic"],["cinematic","Sinematik","Orkestra lembut","noir"],["romantic","Romantic cinematic","Piano dan cello","royal"],["acoustic","Warm acoustic","Gitar dan piano","garden"],["modern","Dreamy ambient","Pad dan piano","modern"]
 ];
 const palettes=[["#536b59","#b58a5a"],["#875b68","#d2a0a0"],["#56344f","#c4a06a"],["#365d68","#b6a58a"],["#995b47","#d49a72"],["#252b3a","#c5a46d"],["#716181","#c6a9d5"],["#596044","#b79a62"],["#536d83","#c5a77e"],["#8d755b","#d7bd91"],["#24594b","#c6a35d"],["#a95759","#e0a18d"],["#765a4b","#c8a98b"],["#a66d80","#e7b9c8"],["#354d3d","#b4a06c"],["#5c6671","#c4cbd1"],["#b66f50","#e6bd93"],["#292929","#c2a16b"],["#557b70","#b7c9a8"],["#6b5148","#b99b78"]];
 const tempos=[54,58,62,66,70,74,78,82,86,90];
 const lengths=["2:30","3:00","3:30","4:00","4:30","5:00","5:30","6:00","6:30","7:00"];
 function generate(){const out=[];for(let p=0;p<20;p++)for(let m=0;m<10;m++)for(let v=0;v<10;v++)for(let l=0;l<10;l++){const mood=moods[m],c=palettes[p];out.push({id:"music-"+out.length,name:mood[1]+" • "+mood[2]+" • Gaya "+(v+1)+" • Versi "+(l+1),mood_key:mood[0],mood:mood[1],instruments:mood[2],tempo:tempos[(v+l)%10],duration:lengths[(p+v+l)%10],design_keys:[mood[3]],color:c[0],accent:c[1],audio_url:""});}return out;}
 window.WeddingMusicCatalog={generate,total:20000};
})();