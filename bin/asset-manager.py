import json
import os


with open ("specification.json", "r") as specs:
    data = specs.read().replace('\n', '')

data = json.loads(data)

compiled = ""
print "Creating JS:"

with open("../info/license-header-js", "r") as input_file:
    compiled += input_file.read()

for f in data["js"]:
    print "Compressing "+f[f.rfind("/")+1:]+"..."
    os.system('java -jar yuicompressor.jar --type js '+f+' -o temp.min.js')
    with open("temp.min.js", "r") as input_file:
        compiled+="\n"+input_file.read()

os.system("rm temp.min.js")
with open("index.js", "w") as js_file:
    js_file.write(compiled)

compiled = ""
print "Creating CSS:"

for f in data["css"]:
    print "Compressing "+f[f.rfind("/")+1:]+"..."
    os.system('java -jar yuicompressor.jar --type css '+f+' -o temp.min.css')
    with open("temp.min.css", "r") as input_file:
        compiled+="\n"+input_file.read()

os.system("rm temp.min.css")
with open("index.css", "w") as css_file:
    css_file.write(compiled)


