var VATCoin = artifacts.require("./VATCoin.sol");

contract('VATCoin', (accounts) => {

  let symbol = 'ATC';
  let name = 'Virtue Autonomous Trust Coin'
  let decimals = 18;

  let account1 = accounts[0];

  it('Symbol should be ' + symbol, () => {
    return VATCoin.deployed().then((instance) => {
      return instance.symbol.call()
    }).then((sym) => {
      assert.equal(symbol, sym, 'Symbol should be ATC');
    });
  });
  it('Name should be ' + name, () => {
    return VATCoin.deployed().then(inst => {
      return inst.name.call();
    }).then(nm => {
      assert.equal(name, nm, 'Name should be ', name);
    });
  });

  it('Decimals should be ' + decimals, () => {
    return VATCoin.deployed().then(inst => {
      return inst.decimals.call();
    }).then(d => {
      assert.equal(decimals, d, 'Decimals should be ', decimals);
    });
  });

  it('Account1 balance should be 0', () => {
    return VATCoin.deployed().then(inst => {
      return inst.balanceOf(account1);
    }).then(bal => {
      assert.equal(bal, 0, 'balance should be 0');
    });
  });

  it('Total supply should be 0', () => {
    return VATCoin.deployed().then(inst => {
      return inst.totalSupply();
    }).then(bal => {
      assert.equal(bal, 0, 'total supply should be 0');
    });
  });

  it('Account1 should have 5000 ATC', () => {
    let instance;
    return VATCoin.deployed().then(inst => {
      instance = inst;
      return inst.mint(account1, 5000);
    }).then(rcpt => {
      return instance.balanceOf(account1);
    }).then(bal => {
      assert.equal(5000, bal, 'Balance should be 5000');
    });
  });

  it('Total Supply should have 5000 ATC', () => {
    return VATCoin.deployed().then(inst => { 
      return inst.totalSupply();
    }).then(bal => {
      assert.equal(5000, bal, 'Total supply should be 5000');
    });
  });

});