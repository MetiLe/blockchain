pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract ForensicContract {  
  struct CrimeDetails {
        string crime_id;
        string exhibit_name;
        string desc;
        string timestamp;
        string ipfsHash;
    }
    
    CrimeDetails[] public crime;    

    function addReport(string memory _crime_id, string memory _exhibit_name, string memory _desc, string memory _timestamp) public returns(uint) {
        crime.length++;
        crime[crime.length-1].crime_id = _crime_id;
        crime[crime.length-1].exhibit_name = _exhibit_name;
        crime[crime.length-1].desc = _desc;
        crime[crime.length-1].timestamp = _timestamp;
        //crime[crime.length-1].ipfsHash = _ipfsHash;
        //return crime.length;        
    }
    
    function getPatCount() public view returns(uint) {
        return crime.length;
    }
    
    function getPat(uint index) public view returns (string memory, string memory, string memory,string memory)
    {
        return (crime[index].crime_id, crime[index].exhibit_name, crime[index].desc, crime[index].timestamp);
    }
    
   function getAllForensicDetails() public view returns (CrimeDetails[] memory)
    {
        CrimeDetails[] memory id = new CrimeDetails[](crime.length);
        for (uint i = 0; i < crime.length; i++) {
            CrimeDetails storage tempCrime = crime[i];
            id[i] = tempCrime;
        }
        return id;
    }
}
