pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract FertilizerCoin is StandardToken {
  string public name = "Fertilizer"; 
  string public symbol = "FERT";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 1000000000 * (10 ** decimals);
  uint public totalSupply;

  function FertilizerCoin() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}