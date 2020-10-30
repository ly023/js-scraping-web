const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const extractText = (node) => node.textContent.trim();

const processRow = (row) => Array.from(row.children).map(extractText);
const parseData = (goalsHTML) => {
    const dom = new JSDOM(goalsHTML);
    const rows = Array.from(
        dom.window.document.querySelectorAll('.responsive-table tbody tr'),
    );
    const cells = rows.map(processRow);

    return cells;
};

module.exports = {parseData};
