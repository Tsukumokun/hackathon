import json
import re

with open ("specification.json", "r") as specs:
    data = specs.read().replace('\n', '')

def find(l, s):
    for i in range(len(l)):
        if l[i].find(s)!=-1:
            return i
    return -1

data = json.loads(data)
for f in data["js"]:
    with open (f, "r") as jsdata:
        js = jsdata.read().replace('\t','').replace('\r','').replace(' ','')
    js = js.split("\n")
    compiled = ""
    for line in js:
        append = line.partition("//")[0]
        compiled += append
    print re.sub(r'/\*.*?\*/','',compiled)
    


