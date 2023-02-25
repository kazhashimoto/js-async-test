// Adapted from:
// https://developer.mozilla.org/ja/docs/Learn/JavaScript/Asynchronous/Introducing

(function() {
  const thisScript = document.currentScript.src.slice(0);
  console.log('start:', thisScript,
    'async', document.currentScript.async,
    'defer', document.currentScript.defer);
  let count = 0;
  if (document.body) {
    count = document.body.querySelectorAll('*').length;
  }
  console.log('dom count=', count, 'readyState', document.readyState);

  const MAX_PRIME = 1000000;
  let quota = 10000;
  const params = new URL(document.location).searchParams;
  val = params.get('quota');
  if (val) {
    quota = parseInt(val);
    if (isNaN(quota)) {
      quota = 10000;
    }
  }

  const f = thisScript.match(/\/normal(\d)\.js$/);
  if (f) {
    loadSubScript(`sub${f[1]}.js`);
  }

  function loadSubScript(path) {
    const el = document.createElement('script');
    el.src = path;
    document.head.append(el);
  }

  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  }

  const random = (max) => Math.floor(Math.random() * max);

  function generatePrimes(quota) {
    const primes = [];
    while (primes.length < quota) {
      const candidate = random(MAX_PRIME);
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
    return primes;
  }

  const primes = generatePrimes(quota);
  console.log('end  :', thisScript, primes.length);
})();
