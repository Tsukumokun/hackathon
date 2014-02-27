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

#pragma once

#include "browser.js"

// Override the console directive 
//  This effectively allows trace to manage
//  logging from third party scripts

var internal_trace_log = console.log.bind(console);

var console    = {};
console.log    = function(message){TEXT(message);};
console.info   = function(message){INFO(message);};
console.warn   = function(message){WARN(message);};
console.error  = function(message){ERROR(message);};

var getErrorObject = function(){
    try { throw Error('') } catch(err) {return err;}
}

var trace_log = function(type,message,css){
	internal_trace_log("Unsupported Browser: "+type+":"+message);
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

		internal_trace_log("%c"+type+" @ "+file+" ["+func+"]("+line+"): "+message,css);
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

		internal_trace_log("%c"+type+" @ "+file+" ["+func+"]("+line+"): "+message,css);
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
			internal_trace_log("%c"+type+" @ "+file+" ["+func+"]("+line+"): "+message,css);
		}else{
			internal_trace_log("For better logging please use Firebug!");
			internal_trace_log(type+" @ "+file+" ["+func+"]("+line+"): "+message);
		}

	}
}

//Setup trace toggles

var ERROR   = function(){};
var SEVERE  = function(){};
var WARN    = function(){};
var INFO    = function(){};
var SYSTEM  = function(){};
var NOTE    = function(){};
var TODO    = function(){};
var XXX     = function(){};
var TEXT    = function(){};

function trace_all_enable()
{
	ERROR   = function(message){trace_log("[ERROR] ",message,'color: #E74C3C');}
	SEVERE  = function(message){trace_log("[SEVERE]",message,'color: #C0392B');}
	WARN    = function(message){trace_log("[WARN]  ",message,'color: #F1C40F');}
	INFO    = function(message){trace_log("[INFO]  ",message,'color: #3498DB');}
	SYSTEM  = function(message){trace_log("[SYSTEM]",message,'color: #9B59B6');}
	NOTE    = function(message){trace_log("[NOTE]  ",message,'color: #95A5A6');}
	TODO    = function(message){trace_log("[TODO]  ",message,'color: #2ECC71');}
	XXX     = function(message){trace_log("[XXX]   ",message,'color: #1ABC9C');}
	TEXT    = function(message){trace_log("[TEXT]  ",message,'color: #34495E');}
	internal_trace_log("All Tracing Enabled");
}

function trace_all_disable()
{
	ERROR   = function(){};
	SEVERE  = function(){};
	WARN    = function(){};
	INFO    = function(){};
	SYSTEM  = function(){};
	NOTE    = function(){};
	TODO    = function(){};
	XXX     = function(){};
	TEXT    = function(){};
	internal_trace_log("All Tracing Disabled");
}

function trace_error_enable()
{
	ERROR   = function(message){trace_log("[ERROR] ",message,'color: #E74C3C');}
	internal_trace_log("Error Tracing Enabled");
}
function trace_error_disable()
{
	ERROR   = function(){};
	internal_trace_log("Error Tracing Disabled");
}
function trace_severe_enable()
{
	SEVERE  = function(message){trace_log("[SEVERE]",message,'color: #C0392B');}
	internal_trace_log("Severe Tracing Enabled");
}
function trace_severe_disable()
{
	SEVERE  = function(){};
	internal_trace_log("Severe Tracing Disabled");
}
function trace_warn_enable()
{
	WARN    = function(message){trace_log("[WARN]  ",message,'color: #F1C40F');}
	internal_trace_log("Warn Tracing Enabled");
}
function trace_warn_disable()
{
	WARN    = function(){};
	internal_trace_log("Warn Tracing Disabled");
}
function trace_info_enable()
{
	INFO    = function(message){trace_log("[INFO]  ",message,'color: #3498DB');}
	internal_trace_log("Info Tracing Enabled");
}
function trace_info_disable()
{
	INFO    = function(){};
	internal_trace_log("Info Tracing Disabled");
}
function trace_system_enable()
{
	SYSTEM  = function(message){trace_log("[SYSTEM]",message,'color: #9B59B6');}
	internal_trace_log("System Tracing Enabled");
}
function trace_system_disable()
{
	SYSTEM  = function(){};
	internal_trace_log("System Tracing Disabled");
}
function trace_note_enable()
{
	NOTE    = function(message){trace_log("[NOTE]  ",message,'color: #95A5A6');}
	internal_trace_log("Note Tracing Enabled");
}
function trace_note_disable()
{
	NOTE    = function(){};
	internal_trace_log("Note Tracing Disabled");
}
function trace_todo_enable()
{
	TODO    = function(message){trace_log("[TODO]  ",message,'color: #2ECC71');}
	internal_trace_log("Todo Tracing Enabled");
}
function trace_todo_disable()
{
	TODO    = function(){};
	internal_trace_log("Todo Tracing Disabled");
}
function trace_xxx_enable()
{
	XXX     = function(message){trace_log("[XXX]   ",message,'color: #1ABC9C');}
	internal_trace_log("XXX Tracing Enabled");
}
function trace_xxx_disable()
{
	XXX     = function(){};
	internal_trace_log("XXX Tracing Disabled");
}
function trace_text_enable()
{
	TEXT    = function(message){trace_log("[TEXT]  ",message,'color: #34495E');}
	internal_trace_log("Text Tracing Enabled");
}
function trace_text_disable()
{
	TEXT    = function(){};
	internal_trace_log("Text Tracing Disabled");
}

window.onerror = function(errorMsg, url, lineNumber){
	ERROR("Uncaught error occurred: " + errorMsg);
    alert("Uncaught Error occured:\n"+errorMsg);
    return false;
}

trace_all_enable();

