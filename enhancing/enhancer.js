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
  } else {
    newItem.durability -= 10;
  }

  if (newItem.enhancement > 16) {
    newItem.enhancement -= 1;
  }

  return newItem;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  const newItem = { ...item };

  if (newItem.enhancement > 0) {
    newItem.name = `[+${newItem.enhancement}] ${newItem.name}`;
  }

  return newItem;
}
