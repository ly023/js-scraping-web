const fs = require('fs').promises;

const saveStats = async (data) => {
    fs.writeFile('./messi-data.json', JSON.stringify(data));
};

module.exports = {saveStats};
