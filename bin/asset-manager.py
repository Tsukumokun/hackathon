import json
import os


with open ("specification.json", "r") as specs:
    data = specs.read().replace('\n', '')

data = json.loads(data)

compiled = ""

with open("../info/license-header-js", "r") as input_file:
    compiled += input_file.read()

for f in data["js"]:
    print "Compressing "+f[f.rfind("/")+1:]+"..."
    os.system('java -jar yuicompressor.jar --type js '+f+' -o temp.min.js')
    with open("temp.min.js", "r") as input_file:
        compiled+="\n"+input_file.read()

with open("index.js", "w") as js_file:
    js_file.write(compiled)
    #os.system('cat temp.min.js >> index.js')
#os.system('rm temp.min.js')
    #with open (f, "r") as js_data:
    #    js = js_data.read()
    #js = js.split("\n")
    #reg = ' (?:(\\u0022)[^\\u0022]*\\u0022)| (?:(\\u0027)[^\\u0027]*\\u0027)| (?:(//)(?!\\s*-->).*$)| (?:(/\\*)(?:[^\\*]|[\\r\\n]|(?:\\*+(?:[^\\*/]|[\\r\\n])))*\\*+/)| (?:(\\/)(?!(?:\\/|\\*))\\S*[^\\\\\\s]\\/) '
    #js = re.sub(reg,'',js)
    #js = js.replace()

    #pre_compile = pre_compile.replace('\t',' ').replace('\r','')
    #pre_compile = re.sub(r'\s+',' ',pre_compile)
    #compiled+=js+"\n";
#compiled = re.sub(r'/\*.*?\*/','',compiled)

#with open("index.js", "w") as js_file:
 #   js_file.write(compiled)




#for f in data["css"]:
    #/* remove comments */
    #$buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);
    #/* remove tabs, spaces, newlines, etc. */
    #$buffer = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $buffer);
    

