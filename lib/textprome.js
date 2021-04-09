const co = require('cheerio');
const request = require('request');
const create = async (linkk,text1,text2) => {
return request.post({
 url: `${linkk}`,
 headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
 },
 body: `text_1=${text}&login=OK`
}, (e,r,b) => {
  let $ = co.load(b);
  $(".thumbnail").find("img").each(function() {
   let h = $(this).attr("src");
    var result = "https://textpro.me/"+h;
   console.log("https://textpro.me/"+h);
  });
});
}

module.exports = { create }