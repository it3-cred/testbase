require('dotenv').config();

async function getCurrencies(){
    const url = process.env.API_KEY
    const data = await fetch(url+"/currencies.json")
    const currencies = await data.json()
    return currencies
}

const converterInterface = async (req, res) => {
    const currencies = await getCurrencies()
    const options = Object.entries(currencies).map(([code, name]) => {
        return `<option valuve="${code}">${code.toUpperCase()} - ${name}</option>`
    }).join("")
    const html = `<input type="Number"></input><select name="currency">
        ${options}
    </select><br><input type="Number"></input><select name="currency">
        ${options}
    </select>
    <button>Convert</button>`
    res.send(html)
    
}

module.exports = {converterInterface}
