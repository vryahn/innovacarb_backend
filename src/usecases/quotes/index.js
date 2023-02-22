const Quotes = require ("../../models/quotes").model;

const create = async (dateQuote, statusQuote)=>{
    const quote= new Quotes({dateQuote, statusQuote})
    return await quote.save();
}

const getAllQuotes = async () => await Quotes.find({});

const getOneQuote = async ()=> await Quotes.findById(id);

const updateQuote = async (dateQuote, statusQuote)=>{
    return await Quotes.findByIdAndUpdate(id, {dateQuote, statusQuote})
}

const delQuote = async (id)=>{
    return await Quotes.findByIdAndDelete(id);
}