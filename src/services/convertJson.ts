export const ConvertJson = (data: any) => {
    var jsonData = [];
    var headers = [];
    var rows = data.split("\n")
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].split(",")
        var rowData: any = {}
        for (var j = 0; j < cells.length; j++) {
            if (i == 0) {
                var headerName = cells[j].trim()
                headers.push(headerName)
            } else {
                var key = headers[j]
                if (key) {
                    rowData[key] = cells[j].trim()
                }
            }
        }
        if (i != 0) {
            jsonData.push(rowData)
        }
    }
    return [jsonData, headers]
}