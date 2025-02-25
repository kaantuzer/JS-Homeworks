const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const user = {};
const cart = []; //Pocket
//Why prompt is not working....

// We are taking user informations
rl.question("Adinizi giriniz: ", function (name) {
  user.name = name;

  rl.question("Yaşinizi giriniz: ", function (age) {
    user.age = parseInt(age);

    rl.question("Mesleğinizi giriniz: ", function (job) {
      user.job = job;

      console.log("\nKullanici Bilgileri:");
      console.log(user);

      // Adding item to pocket
      askForProduct();
    });
  });
});

// asking for product
function askForProduct() {
  rl.question(
    "\nÜrün adini giriniz (veya 'bitir' yazarak çikabilirsiniz): ",
    function (productName) {
      if (productName.toLowerCase() === "bitir") {
        listCart();
        return;
      }

      rl.question("Ürün fiyatini giriniz: ", function (price) {
        cart.push({ name: productName, price: parseFloat(price) });
        console.log(`${productName} sepete eklendi.`);

        askForProduct(); // we are calling function to ask for product
      });
    }
  );
}

// Listing pocket and reduce function
function listCart() {
  console.log("\nSepetinizdeki ürünler:");
  cart.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name}: ${product.price} TL`);
  });

  // Reduce func
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  console.log(`Toplam fiyat: ${totalPrice} TL`);

  askForRemoval(); // asking
}

// removing item
function askForRemoval() {
  rl.question(
    "\nSepetten bir ürün çikarmak ister misiniz? (evet/hayir): ",
    function (answer) {
      if (answer.toLowerCase() === "evet") {
        rl.question(
          "Çikarmak istediğiniz ürün adini giriniz: ",
          function (productName) {
            removeFromCart(productName);
            listCart(); // updated list showing
          }
        );
      } else {
        console.log("\nAlişveriş tamamlandi.");
        rl.close();
      }
    }
  );
}

// Function remove from list
function removeFromCart(productName) {
  const index = cart.findIndex(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );
  if (index !== -1) {
    cart.splice(index, 1);
    console.log(`${productName} sepetten çikarildi.`);
  } else {
    console.log(`${productName} sepetinizde bulunamadi.`);
  }
}
