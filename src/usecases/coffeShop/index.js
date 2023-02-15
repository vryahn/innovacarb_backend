const Coffeshop = require("../../models/coffeshop").model;

const create = async (nameCafeteria, ownweName, phone, adress, socialRed, postalCode, kgAverage) => {
    
    const coffeshop = new Coffeshop({ nameCafeteria, ownweName, phone, adress, socialRed, postalCode, kgAverage });
  
    return await coffeshop.save();
  };


module.exports={
    create,
}