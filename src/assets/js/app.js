$(document).foundation();

// Stopwatch 03: https://gist.github.com/electricg/4372563

//Stopwatch 02: https://tools.arantius.com/stopwatch

// 0/1 = start/end
// 2 = state
// 3 = length, ms
// 4 = timer
// 5 = epoch
// 6 = disp el
// 7 = lap count

// var t=[0, 0, 0, 0, 0, 0, 0, 1],
// 	btnStopStart = document.getElementById("btn_stopstart"),
// 	btnReset = document.getElementById("btn_reset");

// btnStopStart.onclick = function StopStart() {
// // function StopStart() {
// 	t[t[2]]=(new Date()).valueOf();
// 	t[2]=1-t[2];

// 	if (0==t[2]) {
// 		clearInterval(t[4]);
// 		t[3]+=t[1]-t[0];
// 		var row=document.createElement('tr');
// 		var td=document.createElement('td');
// 		td.innerHTML=(t[7]++);
// 		row.appendChild(td);
// 		td=document.createElement('td');
// 		td.innerHTML=format(t[1]-t[0]);
// 		row.appendChild(td);
// 		td=document.createElement('td');
// 		td.innerHTML=format(t[3]);
// 		row.appendChild(td);
// 		document.getElementById('lap').appendChild(row);
// 		t[4]=t[1]=t[0]=0;
// 		disp();
// 	} else {
// 		t[4]=setInterval(disp, 43);
// 	}
// }

// btnReset.onclick = function Reset() {
// // function r() {
// 	if (t[2]) StopStart();
// 	t[4]=t[3]=t[2]=t[1]=t[0]=0;
// 	disp();
// 	document.getElementById('lap').innerHTML='';
// 	t[7]=1;
// }

// function disp() {
// 	if (t[2]) t[1]=(new Date()).valueOf();
// 	t[6].value=format(t[3]+t[1]-t[0]);
// }
// function format(ms) {
// 	// used to do a substr, but whoops, different browsers, different formats
// 	// so now, this ugly regex finds the time-of-day bit alone
// 	var d=new Date(ms+t[5]).toString()
// 		.replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/, '$1');
// 	var x=String(ms%1000);
// 	while (x.length<3) x='0'+x;
// 	d+='.'+x;
// 	return d;
// }

// // function load() {
// window.onload = function () {

// 	t[5]=new Date(1970, 1, 1, 0, 0, 0, 0).valueOf();
// 	t[6]=document.getElementById('disp');

// 	disp();

// 	if (!window.opener && window==window.top) {
// 		document.getElementById('remote').style.visibility='visible';
// 	}
// }

//Stopwatch 01: http://knowpapa.com/js-stopwatch/
// var stopwatch;
//     var runningstate = 0; // 1 means the timecounter is running 0 means counter stopped
//     var stoptime = 0;
//     var lapcounter = 0;
//     var currenttime;
//     var lapdate = '';
//     var lapdetails;

//     function timecounter(starttime)
//         {
//         currentdate = new Date();
//         lapdetails = document.getElementById('lapdetails');
//         stopwatch = document.getElementById('stopwatch');

//         var timediff = currentdate.getTime() - starttime;
//         if(runningstate == 0)
//             {
//             timediff = timediff + stoptime
//             }
//         if(runningstate == 1)
//             {
//             stopwatch.value = formattedtime(timediff);
//             refresh = setTimeout('timecounter(' + starttime + ');',10);
//             }
//         else
//             {
//             window.clearTimeout(refresh);
//             stoptime = timediff;
//             }
//         }

// function marklap()
//              {
//              if(runningstate == 1)
//                    {
//                    if(lapdate != '')
//                        {
//                         var lapold = lapdate.split(':');
//                         var lapnow = stopwatch.value.split(':');
//                         var lapcount = new Array();
//                         var x = 0
//         for(x; x < lapold.length; x++)
//              {
//          lapcount[x] = new Array();
//          lapcount[x][0] = lapold[x]*1;
//          lapcount[x][1] = lapnow[x]*1;
//               }
//          if(lapcount[1][1] < lapcount[1][0])
//               {
//             lapcount[1][1] += 60;
//               lapcount[0][1] -= 1;
//              }
//           if(lapcount[2][1] < lapcount[2][0])
//              {
//              lapcount[2][1] += 10;
//              lapcount[1][1] -= 1;
//               }
//        var mzeros = (lapcount[0][1] - lapcount[0][0]) < 10?'0':'';
//        var szeros = (lapcount[1][1] - lapcount[1][0]) < 10?'0':'';
//        lapdetails.value += '\t+' + mzeros + (lapcount[0][1] - lapcount[0][0]) + ':'
//         + szeros + (lapcount[1][1] - lapcount[1][0]) + ':'
//            + (lapcount[2][1] - lapcount[2][0]) + '\n';
//          }
//        lapdate = stopwatch.value;
//        lapdetails.value += (++lapcounter) + '. ' + stopwatch.value;
//         }
//      }
// function startandstop()
//       {
//       var startandstop = document.getElementById('startandstopbutton');
//       var startdate = new Date();
//       var starttime = startdate.getTime();
//       if(runningstate==0)
//     {
//      startandstop.value = 'Stop';
//       runningstate = 1;
//      timecounter(starttime);
//      }
//  else
//       {
//       startandstop.value = 'Start';
//       runningstate = 0;
//       lapdate = '';
//       }
//    }
//       function resetstopwatch()
//         {
//       lapdetails.value = '';
//       lapcounter = 0;
//        stoptime = 0;
//       lapdate = '';
//       window.clearTimeout(refresh);
//      if(runningstate == 1)
//    {
//    var resetdate = new Date();
//    var resettime = resetdate.getTime();
//    timecounter(resettime);
//   }
// else
//   {
// stopwatch.value = "0:0:0";
//   }
//  }
//  function formattedtime(unformattedtime)
//   {
//    var decisec = Math.floor(unformattedtime/100) + '';
//    var second = Math.floor(unformattedtime/1000);
//     var minute = Math.floor(unformattedtime/60000);
// decisec = decisec.charAt(decisec.length - 1);
// second = second - 60 * minute + '';
// return minute + ':' + second + ':' + decisec;
// }

