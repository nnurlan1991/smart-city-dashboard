const fs = require('fs');
const content = fs.readFileSync('SMARTCITY_DASHBOARD_BUILD_PLAN.md', 'utf-8');
const regex = /```javascript\r?\n([\s\S]*?)```/g;
let match;
let out = '';
while ((match = regex.exec(content)) !== null) {
  if (match[1].includes('INITIATIVES') || match[1].includes('CITIES') || match[1].includes('LEADERS')) {
    out += match[1] + '\n';
  }
}
fs.writeFileSync('data.js', out, 'utf-8');
console.log('Done!');
