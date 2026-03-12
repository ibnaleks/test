// Задание 1

import { productPrice }
  from './data.js';

const newPrice = productPrice.map(function (cost) {
  const costInflation = cost.replace('$', '') * 1.2;
  return { oldPrice: cost, currentPrice: costInflation.toFixed() };
})

// Задание 2

import { userNames }
  from './data.js';

const sortedUserNames = userNames.filter(name => !name.startsWith('J') && name.length > 5); // Использовал имена на букву J, потому что у меня в массиве не оказалось имен на букву A )))

// Задание 3

import { firstTenComments }
  from './comments.js';

const commentSummaries = firstTenComments.map(function (comment) {
  let { id, email, body } = comment;
  return { id, author: email.toLowerCase(), shortBody: body.slice(0, 21) + "..." };
})

// финальный бос

import { users }
  from './data.js';

const vipUsers = users
  .filter(user => user.balance > 50)
  .map(({ id, name, balance }) => ({ id, name: '[VIP] ' + name, balance: balance * 2, status: 'active' }))
  .reverse();
