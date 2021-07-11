import fs from 'fs';
import scmExtractor from 'scm-extractor';
import concat from 'concat-stream';

export default function getChk(dst) {
    const result = [];
    const stream = fs.createReadStream(dst)
    .pipe(scmExtractor())
    .pipe(concat(chk => {
        const sections = new Map();
        var offset = 0;
        while (offset >= 0 && chk.length - offset >= 8) {
            const type = chk.toString('ascii', offset, offset+4);
            const size = chk.readInt32LE(offset + 4);
            if(type === 'MRGN' || type === 'STR ' || type === 'STRx') {
                const data = chk.slice(offset + 8, offset + 8 + size);
                sections.set(type, data);
            }
            offset += size + 8;
        }
        const locations = sections.get('MRGN');
        const str = sections.get('STR ');
        const strx = sections.get('STRx');
        var strIndex = 0;
        const strArr = [];
        if (!str && !strx) {
            console.log('Cannot find str section. maybe protected map?');
        } else if (str !== undefined) {
            while (strIndex < 1024) {
                const strOffset = str.readUInt16LE(2 + strIndex * 2);
                if(strOffset === 2050) break;
                var strData = '';
                var k = 0;
                while(str.toString('utf-8', strOffset + k, strOffset + k + 1) !== '\x00') {
                    strData += str.toString('utf-8', strOffset + k, strOffset + k + 1);
                    k++;
                }
                k = 0;
                strArr.push(strData);
                strIndex++;
            }
        } else {
            const strCount = strx.readUInt32LE(0);
            while (strIndex < strCount) {
                const strOffset = strx.readUInt32LE(4 + strIndex * 4);
                if(strOffset === 2050) break;
                var strData = '';
                var k = 0;
                while(strx.toString('utf-8', strOffset + k, strOffset + k + 1) !== '\x00') {
                    strData += strx.toString('utf-8', strOffset + k, strOffset + k + 1);
                    k++;
                }
                k = 0;
                strArr.push(strData);
                strIndex++;
            }
        }
        var locIndex = 0;
        const locNameArr = [];
        while (locIndex < 255) {
            const strNum = locations.readUInt16LE(20 * locIndex + 16);
            if(strNum !== 0) {
                result.push(strArr[strNum - 1]);
                locNameArr.push(strArr[strNum-1]);
            }
            locIndex++;
        }
    }));

    return new Promise((resolve, reject) => {
        stream.on('error', function(error) {
            console.log('Error');
            resolve(reject);
        });

        stream.on('finish', function() {
            console.log('Writestream end.');
            resolve(result);
        });
    });
}
