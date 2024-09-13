console.log("Farming");

const shopUpgradesContainer = document.getElementById("shop-upgrades");

let shopUpgrades = [];

function renderShopUpgrades() {
  shopUpgrades.forEach((item) => {
    let makeDiv = document.createElement("div");
    let makeButton = document.createElement("button");
    makeButton.textContent = "Make offer";
    makeButton.id = `${item.id}`;
    makeDiv.textContent = `${item.name}, Item cost ${item.cost}, Plants per second ${item.increase}`;
    makeDiv.className = "upgrade-box";
    makeDiv.appendChild(makeButton);
    shopUpgradesContainer.appendChild(makeDiv);
    shopUpgradesContainer.appendChild(makeButton);
  });
}
// the function renderShopUpgrades() { has been made with lots of support of both Anu and Joe, just letting you know that i dont have a full understanding of this

async function getShopUpgrades(params) {
  const Response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(Response);
  const shopData = await Response.json();
  console.log(shopData);
  shopUpgrades = shopData;
  console.log(shopUpgrades);
  renderShopUpgrades();
}
async function main() {
  await getShopUpgrades();
  console.log("shop upgrades 2", shopUpgrades);
}

main();
