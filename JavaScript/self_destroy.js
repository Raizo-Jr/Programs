// self destruction program part - 1
const fs = require('fs');

fs.unlink('self_destroy.js', (err) => {
  if (err) throw err;
  console.log('file deleted successfully!');
});
