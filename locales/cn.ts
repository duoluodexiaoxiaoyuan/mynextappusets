console.log('Loaded CN');

export default {
  hello: '你好',
  welcome: '你好 {name}!',
  'about.you': '你好 {name}! 你 {age} 岁',
  'scope.test': 'A scope',
  'scope.more.test': 'A scope',
  'scope.more.param': 'A scope with {param}',
  'scope.more.and.more.test': 'A scope',
  'scope.more.stars#one': '1 star on GitHub',
  'scope.more.stars#other': '{count} stars on GitHub',
  'missing.translation.in.fr': 'This should work',
  'cows#one': 'A cow',
  'cows#other': '{count} cows',
} as const;

