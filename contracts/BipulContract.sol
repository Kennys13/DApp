// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BipulContract {
    string public ownerName;
    address public ownerAddress;
    uint256 public result;

    constructor() {
        ownerAddress = msg.sender;
        ownerName = "Bipul";
    }

    function multiply(uint256 _number1, uint256 _number2) public payable {
        require(msg.value > 0, "Value must be greater than 0");
        result = _number1 * _number2;
    }

    function subtract(uint256 _number1, uint256 _number2) public payable  {
        require(msg.value > 0, "Value must be greater than 0");
        require(_number1 >= _number2, "First number should be greater than or equal to the second number");
        result =  _number1 - _number2;
    }
}
