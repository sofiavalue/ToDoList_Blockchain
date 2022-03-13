pragma solidity ^0.5.0;

contract TestContract {
  uint taskCount ;

  constructor() public {
    taskCount = 0;
  }

  function addtask() public {
    taskCount ++;
  }


  function rendertask() public view returns (uint) {
    return taskCount ;
  }
}
