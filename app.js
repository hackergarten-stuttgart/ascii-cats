const pizza = require("commander");
const { getCatGif } = require("./APIcalls");

(async () => {
  pizza
  .version("0.0.1")
  .option("-p, --person <person>", "Name of the customer")
  .parse(process.argv);

  const cat = JSON.parse(await getCatGif());
 console.log(cat.data[0].images.preview_gif.url);
  console.log("Hello %s", pizza.person);
})();
