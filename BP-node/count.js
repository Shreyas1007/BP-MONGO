var string = "Bluepineapple";

var counts ={};  //map

var len = string.length;
var count;


for(i=0;i<string.length;i++){

  ch = string.charAt(i);
  count = counts[ch];

  counts[ch] = count ? count+1 : 1;

}


for (ch in counts){
    console.log(ch + " count is :" + counts[ch]);

}