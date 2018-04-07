'use strict';

const table = (json => {
  let html = `<tr>
      <th>Title</th>
      <th>Date</th>
      <th>Category</th>
      </tr>`;
  json.forEach(evnt => {
    console.log(evnt);
    html += `<tr>
            <td>${evnt.title}</td>
            <td>${evnt.date}</td>
            <td>${evnt.category}</td>
           </tr>`;
  });
  html += '</table>';
  return html;
});