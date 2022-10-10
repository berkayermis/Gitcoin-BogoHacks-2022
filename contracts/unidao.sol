//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Unidao is Ownable {

    event ApplicationSent(address indexed admin, string universityName, uint256 universityId);
    event pollCreated (address indexed admin, string universityName, uint256 pollId);

    struct Poll {
        string universityName;
        address admin;
        uint256 pollId;
        string pollDescription;
        uint256 pollStartTime;
        uint256 pollEndTime;
        uint256 pollYesVotes;
        uint256 pollNoVotes;
        bool pollActive;
    }

    struct university {
        address admin;
        string universityName;
        uint256 universityId;
        string country;
        string city;
        string communityName;
        string moderatorDomain;
        uint totalNoOfCommunity;
    }

    mapping (uint => university) public universities;
    mapping (uint => Poll) public polls;

    uint public universityCount = 0;
    uint public pollCount = 0;

    function applicationFunction(
                    string memory _universityName, 
                    string memory _country, 
                    string memory _city,
                    string memory _communityName, 
                    string memory _moderatorDomain, 
                    uint _totalNoOfCommunity,
                    uint8 _v,
                    bytes32 _r,
                    bytes32 _s,
                    bytes32 _hashedMessage
                    ) public {
        address expectedAddress = verifySignature(_hashedMessage, _v, _r, _s);
        require(expectedAddress == msg.sender, "Invalid signature");
        universities[universityCount] = university(
            msg.sender, 
            _universityName, 
            universityCount,
            _country, 
            _city,
            _communityName, 
            _moderatorDomain, 
            _totalNoOfCommunity
            );
        emit ApplicationSent(msg.sender, _universityName, universityCount);
        universityCount++;
    }
    
    function getUniversityCount() public view returns (uint) {
        return universityCount;
    }

    function getAllUniversities() public view returns (university[] memory) {
        university[] memory allUniversities = new university[](universityCount);
        for (uint i = 0; i < universityCount; i++) {
            allUniversities[i] = universities[i];
        }
        return allUniversities;
    }

    function getApplication(uint _index) public view returns (university memory) {
        return universities[_index];
    }

    function verifySignature(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s) internal pure returns (address) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHashMessage = keccak256(abi.encodePacked(prefix, _hashedMessage));
        address signer = ecrecover(prefixedHashMessage, _v, _r, _s);
        return signer;
    }

    function createPoll(uint _duration, uint _universityId, string memory _universityName, string memory _pollDescription) public {
        require(universities[_universityId].admin == msg.sender, "You are not the admin of this university");
        polls[pollCount] = Poll(
            _universityName,
            msg.sender,
            pollCount,
            _pollDescription,
            block.timestamp,
            block.timestamp + _duration,
            0,
            0,
            true
        );
        emit pollCreated(msg.sender, _universityName, pollCount);
        pollCount++;
    } 

    function verifySignatureV2(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s) public pure returns (address) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHashMessage = keccak256(abi.encodePacked(prefix, _hashedMessage));
        address signer = ecrecover(prefixedHashMessage, _v, _r, _s);
        return signer;
    }}