// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22;
pragma experimental ABIEncoderV2;

contract SmartContract {
    struct Product {
        address owner;
        address farmer;
        string name;
        string price;
        string typeItem;
        string description;
    }

    Product[] productList;

    event RegisteredProduct(address sender, bool confirmed);

    // PRODUCTS
    function setProduct(
        string memory _name,
        string memory _price,
        string memory _typeItem,
        string memory _description
    ) public {
        productList.push(
            Product({
                owner: msg.sender,
                farmer: msg.sender,
                name: _name,
                price: _price,
                typeItem: _typeItem,
                description: _description
            })
        );
        emit RegisteredProduct(msg.sender, true);
    }

    function getProduct(uint256 _index)
        public
        view
        returns (
            address,
            address,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Product memory product = productList[_index];
        return (
            product.owner,
            product.farmer,
            product.name,
            product.price,
            product.typeItem,
            product.description
        );
    }

    function getAllProducts() public view returns (Product[] memory) {
        return (productList);
    }
}
