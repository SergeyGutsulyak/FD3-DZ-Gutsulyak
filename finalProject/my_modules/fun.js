const platforms={ 1:'мобильная версия',
2:'приложение для iPhone',
3:'приложение для iPad',
4:'приложение для Android',
5:'приложение для Windows Phone',
6:'приложение для Windows 10',
7:'полная версия сайта',
8:'VK Mobile'}
/* Дата последнего посещения в базе не актуальна, по причине редкого обновления*/
function formatDateTime(dt){
    var year=dt.getFullYear();
    var month=dt.getMonth()+1;
    var day=dt.getDate();
    var hours=dt.getHours();
    var minutes=dt.getMinutes();
    var seconds=dt.getSeconds();

    return str0l(day,2) + '.' + str0l(month,2) + '.' + year + ' ' + str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);

    // дополняет строку Val слева нулями до длины Len
}

function str0l(val,len) {
    var strVal=val.toString();
    while ( strVal.length < len )
    strVal='0'+strVal;
    return strVal;
}
function msToDateTime(ms){
//console.log(ms);
var dt=new Date(ms*1000);
//console.log(dt);
return formatDateTime(dt);
}

export {msToDateTime,platforms,}