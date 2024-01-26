To repoduce the error mentioned in [this issue for react-email](https://github.com/resend/react-email/issues/1251) do the following:

```console
git clone https://github.com/kuro610/react-email-error.git
cd react-email-error/backend
npm install
npm run email-dev
```

After this goto [localhost:5002](localhost:5002) and open the preview for `emailtype/Email.tsx` and you should see the mentioned error in a reduced form.  

```
Error: Build failed with 1 error:
../lib/lib1.ts:1:18: ERROR: Could not resolve "zod"
    at failureErrorWithLog (/react-email-error/backend/node_modules/esbuild/lib/main.js:1651:15)
    at /react-email-error/backend/node_modules/esbuild/lib/main.js:1059:25
    at /react-email-error/backend/node_modules/esbuild/lib/main.js:1004:52
    at buildResponseToResult (/react-email-error/backend/node_modules/esbuild/lib/main.js:1057:7)
    at /react-email-error/backend/node_modules/esbuild/lib/main.js:1086:16
    at responseCallbacks.<computed> (/react-email-error/backend/node_modules/esbuild/lib/main.js:704:9)
    at handleIncomingPacket (/react-email-error/backend/node_modules/esbuild/lib/main.js:764:9)
    at Socket.readFromStdout (/react-email-error/backend/node_modules/esbuild/lib/main.js:680:7)
    at Socket.emit (node:events:514:28)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at Readable.push (node:internal/streams/readable:234:10)
    at Pipe.onStreamRead (node:internal/stream_base_commons:190:23)
    at Pipe.callbackTrampoline (node:internal/async_hooks:130:17)
```

I reproduced the minimal structure from the original project where the error occured.
