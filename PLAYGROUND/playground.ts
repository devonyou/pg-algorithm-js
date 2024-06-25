/**
 * [소수 판단] - 에라토스테네스의 체
 */
function isPrime(num) {
	if (num <= 1) return false // 1 이하의 숫자는 소수가 아님
	if (num <= 3) return true // 2와 3은 소수
	if (num % 2 === 0 || num % 3 === 0) return false // 2와 3으로 나누어지는 숫자는 소수가 아님

	for (let i = 5; i <= Math.floor(Math.sqrt(num)); i += 6) {
		if (!(num % i) || !(num % (i + 2))) return false // 6n±1의 형태가 아니면 소수가 아니다
	}
	return true
}
