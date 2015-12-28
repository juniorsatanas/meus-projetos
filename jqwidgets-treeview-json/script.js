var builddata = function () {
    var source = [];
    var items = [];
    // build hierarchical source.
    for (i = 0; i < data.length; i++) {
        var item = data[i];
        var label = item["text"];
        var parentid = item["parentid"];
        var id = item["id"];

        if (items[parentid]) {
            var item = { parentid: parentid, label: label, item: item };
            if (!items[parentid].items) {
                items[parentid].items = [];
            }
            items[parentid].items[items[parentid].items.length] = item;
            items[id] = item;
        }
        else {
            items[id] = { parentid: parentid, label: label, item: item };
            source[id] = items[id];
        }
    }
    return source;
}

var source = builddata();
// create jqxTree
$('#jqxTree').jqxTree({ source: source, width: '500px' });
