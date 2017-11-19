var fs = require('fs');
var readline = require('readline');

module.exports = class CopyLibrary {
    constructor(source){
        this.source = source;
    }

    copyTpl(origin, dest, data){
        this.source.fs.copyTpl(
            this.source.templatePath(origin),
            this.source.destinationPath(dest),
            data
        );
    }

    copy(origin, dest){
        this.source.fs.copy(
            this.source.templatePath(origin),
            this.source.destinationPath(dest)
        );
    }

    ReadAndInsertBefore(file, pattern, line){
        let self = this;
        fs.readFile(file, (err, f) => {
            self.insertBefore(f, file, pattern, line);
        });
    }

    insertBefore(f, file, pattern, lineToInsert){
        var array = f.toString().split('\n');
        // use the array
        var line = this.findIndex(array, pattern);
        if(line > -1 ) {
            this.insertLineInArray(array, line + 1, lineToInsert);
            this.writeFile(file, array.join('\n'));
        }
    }

    insertLineInArray(array, index, lineToInsert){
        if(lineToInsert.indexOf("/n") > -1){
            let props = lineToInsert.split("/n");
            for(var i = 0, len = props.length; i < len; i++){
                array.splice(index + i, 0, props[i]);
            }
        }else{
            array.splice(index, 0, lineToInsert);
        }
    }

    findIndex(array, pattern){
        var i = 0, 
            len = array.length,
            finded = false;
        while( i < len && !finded){
            if(pattern.test(array[i])) {
                finded = true;
            }
            i++;
        }

        if (finded) return i;
        return -1;
    }

    writeFile(file, str){
        fs.writeFile(file, str , (err, fd) => {
            if (err) {
                if (err.code === 'EEXIST') {
                console.error('myfile already exists');
                return;
                }

                throw err;
            }

        });
    }
}