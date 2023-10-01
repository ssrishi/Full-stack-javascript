const insert = document.querySelector("#insert")
document.addEventListener('keydown',function(e){
    insert.innerHTML = `
    <div class = "color">
    <table>
        <tr>
            <th>Key</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>
    `
})
