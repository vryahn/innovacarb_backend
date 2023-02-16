const Coffeshop = require("../../models/coffeshop").model;

const create = async (nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage) => {
    
    const coffeshop = new Coffeshop({ nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage });
  
    return await coffeshop.save();
  };


module.exports={
    create,
}