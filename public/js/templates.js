'use strict';

const table = (json => {
  let html = `<tr>
      <th>Title</th>
      <th>Date</th>
      <th>Category</th>
      </tr>`;
  json.forEach(event => {
    console.log(event);
    html += `<tr>
            <td>${event.title}</td>
            <td>${event.date}</td>
            <td>${event.category}</td>
           </tr>`;
  });
  html += '</table>';
  return html;
});