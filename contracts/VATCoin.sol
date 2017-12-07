pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

/**
 * The EMRToken contract does this and that...
 * This Token is for later use for Virtue Autonmous Coin Project
 */
contract VATCoin is MintableToken {

  string public name = "Virtue Autonomous Trust Coin"; 
  string public symbol = "ATC";
  uint public decimals = 18;

  function VATCoin () {    
  }  

}

