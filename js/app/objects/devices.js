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

//REQUIRE: base.js

//////////////////////////////////////////////////
///// DEVICE BASE CLASS
//////////////////////////////////////////////////

function Device(){
    this.base = Base;
    this.base();

    this.components = [];
}
Device.prototype = new Base;

//////////////////////////////////////////////////
///// SPECIAL DEVICES
//////////////////////////////////////////////////

function SpecialDevice(){
    this.base = Device;
    this.base();
}
SpecialDevice.prototype = new Device;


function Toaster(){
    this.base = SpecialDevice;
    this.base();
}
Toaster.prototype = new SpecialDevice;

function Microwave(){
    this.base = SpecialDevice;
    this.base();
}
Microwave.prototype = new SpecialDevice;

function Lightbulb(){
    this.base = SpecialDevice;
    this.base();
}
Lightbulb.prototype = new SpecialDevice;

function Switch(){
    this.base = SpecialDevice;
    this.base();
}
Switch.prototype = new SpecialDevice;

//////////////////////////////////////////////////
///// NORMAL DEVICES
//////////////////////////////////////////////////

function NormalDevice(){
    this.base = Device;
    this.base();
}
NormalDevice.prototype = new Device;


function Network(){
    this.base = NormalDevice;
    this.base();
}
Network.prototype = new NormalDevice;

function Mobile(){
    this.base = NormalDevice;
    this.base();
}
Mobile.prototype = new NormalDevice;

function Laptop(){
    this.base = NormalDevice;
    this.base();
}
Laptop.prototype = new NormalDevice;

function Desktop(){
    this.base = NormalDevice;
    this.base();
}
Desktop.prototype = new NormalDevice;

function Server(){
    this.base = NormalDevice;
    this.base();
}
Server.prototype = new NormalDevice;

function Rack(){
    this.base = NormalDevice;
    this.base();
}
Rack.prototype = new NormalDevice;

function DataCenter(){
    this.base = NormalDevice;
    this.base();
}
DataCenter.prototype = new NormalDevice;

function SuperComputer(){
    this.base = NormalDevice;
    this.base();
}
SuperComputer.prototype = new NormalDevice;

//////////////////////////////////////////////////
///// NORMAL DEVICES
//////////////////////////////////////////////////

function DeveloperDevice(){
    this.base = Device;
    this.base();
}
DeveloperDevice.prototype = new Device;


function DeveloperMobile(){
    this.base = DeveloperDevice;
    this.base();
}
DeveloperMobile.prototype = new DeveloperDevice;

function DeveloperLaptop(){
    this.base = DeveloperDevice;
    this.base();
}
DeveloperLaptop.prototype = new DeveloperDevice;

function DeveloperDesktop(){
    this.base = DeveloperDevice;
    this.base();
}
DeveloperDesktop.prototype = new DeveloperDevice;

function DeveloperServer(){
    this.base = DeveloperDevice;
    this.base();
}
DeveloperServer.prototype = new DeveloperDevice;
