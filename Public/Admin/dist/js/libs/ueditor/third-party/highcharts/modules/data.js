/*
 Data plugin for Highcharts

 (c) 2012-2013 Torstein Hønsi
 Last revision 2013-06-07

 License: www.highcharts.com/license
*/

(function(e){var t=e.each,n=function(e,t){this.init(e,t)};e.extend(n.prototype,{init:function(e,t){this.options=e,this.chartOptions=t,this.columns=e.columns||this.rowsToColumns(e.rows)||[],this.columns.length?this.dataFound():(this.parseCSV(),this.parseTable(),this.parseGoogleSpreadsheet())},getColumnDistribution:function(){var n=this.chartOptions,r=n&&n.chart&&n.chart.type,i=[];t(n&&n.series||[],function(t){i.push((e.seriesTypes[t.type||r||"line"].prototype.pointArrayMap||[0]).length)}),this.valueCount={global:(e.seriesTypes[r||"line"].prototype.pointArrayMap||[0]).length,individual:i}},dataFound:function(){this.parseTypes(),this.findHeaderRow(),this.parsed(),this.complete()},parseCSV:function(){var e=this,n=this.options,r=n.csv,i=this.columns,s=n.startRow||0,o=n.endRow||Number.MAX_VALUE,u=n.startColumn||0,a=n.endColumn||Number.MAX_VALUE,f=0;r&&(r=r.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(n.lineDelimiter||"\n"),t(r,function(r,l){var c=e.trim(r),h=c.indexOf("#")===0;l>=s&&l<=o&&!h&&c!==""&&(c=r.split(n.itemDelimiter||","),t(c,function(e,t){t>=u&&t<=a&&(i[t-u]||(i[t-u]=[]),i[t-u][f]=e)}),f+=1)}),this.dataFound())},parseTable:function(){var e=this.options,n=e.table,r=this.columns,i=e.startRow||0,s=e.endRow||Number.MAX_VALUE,o=e.startColumn||0,u=e.endColumn||Number.MAX_VALUE,a;n&&(typeof n=="string"&&(n=document.getElementById(n)),t(n.getElementsByTagName("tr"),function(e,n){a=0,n>=i&&n<=s&&t(e.childNodes,function(e){(e.tagName==="TD"||e.tagName==="TH")&&a>=o&&a<=u&&(r[a]||(r[a]=[]),r[a][n-i]=e.innerHTML,a+=1)})}),this.dataFound())},parseGoogleSpreadsheet:function(){var e=this,t=this.options,n=t.googleSpreadsheetKey,r=this.columns,i=t.startRow||0,s=t.endRow||Number.MAX_VALUE,o=t.startColumn||0,u=t.endColumn||Number.MAX_VALUE,a,f;n&&jQuery.getJSON("https://spreadsheets.google.com/feeds/cells/"+n+"/"+(t.googleSpreadsheetWorksheet||"od6")+"/public/values?alt=json-in-script&callback=?",function(t){var t=t.feed.entry,n,l=t.length,c=0,p=0,v;for(v=0;v<l;v++)n=t[v],c=Math.max(c,n.gs$cell.col),p=Math.max(p,n.gs$cell.row);for(v=0;v<c;v++)v>=o&&v<=u&&(r[v-o]=[],r[v-o].length=Math.min(p,s-i));for(v=0;v<l;v++)if(n=t[v],a=n.gs$cell.row-1,f=n.gs$cell.col-1,f>=o&&f<=u&&a>=i&&a<=s)r[f-o][a-i]=n.content.$t;e.dataFound()})},findHeaderRow:function(){t(this.columns,function(){}),this.headerRow=0},trim:function(e){return typeof e=="string"?e.replace(/^\s+|\s+$/g,""):e},parseTypes:function(){for(var e=this.columns,t=e.length,n,r,i,s;t--;)for(n=e[t].length;n--;)r=e[t][n],i=parseFloat(r),s=this.trim(r),s==i?(e[t][n]=i,i>31536e6?e[t].isDatetime=!0:e[t].isNumeric=!0):(r=this.parseDate(r),t===0&&typeof r=="number"&&!isNaN(r)?(e[t][n]=r,e[t].isDatetime=!0):e[t][n]=s===""?null:s)},dateFormats:{"YYYY-mm-dd":{regex:"^([0-9]{4})-([0-9]{2})-([0-9]{2})$",parser:function(e){return Date.UTC(+e[1],e[2]-1,+e[3])}}},parseDate:function(e){var t=this.options.parseDate,n,r,i;t&&(n=t(e));if(typeof e=="string")for(r in this.dateFormats)t=this.dateFormats[r],(i=e.match(t.regex))&&(n=t.parser(i));return n},rowsToColumns:function(e){var t,n,r,i,s;if(e){s=[],n=e.length;for(t=0;t<n;t++){i=e[t].length;for(r=0;r<i;r++)s[r]||(s[r]=[]),s[r][t]=e[t][r]}}return s},parsed:function(){this.options.parsed&&this.options.parsed.call(this,this.columns)},complete:function(){var t=this.columns,n,r,i=this.options,s,o,u,a,f,l;if(i.complete){this.getColumnDistribution(),t.length>1&&(n=t.shift(),this.headerRow===0&&n.shift(),n.isDatetime?r="datetime":n.isNumeric||(r="category"));for(a=0;a<t.length;a++)this.headerRow===0&&(t[a].name=t[a].shift());o=[];for(a=0,l=0;a<t.length;l++){s=e.pick(this.valueCount.individual[l],this.valueCount.global),u=[];for(f=0;f<t[a].length;f++)u[f]=[n[f],t[a][f]!==void 0?t[a][f]:null],s>1&&u[f].push(t[a+1][f]!==void 0?t[a+1][f]:null),s>2&&u[f].push(t[a+2][f]!==void 0?t[a+2][f]:null),s>3&&u[f].push(t[a+3][f]!==void 0?t[a+3][f]:null),s>4&&u[f].push(t[a+4][f]!==void 0?t[a+4][f]:null);o[l]={name:t[a].name,data:u},a+=s}i.complete({xAxis:{type:r},series:o})}}}),e.Data=n,e.data=function(e,t){return new n(e,t)},e.wrap(e.Chart.prototype,"init",function(n,r,i){var s=this;r&&r.data?e.data(e.extend(r.data,{complete:function(o){r.series&&t(r.series,function(t,n){r.series[n]=e.merge(t,o.series[n])}),r=e.merge(o,r),n.call(s,r,i)}}),r):n.call(s,r,i)})})(Highcharts);