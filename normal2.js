(function() {
  console.log('start:', document.currentScript.src);
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
  console.log('end  :', document.currentScript.src, primes.length);
})();
