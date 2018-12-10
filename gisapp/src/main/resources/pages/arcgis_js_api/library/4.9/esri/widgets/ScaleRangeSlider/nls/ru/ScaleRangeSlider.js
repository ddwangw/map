// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define({noLimit:"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",preview:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440",currentScaleTooltip:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u0430\u0441\u0448\u0442\u0430\u0431 \u043a\u0430\u0440\u0442\u044b (${scaleLabel})",customScaleInputTooltip:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431.",current:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439",setTo:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
selectOne:"(\u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u0438\u043d)",setToSelectOne:"${setTo} ${selectOne}",scaleRangeLabels:{world:"\u0412\u0435\u0441\u044c \u043c\u0438\u0440",continent:"\u041a\u043e\u043d\u0442\u0438\u043d\u0435\u043d\u0442",countries:"\u0421\u0442\u0440\u0430\u043d\u044b",country:"\u0421\u0442\u0440\u0430\u043d\u0430",states:"\u0428\u0442\u0430\u0442\u044b",state:"\u0428\u0442\u0430\u0442",counties:"\u041e\u043a\u0440\u0443\u0433\u0430",county:"\u041e\u043a\u0440\u0443\u0433",
metropolitanArea:"\u041c\u0435\u0433\u0430\u043f\u043e\u043b\u0438\u0441",cities:"\u0413\u043e\u0440\u043e\u0434\u0430",city:"\u0413\u043e\u0440\u043e\u0434",town:"\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0443\u043d\u043a\u0442",neighborhood:"\u0420\u0430\u0439\u043e\u043d",streets:"\u0423\u043b\u0438\u0446\u044b",street:"\u0423\u043b\u0438\u0446\u0430",buildings:"\u0417\u0434\u0430\u043d\u0438\u044f",building:"\u0417\u0434\u0430\u043d\u0438\u0435",smallBuilding:"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0435 \u0437\u0434\u0430\u043d\u0438\u0435",
rooms:"\u041a\u043e\u043c\u043d\u0430\u0442\u044b",room:"\u041a\u043e\u043c\u043d\u0430\u0442\u0430"},featuredScaleLabels:{current:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0438\u0434 \u043a\u0430\u0440\u0442\u044b (${scaleLabel})",world:"\u041c\u0438\u0440 (${scaleLabel})",continent:"\u041a\u043e\u043d\u0442\u0438\u043d\u0435\u043d\u0442 (${scaleLabel})",countriesBig:"\u0421\u0442\u0440\u0430\u043d\u044b - \u0431\u043e\u043b\u044c\u0448\u0438\u0435 (${scaleLabel})",countriesSmall:"\u0421\u0442\u0440\u0430\u043d\u044b - \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0435 (${scaleLabel})",
statesProvinces:"\u0428\u0442\u0430\u0442\u044b/\u043e\u0431\u043b\u0430\u0441\u0442\u0438 (${scaleLabel})",stateProvince:"\u0428\u0442\u0430\u0442/\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f (${scaleLabel})",counties:"\u041e\u043a\u0440\u0443\u0433\u0430 (${scaleLabel})",county:"\u041e\u043a\u0440\u0443\u0433 (${scaleLabel})",metropolitanArea:"\u041c\u0435\u0442\u0440\u043e\u043f\u043e\u043b\u0438\u044f (${scaleLabel})",cities:"\u041a\u0440\u0443\u043f\u043d\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 (${scaleLabel})",
city:"\u041a\u0440\u0443\u043f\u043d\u044b\u0439 \u0433\u043e\u0440\u043e\u0434 (${scaleLabel})",town:"\u0413\u043e\u0440\u043e\u0434 (${scaleLabel})",neighborhood:"\u0420\u0430\u0439\u043e\u043d (${scaleLabel})",streets:"\u0423\u043b\u0438\u0446\u044b (${scaleLabel})",street:"\u0423\u043b\u0438\u0446\u0430 (${scaleLabel})",buildings:"\u0421\u0442\u0440\u043e\u0435\u043d\u0438\u044f (${scaleLabel})",building:"\u0421\u0442\u0440\u043e\u0435\u043d\u0438\u0435 (${scaleLabel})",smallBuilding:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0437\u0434\u0430\u043d\u0438\u0435 (${scaleLabel})",
rooms:"\u041a\u043e\u043c\u043d\u0430\u0442\u044b (${scaleLabel})",room:"\u041a\u043e\u043c\u043d\u0430\u0442\u0430 (${scaleLabel})"}});