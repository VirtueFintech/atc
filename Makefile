
.PHONY: compile

compile:
	truffle compile
	solc -o build/bin --optimize --overwrite --bin --abi src/VATCoin.sol

migrate:
	truffle migrate --network ropsten

deploy:
	truffle migrate --network live

test:
	truffle test

run:
	npm run dev

