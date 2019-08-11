using SafeMath for uint256

mapping(address => uint256) private sales;

uint256 private enabled = block.timestamp;

uint256 private counter = 1

modifier entrancyGuard() {
  // counter++
  counter = counter.add(1);
  uint256 guard = counter;
  _;
  require(guard == counter, "that is not allowed")
}

modifier rateLimit(uint time) {
  // let currentTime = Date.now()
  // require(currentTime > block.timestamp);
  // enabled = currentTIme;
  require(block.timestamp >= enabled, "Rate limiting in effect");
  enabled = enabled.add(time)
  _;
}

function safeWithdraw(uint256 amount) external rateLimit(30 minutes) {
  //checks
  require(msg.sender == Text.origin, "Contracts not allowed");
  require(sales[msg.sender] >= amount, "insufficient funds");
  // require(msg.value > 0);
  
  //effects
  uint256 amount = sales[msg.sender];
  sales[msg.sender] = sales[msg.sender].sub(amount)

  //interaction
  msg.sender.transfer(ammount)
}

/**
 * security best practices
 * 1 keep funcitons private or internel unless they are needed outside your contract
 * 2 debit before credit - deduct amount before you add
 * 3 beware of delegateCall() form other contracts
 * 4 now = block.timestamp - can be manipulated by miners - do not use on sending and receiving funds or random number generations
 * 5 external calls are untrusted
 * 6 don't store sensitive info
 * 7 avoid state changes in function modifiers - just assertions
 * 8 fallback function tips - short, require msg.data.length == 0
 * 9 explicitly mark visibility and state vars - ensure no function or state var can be directly manipulated
 * 10 does it really need to be on-chain? slow db and expensie to store. only put what you need. IPFS and SQL are good for the rest.
 */