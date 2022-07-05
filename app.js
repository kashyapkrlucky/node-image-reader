const { createWorker } = require('tesseract.js');
const fs = require('fs');
const worker = createWorker({
    logger: m => console.log(m),
});

(async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    // await worker.FS('writeFile', ['data.txt', 'Hi\nTesseract.js\n']);
    await worker.recognize('images/jsq1.jpg').then(result => {
        const { data: { text } } = result;
        // console.log(text);
        fs.writeFileSync('results.txt', text);
    });
    await worker.terminate();
})();

