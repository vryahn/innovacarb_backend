const Coffeshop = require("../../models/coffeshop").model;

const create = async (nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage) => {
    
    const coffeshop = new Coffeshop({ nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage });
  
    return await coffeshop.save();
  };

  const del = async (id)=>{
    return await Coffeshop.findByIdAndDelete(id);
  }

const getAll = async () => await Coffeshop.find({});

const getById = async (id) => await Coffeshop.findById(id);

const update = async (id, nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage) => {
 
  return await Coffeshop.findByIdAndUpdate(id, { nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage });
};

module.exports={
    create,
    del,
    getAll,
    getById,
    update
}