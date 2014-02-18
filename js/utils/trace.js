//
// Hackathon - a web based fight and collect game.
// Copyright (C) 2014 Christopher Kelley   <tsukumokun(at)icloud.com>
//                    Till Smejkal         <till.smejkal(at)gmail.com>
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http:// www.gnu.org/licenses/>
//

//REQUIRE: browser.js

function getErrorObject(){
    try { throw Error('') } catch(err) {return err;}
}

var trace_log = function(type,message,css){
	console.log("Unsupported Browser: "+type+":"+message);
}
if(BROWSER_CHROME){
	trace_log = function(type,message,css){
		var callbacks = 5;

		var trace = getErrorObject().stack.split("\n")[callbacks];

		var line = trace.split(":")[2];

		var func = trace.substring(trace.indexOf("at ")+3,trace.indexOf(" ("));
		if(trace.indexOf(" (")<1)func="global";

		var file = trace.substring(trace.lastIndexOf("/")+1);
		file = file.substring(0,file.indexOf(":"));

		console.log("%c"+type+" @ "+file+" ["+func+"]("+line+"): "+message,css);
	}
}
else if(BROWSER_SAFARI){
	trace_log = function(type,message,css){
		var callbacks = 3;

		var trace = getErrorObject().stack.split("\n")[callbacks];

		var line = trace.split(":")[2];

		var func = trace.substring(0,trace.indexOf("@"));

		var file = trace.substring(trace.lastIndexOf("/")+1);
		file = file.substring(0,file.indexOf(":"));

		console.log("%c"+type+" @ "+file+" ["+func+"]("+line+"): "+message,css);
	}
}
else if(BROWSER_FIREFOX){
	trace_log = function(type,message,css){

		var callbacks = 3;

		var trace = getErrorObject().stack.split("\n")[callbacks];

		var line = trace.split(":")[2];

		var func = trace.substring(0,trace.indexOf("@"));
		if(func.length<1)func="global";

		var file = trace.substring(trace.lastIndexOf("/")+1);
		file = file.substring(0,file.indexOf(":"));

		if (window.console && (window.console.firebug || window.console.exception)){
			console.log("%c"+type+" @ "+file+" ["+func+"]("+line+"): "+message,css);
		}else{
			console.log("For better logging please use Firebug!");
			console.log(type+" @ "+file+" ["+func+"]("+line+"): "+message);
		}

	}
}

var ERROR   = function(){};
var SEVERE  = function(){};
var WARN    = function(){};
var INFO    = function(){};
var SYSTEM  = function(){};
var NOTE    = function(){};
var TODO    = function(){};
var XXX     = function(){};
var TEXT    = function(){};

if(typeof RELEASE === 'undefined'){
	ERROR   = function(message){trace_log("[ERROR] ",message,'color: #E74C3C');}
	SEVERE  = function(message){trace_log("[SEVERE]",message,'color: #C0392B');}
	WARN    = function(message){trace_log("[WARN]  ",message,'color: #F1C40F');}
	INFO    = function(message){trace_log("[INFO]  ",message,'color: #3498DB');}
	SYSTEM  = function(message){trace_log("[SYSTEM]",message,'color: #9B59B6');}
	NOTE    = function(message){trace_log("[NOTE]  ",message,'color: #95A5A6');}
	TODO    = function(message){trace_log("[TODO]  ",message,'color: #2ECC71');}
	XXX     = function(message){trace_log("[XXX]   ",message,'color: #1ABC9C');}
	TEXT    = function(message){trace_log("[TEXT]  ",message,'color: #34495E');}

	SYSTEM("Tracing Enabled");


}
else
{
	console.log("Tracing Disabled for Release");
}



