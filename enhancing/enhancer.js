module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  const newItem = { ...item };

  if (newItem.enhancement < 20) {
    newItem.enhancement++;
  }
  return newItem;
}

function fail(item) {
  const newItem = { ...item };

  if (newItem.enhancement < 15) {
    newItem.durability -= 5;
  } else if (newItem.enhancement > 16) {
    newItem.durability -= 10;
    newItem.enhancement -= 1;
  } else if (newItem.enhancement >= 15) {
    newItem.durability -= 10;
  }

  return newItem;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
