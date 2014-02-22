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

#ifndef DUNGEONS_JS
#define DUNGEONS_JS

#include "../../utils/base.js"

//////////////////////////////////////////////////
///// DUNGEON BASE CLASS
//////////////////////////////////////////////////

function Dungeon(){
    this.base = Base;
    this.base();
}
Dungeon.prototype = new Base;


function PipeDungeon(){
    this.base = Dungeon;
    this.base();
}
Pipe.prototype = new Dungeon;

function CpuDungeon(){
    this.base = Dungeon;
    this.base();
}
Cpu.prototype = new Dungeon;

function MemoryDungeon(){
    this.base = Dungeon;
    this.base();
}
Memory.prototype = new Dungeon;

function HddDungeon(){
    this.base = Dungeon;
    this.base();
}
Hdd.prototype = new Dungeon;

#endif

