const assert = require("assert");
const { VILLAGERS } = require("./data.js");

let passed = 0;
function test(name, fn) {
  fn();
  passed++;
  console.log("PASS:", name);
}

function byName(name) {
  return VILLAGERS.find((v) => v.name === name);
}

test("row count is 35", () => {
  assert.strictEqual(VILLAGERS.length, 35);
});

test("Adeline loves Coffee", () => {
  assert.ok(byName("Adeline").loved.includes("Coffee"));
});

test("Zorel hates Cicada", () => {
  assert.ok(byName("Zorel").hated.includes("Cicada"));
});

test("Priestess has no data in any tier", () => {
  const p = byName("Priestess");
  assert.strictEqual(p.loved.length + p.liked.length + p.disliked.length + p.hated.length, 0);
});

test("Balor hates Ant", () => {
  assert.ok(byName("Balor").hated.includes("Ant"));
});

test("Caldarus loves Fried Rice", () => {
  assert.ok(byName("Caldarus").loved.includes("Fried Rice"));
});

test("Celine hates Caterpillar", () => {
  assert.ok(byName("Celine").hated.includes("Caterpillar"));
});

test("Wheedle loves Ancient Gold Coin", () => {
  assert.ok(byName("Wheedle").loved.includes("Ancient Gold Coin"));
});

test("Vera likes Beet Salad", () => {
  assert.ok(byName("Vera").liked.includes("Beet Salad"));
});

test("Disliked category tags preserved verbatim (Junk, Bugs)", () => {
  assert.ok(byName("Adeline").disliked.includes("Junk"));
  assert.ok(byName("Adeline").disliked.includes("Bugs"));
});

test("every villager has exactly four tiers as arrays", () => {
  VILLAGERS.forEach((v) => {
    ["loved", "liked", "disliked", "hated"].forEach((tier) => {
      assert.ok(Array.isArray(v[tier]), `${v.name}.${tier} should be an array`);
    });
  });
});

console.log(`\n${passed} tests passed.`);
