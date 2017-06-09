angular js bootcamp


2016/11/28

Bill Odom
https://www.linkedin.com/in/billodom


https://angularbootcamp.com/learn2.zip

Doc:

https://nodejs.org/en/download/package-manager/


as root:

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs


root@madona:~# node -v
v6.9.1


node 6.9

=============================


As 'madon' user:

in the ~/angular/alfresco/learn2

npm install
npm start


http://localhost:8080

(looks like a directory listing)


V8 javascript engine in chrome, node uses javascript v8 extract v8 from chrome





====error if install in wrong dir====
madon@madona:~$ npm install
npm WARN enoent ENOENT: no such file or directory, open '/home/madon/package.json'
npm WARN madon No description
npm WARN madon No repository field.
npm WARN madon No README data
npm WARN madon No license field.

====error if "npm start" in wrong dir====

madon@madona:~$ npm start
npm ERR! Linux 3.16-2-amd64
npm ERR! argv "/usr/bin/nodejs" "/usr/bin/npm" "start"
npm ERR! node v6.9.1
npm ERR! npm  v3.10.8
npm ERR! path /home/madon/package.json
npm ERR! code ENOENT
npm ERR! errno -2
npm ERR! syscall open

npm ERR! enoent ENOENT: no such file or directory, open '/home/madon/package.json'
npm ERR! enoent ENOENT: no such file or directory, open '/home/madon/package.json'
npm ERR! enoent This is most likely not a problem with npm itself
npm ERR! enoent and is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! Please include the following file with any support request:
npm ERR!     /home/madon/npm-debug.log






madon@madona:~/angular/alfresco$ cd learn2/

====== ERROR is npm start without install =======
madon@madona:~/angular/alfresco/learn2$ npm start

> @ start /home/madon/angular/alfresco/learn2
> concurrently --kill-others "npm run live" "npm run json"

sh: concurrently: command not found

npm ERR! Linux 3.16-2-amd64
npm ERR! argv "/usr/bin/nodejs" "/usr/bin/npm" "start"
npm ERR! node v6.9.1
npm ERR! npm  v3.10.8
npm ERR! file sh
npm ERR! code ELIFECYCLE
npm ERR! errno ENOENT
npm ERR! syscall spawn
npm ERR! @ start: `concurrently --kill-others "npm run live" "npm run json"`
npm ERR! spawn ENOENT
npm ERR! 
npm ERR! Failed at the @ start script 'concurrently --kill-others "npm run live" "npm run json"'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the  package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     concurrently --kill-others "npm run live" "npm run json"
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs 
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls 
npm ERR! There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! Please include the following file with any support request:
npm ERR!     /home/madon/angular/alfresco/learn2/npm-debug.log







madon@madona:~/angular/alfresco/learn2$ npm install
npm WARN deprecated node-uuid@1.4.7: use uuid module instead
/home/madon/angular/alfresco/learn2
├── @angular/common@2.1.0 
├── @angular/compiler@2.1.0 
├── @angular/core@2.1.0 
├── @angular/forms@2.1.0 
├── @angular/http@2.1.0 
├── @angular/platform-browser@2.1.0 
├── @angular/platform-browser-dynamic@2.1.0 
├── @angular/router@3.1.0 
├── @ngrx/core@1.2.0 
├── @ngrx/store@2.2.1 
├── @ngrx/store-devtools@3.2.2 
├── @ngrx/store-log-monitor@3.0.2 
├── @types/firebase@2.4.30 
├── @types/jasmine@2.5.38 
├── @types/lodash@4.14.40 
├── angular2-firebase@0.7.3 
├─┬ concurrently@3.1.0 
│ ├── bluebird@2.9.6 
│ ├─┬ chalk@0.5.1 
│ │ ├── ansi-styles@1.1.0 
│ │ ├── escape-string-regexp@1.0.5 
│ │ ├─┬ has-ansi@0.1.0 
│ │ │ └── ansi-regex@0.2.1 
│ │ ├── strip-ansi@0.3.0 
│ │ └── supports-color@0.2.0 
│ ├── commander@2.6.0 
│ ├── lodash@4.17.2 
│ ├── moment@2.17.0 
│ ├── rx@2.3.24 
│ ├── spawn-default-shell@1.1.0 
│ └── tree-kill@1.1.0 
├─┬ copyfiles@1.0.0 
│ ├─┬ glob@7.1.1 
│ │ ├── fs.realpath@1.0.0 
│ │ ├─┬ inflight@1.0.6 
│ │ │ └── wrappy@1.0.2 
│ │ ├── inherits@2.0.3 
│ │ ├─┬ minimatch@3.0.3 
│ │ │ └─┬ brace-expansion@1.1.6 
│ │ │   ├── balanced-match@0.4.2 
│ │ │   └── concat-map@0.0.1 
│ │ ├── once@1.4.0 
│ │ └── path-is-absolute@1.0.1 
│ ├── ltcdr@2.2.1 
│ ├─┬ mkdirp@0.5.1 
│ │ └── minimist@0.0.8 
│ ├─┬ noms@0.0.0 
│ │ └─┬ readable-stream@1.0.34 
│ │   ├── core-util-is@1.0.2 
│ │   ├── isarray@0.0.1 
│ │   └── string_decoder@0.10.31 
│ └─┬ through2@2.0.2 
│   ├─┬ readable-stream@2.2.2 
│   │ ├── buffer-shims@1.0.0 
│   │ ├── isarray@1.0.0 
│   │ └── process-nextick-args@1.0.7 
│   └── xtend@4.0.1 
├── core-js@2.4.1 
├── jasmine-core@2.5.2 
├─┬ json-server@0.8.23 
│ ├─┬ body-parser@1.15.2 
│ │ ├── bytes@2.4.0 
│ │ ├── content-type@1.0.2 
│ │ ├── debug@2.2.0 
│ │ ├── depd@1.1.0 
│ │ ├─┬ http-errors@1.5.1 
│ │ │ └── setprototypeof@1.0.2 
│ │ ├── iconv-lite@0.4.13 
│ │ ├─┬ on-finished@2.3.0 
│ │ │ └── ee-first@1.1.1 
│ │ ├── qs@6.2.0 
│ │ ├─┬ raw-body@2.1.7 
│ │ │ └── unpipe@1.0.0 
│ │ └─┬ type-is@1.6.14 
│ │   └── media-typer@0.3.0 
│ ├─┬ chalk@1.1.3 
│ │ ├── ansi-styles@2.2.1 
│ │ ├─┬ has-ansi@2.0.0 
│ │ │ └── ansi-regex@2.0.0 
│ │ ├── strip-ansi@3.0.1 
│ │ └── supports-color@2.0.0 
│ ├─┬ chokidar@1.6.1 
│ │ ├─┬ anymatch@1.3.0 
│ │ │ ├── arrify@1.0.1 
│ │ │ └─┬ micromatch@2.3.11 
│ │ │   ├─┬ arr-diff@2.0.0 
│ │ │   │ └── arr-flatten@1.0.1 
│ │ │   ├── array-unique@0.2.1 
│ │ │   ├─┬ braces@1.8.5 
│ │ │   │ ├─┬ expand-range@1.8.2 
│ │ │   │ │ └─┬ fill-range@2.2.3 
│ │ │   │ │   ├── is-number@2.1.0 
│ │ │   │ │   ├─┬ isobject@2.1.0 
│ │ │   │ │   │ └── isarray@1.0.0 
│ │ │   │ │   ├── randomatic@1.1.6 
│ │ │   │ │   └── repeat-string@1.6.1 
│ │ │   │ ├── preserve@0.2.0 
│ │ │   │ └── repeat-element@1.1.2 
│ │ │   ├─┬ expand-brackets@0.1.5 
│ │ │   │ └── is-posix-bracket@0.1.1 
│ │ │   ├── extglob@0.3.2 
│ │ │   ├── filename-regex@2.0.0 
│ │ │   ├─┬ kind-of@3.0.4 
│ │ │   │ └── is-buffer@1.1.4 
│ │ │   ├── normalize-path@2.0.1 
│ │ │   ├─┬ object.omit@2.0.1 
│ │ │   │ ├─┬ for-own@0.1.4 
│ │ │   │ │ └── for-in@0.1.6 
│ │ │   │ └── is-extendable@0.1.1 
│ │ │   ├─┬ parse-glob@3.0.4 
│ │ │   │ ├── glob-base@0.3.0 
│ │ │   │ └── is-dotfile@1.0.2 
│ │ │   └─┬ regex-cache@0.4.3 
│ │ │     ├── is-equal-shallow@0.1.3 
│ │ │     └── is-primitive@2.0.0 
│ │ ├── async-each@1.0.1 
│ │ ├── glob-parent@2.0.0 
│ │ ├─┬ is-binary-path@1.0.1 
│ │ │ └── binary-extensions@1.7.0 
│ │ ├─┬ is-glob@2.0.1 
│ │ │ └── is-extglob@1.0.0 
│ │ └─┬ readdirp@2.1.0 
│ │   ├─┬ readable-stream@2.2.2 
│ │   │ └── isarray@1.0.0 
│ │   └── set-immediate-shim@1.0.1 
│ ├─┬ compression@1.6.2 
│ │ ├─┬ accepts@1.3.3 
│ │ │ └── negotiator@0.6.1 
│ │ ├── bytes@2.3.0 
│ │ ├─┬ compressible@2.0.9 
│ │ │ └── mime-db@1.25.0 
│ │ ├── on-headers@1.0.1 
│ │ └── vary@1.1.0 
│ ├── connect-pause@0.1.0 
│ ├── cors@2.8.1 
│ ├─┬ errorhandler@1.5.0 
│ │ └── escape-html@1.0.3 
│ ├─┬ express@4.14.0 
│ │ ├── array-flatten@1.1.1 
│ │ ├── content-disposition@0.5.1 
│ │ ├── cookie@0.3.1 
│ │ ├── cookie-signature@1.0.6 
│ │ ├── encodeurl@1.0.1 
│ │ ├── etag@1.7.0 
│ │ ├── finalhandler@0.5.0 
│ │ ├── fresh@0.3.0 
│ │ ├── merge-descriptors@1.0.1 
│ │ ├── methods@1.1.2 
│ │ ├── parseurl@1.3.1 
│ │ ├── path-to-regexp@0.1.7 
│ │ ├─┬ proxy-addr@1.1.2 
│ │ │ ├── forwarded@0.1.0 
│ │ │ └── ipaddr.js@1.1.1 
│ │ ├── range-parser@1.2.0 
│ │ ├── send@0.14.1 
│ │ ├── serve-static@1.11.1 
│ │ └── utils-merge@1.0.0 
│ ├─┬ lowdb@0.13.1 
│ │ ├── graceful-fs@4.1.11 
│ │ ├── is-promise@2.1.0 
│ │ ├─┬ json-parse-helpfulerror@1.0.3 
│ │ │ └── jju@1.3.0 
│ │ └── steno@0.4.4 
│ ├─┬ method-override@2.3.7 
│ │ └─┬ debug@2.3.3 
│ │   └── ms@0.7.2 
│ ├─┬ morgan@1.7.0 
│ │ └── basic-auth@1.0.4 
│ ├── node-uuid@1.4.7 
│ ├── object-assign@4.1.0 
│ ├── pluralize@3.0.0 
│ ├─┬ request@2.79.0 
│ │ ├── aws-sign2@0.6.0 
│ │ ├── aws4@1.5.0 
│ │ ├── caseless@0.11.0 
│ │ ├─┬ combined-stream@1.0.5 
│ │ │ └── delayed-stream@1.0.0 
│ │ ├── extend@3.0.0 
│ │ ├── forever-agent@0.6.1 
│ │ ├─┬ form-data@2.1.2 
│ │ │ └── asynckit@0.4.0 
│ │ ├─┬ har-validator@2.0.6 
│ │ │ ├─┬ chalk@1.1.3 
│ │ │ │ ├── ansi-styles@2.2.1 
│ │ │ │ ├─┬ has-ansi@2.0.0 
│ │ │ │ │ └── ansi-regex@2.0.0 
│ │ │ │ ├── strip-ansi@3.0.1 
│ │ │ │ └── supports-color@2.0.0 
│ │ │ ├─┬ commander@2.9.0 
│ │ │ │ └── graceful-readlink@1.0.1 
│ │ │ └─┬ is-my-json-valid@2.15.0 
│ │ │   ├── generate-function@2.0.0 
│ │ │   ├─┬ generate-object-property@1.2.0 
│ │ │   │ └── is-property@1.0.2 
│ │ │   └── jsonpointer@4.0.0 
│ │ ├─┬ hawk@3.1.3 
│ │ │ ├── boom@2.10.1 
│ │ │ ├── cryptiles@2.0.5 
│ │ │ ├── hoek@2.16.3 
│ │ │ └── sntp@1.0.9 
│ │ ├─┬ http-signature@1.1.1 
│ │ │ ├── assert-plus@0.2.0 
│ │ │ ├─┬ jsprim@1.3.1 
│ │ │ │ ├── extsprintf@1.0.2 
│ │ │ │ ├── json-schema@0.2.3 
│ │ │ │ └── verror@1.3.6 
│ │ │ └─┬ sshpk@1.10.1 
│ │ │   ├── asn1@0.2.3 
│ │ │   ├── assert-plus@1.0.0 
│ │ │   ├── bcrypt-pbkdf@1.0.0 
│ │ │   ├─┬ dashdash@1.14.1 
│ │ │   │ └── assert-plus@1.0.0 
│ │ │   ├── ecc-jsbn@0.1.1 
│ │ │   ├─┬ getpass@0.1.6 
│ │ │   │ └── assert-plus@1.0.0 
│ │ │   ├── jodid25519@1.0.2 
│ │ │   ├── jsbn@0.1.0 
│ │ │   └── tweetnacl@0.14.3 
│ │ ├── is-typedarray@1.0.0 
│ │ ├── isstream@0.1.2 
│ │ ├── json-stringify-safe@5.0.1 
│ │ ├── mime-types@2.1.13 
│ │ ├── oauth-sign@0.8.2 
│ │ ├── qs@6.3.0 
│ │ ├── stringstream@0.0.5 
│ │ ├─┬ tough-cookie@2.3.2 
│ │ │ └── punycode@1.4.1 
│ │ ├── tunnel-agent@0.4.3 
│ │ └── uuid@3.0.0 
│ ├── server-destroy@1.0.1 
│ ├── underscore-db@0.10.0 
│ ├─┬ update-notifier@1.0.2 
│ │ ├─┬ boxen@0.6.0 
│ │ │ ├── ansi-align@1.1.0 
│ │ │ ├── camelcase@2.1.1 
│ │ │ ├─┬ chalk@1.1.3 
│ │ │ │ ├── ansi-styles@2.2.1 
│ │ │ │ ├─┬ has-ansi@2.0.0 
│ │ │ │ │ └── ansi-regex@2.0.0 
│ │ │ │ ├── strip-ansi@3.0.1 
│ │ │ │ └── supports-color@2.0.0 
│ │ │ ├── cli-boxes@1.0.0 
│ │ │ ├── filled-array@1.1.0 
│ │ │ ├─┬ repeating@2.0.1 
│ │ │ │ └── is-finite@1.0.2 
│ │ │ └── widest-line@1.0.0 
│ │ ├─┬ chalk@1.1.3 
│ │ │ ├── ansi-styles@2.2.1 
│ │ │ ├─┬ has-ansi@2.0.0 
│ │ │ │ └── ansi-regex@2.0.0 
│ │ │ ├── strip-ansi@3.0.1 
│ │ │ └── supports-color@2.0.0 
│ │ ├─┬ configstore@2.1.0 
│ │ │ ├─┬ dot-prop@3.0.0 
│ │ │ │ └── is-obj@1.0.1 
│ │ │ ├── os-tmpdir@1.0.2 
│ │ │ ├── osenv@0.1.3 
│ │ │ ├── uuid@2.0.3 
│ │ │ └─┬ write-file-atomic@1.2.0 
│ │ │   ├── imurmurhash@0.1.4 
│ │ │   └── slide@1.1.6 
│ │ ├── is-npm@1.0.0 
│ │ ├─┬ latest-version@2.0.0 
│ │ │ └─┬ package-json@2.4.0 
│ │ │   ├─┬ got@5.7.1 
│ │ │   │ ├─┬ create-error-class@3.0.2 
│ │ │   │ │ └── capture-stack-trace@1.0.0 
│ │ │   │ ├─┬ duplexer2@0.1.4 
│ │ │   │ │ └─┬ readable-stream@2.2.2 
│ │ │   │ │   └── isarray@1.0.0 
│ │ │   │ ├── is-redirect@1.0.0 
│ │ │   │ ├── is-retry-allowed@1.1.0 
│ │ │   │ ├── is-stream@1.1.0 
│ │ │   │ ├── lowercase-keys@1.0.0 
│ │ │   │ ├── node-status-codes@1.0.0 
│ │ │   │ ├─┬ parse-json@2.2.0 
│ │ │   │ │ └─┬ error-ex@1.3.0 
│ │ │   │ │   └── is-arrayish@0.2.1 
│ │ │   │ ├─┬ read-all-stream@3.1.0 
│ │ │   │ │ └─┬ readable-stream@2.2.2 
│ │ │   │ │   └── isarray@1.0.0 
│ │ │   │ ├─┬ readable-stream@2.2.2 
│ │ │   │ │ └── isarray@1.0.0 
│ │ │   │ ├── timed-out@3.0.0 
│ │ │   │ ├── unzip-response@1.0.2 
│ │ │   │ └─┬ url-parse-lax@1.0.0 
│ │ │   │   └── prepend-http@1.0.4 
│ │ │   ├─┬ registry-auth-token@3.1.0 
│ │ │   │ └─┬ rc@1.1.6 
│ │ │   │   ├── deep-extend@0.4.1 
│ │ │   │   ├── ini@1.3.4 
│ │ │   │   ├── minimist@1.2.0 
│ │ │   │   └── strip-json-comments@1.0.4 
│ │ │   └── registry-url@3.1.0 
│ │ ├── lazy-req@1.1.0 
│ │ ├─┬ semver-diff@2.1.0 
│ │ │ └── semver@5.3.0 
│ │ └─┬ xdg-basedir@2.0.0 
│ │   └── os-homedir@1.0.2 
│ └─┬ yargs@4.8.1 
│   ├─┬ cliui@3.2.0 
│   │ ├─┬ strip-ansi@3.0.1 
│   │ │ └── ansi-regex@2.0.0 
│   │ └── wrap-ansi@2.0.0 
│   ├── decamelize@1.2.0 
│   ├── get-caller-file@1.0.2 
│   ├── lodash.assign@4.2.0 
│   ├─┬ os-locale@1.4.0 
│   │ └─┬ lcid@1.0.0 
│   │   └── invert-kv@1.0.0 
│   ├─┬ read-pkg-up@1.0.1 
│   │ ├─┬ find-up@1.1.2 
│   │ │ └── path-exists@2.1.0 
│   │ └─┬ read-pkg@1.1.0 
│   │   ├─┬ load-json-file@1.1.0 
│   │   │ ├── pify@2.3.0 
│   │   │ └─┬ strip-bom@2.0.0 
│   │   │   └── is-utf8@0.2.1 
│   │   ├─┬ normalize-package-data@2.3.5 
│   │   │ ├── hosted-git-info@2.1.5 
│   │   │ ├─┬ is-builtin-module@1.0.0 
│   │   │ │ └── builtin-modules@1.1.1 
│   │   │ └─┬ validate-npm-package-license@3.0.1 
│   │   │   ├─┬ spdx-correct@1.0.2 
│   │   │   │ └── spdx-license-ids@1.2.2 
│   │   │   └── spdx-expression-parse@1.0.4 
│   │   └── path-type@1.1.0 
│   ├── require-directory@2.1.1 
│   ├── require-main-filename@1.0.1 
│   ├── set-blocking@2.0.0 
│   ├─┬ string-width@1.0.2 
│   │ ├── code-point-at@1.1.0 
│   │ ├─┬ is-fullwidth-code-point@1.0.0 
│   │ │ └── number-is-nan@1.0.1 
│   │ └─┬ strip-ansi@3.0.1 
│   │   └── ansi-regex@2.0.0 
│   ├── which-module@1.0.0 
│   ├── window-size@0.2.0 
│   ├── y18n@3.2.1 
│   └─┬ yargs-parser@2.4.1 
│     └── camelcase@3.0.0 
├─┬ live-server@1.1.0 
│ ├── colors@1.1.2 
│ ├─┬ connect@3.4.1 
│ │ └── finalhandler@0.4.1 
│ ├── cors@2.8.1 
│ ├─┬ event-stream@3.3.4 
│ │ ├── duplexer@0.1.1 
│ │ ├── from@0.1.3 
│ │ ├── map-stream@0.1.0 
│ │ ├── pause-stream@0.0.11 
│ │ ├── split@0.3.3 
│ │ ├── stream-combiner@0.0.4 
│ │ └── through@2.3.8 
│ ├─┬ faye-websocket@0.11.0 
│ │ └─┬ websocket-driver@0.6.5 
│ │   └── websocket-extensions@0.1.1 
│ ├─┬ http-auth@2.4.11 
│ │ ├─┬ apache-crypt@1.1.2 
│ │ │ └── unix-crypt-td-js@1.0.0 
│ │ └── apache-md5@1.0.6 
│ ├── object-assign@4.1.0 
│ ├─┬ opn@4.0.2 
│ │ └─┬ pinkie-promise@2.0.1 
│ │   └── pinkie@2.0.4 
│ ├── proxy-middleware@0.15.0 
│ ├─┬ send@0.14.1 
│ │ ├── destroy@1.0.4 
│ │ ├── mime@1.3.4 
│ │ ├── ms@0.7.1 
│ │ └── statuses@1.3.1 
│ ├─┬ serve-index@1.8.0 
│ │ └── batch@0.5.3 
│ └─┬ watchr@2.6.0 
│   ├─┬ eachr@3.2.0 
│   │ └── editions@1.3.3 
│   ├── extendr@3.2.2 
│   ├── extract-opts@3.3.1 
│   ├─┬ ignorefs@1.2.0 
│   │ └── ignorepatterns@1.1.0 
│   ├── safefs@4.1.0 
│   ├─┬ scandirectory@2.5.0 
│   │ ├── safefs@3.2.2 
│   │ └─┬ taskgroup@4.3.1 
│   │   └── csextends@1.0.3 
│   ├─┬ taskgroup@5.0.1 
│   │ └── ambi@2.5.0 
│   └── typechecker@4.4.0 
├─┬ rxjs@5.0.0-beta.12 
│ └── symbol-observable@1.0.4 
├─┬ tslint@3.15.1 
│ ├── diff@2.2.3 
│ ├─┬ findup-sync@0.3.0 
│ │ └── glob@5.0.15 
│ ├─┬ optimist@0.6.1 
│ │ └── wordwrap@0.0.3 
│ ├── resolve@1.1.7 
│ └─┬ underscore.string@3.3.4 
│   ├── sprintf-js@1.0.3 
│   └── util-deprecate@1.0.2 
├── typescript@2.0.3 
└── zone.js@0.6.25 

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.15: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})















madon@madona:~/angular/alfresco/learn2$ npm start

> @ start /home/madon/angular/alfresco/learn2
> concurrently --kill-others "npm run live" "npm run json"

[0] 
[0] > @ live /home/madon/angular/alfresco/learn2
[0] > live-server --no-browser --wait=400 --proxy=/api:http://localhost:8085 -q
[0] 
[1] 
[1] > @ json /home/madon/angular/alfresco/learn2
[1] > json-server --port 8085 --host 0.0.0.0 --delay 200 --watch demo-data/db.json
[1] 
[1] 
[1]   \{^_^}/ hi!
[1] 
[1]   Loading demo-data/db.json
[1]   Done
[1] 
[1]   Resources
[1]   http://localhost:8085/companies
[1]   http://localhost:8085/colors
[1]   http://localhost:8085/employees
[1]   http://localhost:8085/phones
[1] 
[1]   Home
[1]   http://localhost:8085
[1] 
[1]   Type s + enter at any time to create a snapshot of the database
[1]   Watching...
[1] 




=============== browser refresh via a websocket =====


2 web servers:
8080:
8085: json server


http://localhost:8085/

bodom


madon@madona:~/angular/alfresco/learn2/demo-data$ more db.json 
 Bill Odom



dependancy: leftpad
unpublished



node_modules contaisn the depandacnies



in chrome


right corner

more tools
developper tools

disable cache
Disable cache (while DevTools is open)



Leave it running


=======01===============

in 01 index.html
    <div class="container">
      <my-app>loading...</my-app>
    </div>

    <script src="../minimal_lib/abc2.js"></script>
    <script>
      System.import('./main.ts').catch(console.error.bind(console));
    </script>

browsers do not know how to run javascript.

in production transpile will occur on a server not in teh browser.

madon@madona:~/angular/alfresco/learn2/01-angular-2-app-component$ more main.ts

@Component({
  selector: 'my-app',
  template: '<h1>My First TypeScript Angular 2 App</h1>'
})


selector in the CSS sense
selector is a new HTML tag


my-app: if you use a dash there will never a HTML element with a dash

inspect elelement:

my- is my prefex:

makes much less likely to create conflicts


template compiler detects bad HTML

angular1: make all run in client
angular2: make as much as possible on the server (check HTTML)

history: Misko created angular before joing google from adobe
in 3 weeks for 1 guy vs 6 months in a team
 


platformBrowserDynamic().bootstrapModule(AppModule);


decortator (cf annotations in java)
----------------
@Component({
  selector: 'my-app',
  template: '<h1>My First TypeScript Angular 2 App</h1>'
})
class FirstComponent { }
-----------------



we define a class, and tell something about that class,


===========02=============
index.html is the same (but title)

main.ts is now lot smaller


the @ name space is orwned by the anglar team
protection against putting malware.



-------
madon@madona:~/angular/alfresco/learn2/02-split-module-boilerplate$ more main.ts


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app';

platformBrowserDynamic().bootstrapModule(AppModule);
----------


ignore the extension.


madon@madona:~/angular/alfresco/learn2/02-split-module-boilerplate$ more first.ts 
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>My First TypeScript Angular 2 App</h1>'
})
export class FirstComponent { }


only difference is 'export' keyword.


An angular app is a list of small components
main.ts never changes
app.ts changes rarely (cli will generate it automocatilly almost)




===========03========

`backtick: mutltiple lines with ' and " inside@ this is ES5

contrictor(): reseverd method

claculate: a method



madon@madona:~/angular/alfresco/learn2/03-templates-and-binding$ more bindings.html 

<!-- Following kept free of styling to aid in demonstration -->
<h4>My {{version}} Angular 2 App</h4>

doublke curly brackets {{ or



<p [innerText]="person"></p>
<p [innerText]="person">.......</p>


this is not html but "Angular template" language

<p [innerText]=" 'hello' ">.......</p>

a anglaur js expression between the two " "

angular uopdates magically the DOM:
but it comes at a price: calls 4 times calculate()
zone.js


  calculate(): number {
    console.log('calculating');
    return 22 / 7;
  }


could be a HTTP request,


AOT: Ahead Of Time

possible but BAD IDEA

do not directly call functions () from the view: call variables.
(but if yoiu have a user action, that's OK and what you need)



<p>Made up variable: {{ madeUpVariableName }}</p>

is OK as it could be async. May change in the future...

SECURITY

<p [innerHtml]="stringWithHtml"></p>

angular will sanitaze by default



<button onClick='console.log('hello from old-school HTML/JS');'>
Press Me
</button>



adon@madona:~/.emacs.d$ wget https://github.com/ananthakumaran/typescript.el/blob/master/typescript-mode.el

root@madona:~# find / -name site-start.el
/etc/emacs/site-start.el

https://www.emacswiki.org/emacs/TypeScript

http://ergoemacs.org/emacs/emacs_installing_packages.html


to your ~/.emacs


(add-to-list 'load-path "~/.emacs.d/lisp/")
;; (load "typescript-mode") ;; best not to include the ending “.el” or “.elc”
(load "TypeScript") 
(add-to-list 'auto-mode-alist '("\\.ts\\'" . typescript-mode))
;; (autoload 'typescript-mode "Major mode for typescript files" t)
;; (autoload 'tss-setup-current-buffer "Set up the current file for TSS" t)

#



================04====================

parentheises () and square brackets [] are valid characters in the HTML

misko, Miško Hevery
http://misko.hevery.com/about/



The most testable javascript

the cli creates a test folder....

DI=dependancy injection

mhevery (Miško Hevery) · GitHub

ideally a HTML template can be mantained by a non programmer


        <div
	(mouseover)="over($event)"
	(mousemove)="move($event)">Mouse events on this</div>
 


<input #f (focus)="userEnteredField()">


== there are other template languages than HTML, Jade or pug xml...


https://material.angularjs.org/latest/demo/autocomplete


=====05======

john papa ngmodules

different from transclusion


augury gives you the higher view

from wranle.io for chrome
https://augury.angular.io/

=====06=====

spa=single page application

in chrome->network
no extra activity

client side routing
we abuse the # sign


useHash set to true


alzy loading (minimaize memory, see 45.

ironic


error stack : got to the top:

e.g. remove a , in apps.ts
(sourcemaps)

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
    { path: 'hello', component: NameComponent },
    { path: 'about', component: AboutComponent }
];



==============07=============

CLI: command line interface

very complex features like AOT

https://cli.angular.io/
Résultats de recherche
GitHub - angular/angular-cli: CLI tool for Angular2
https://github.com/angular/angular-cli
T

from somewhere on your system


npm install -g angular-cli

ng --version

root@madona:/opt/alfresco5035Pg/tomcat/logs# ng -v
angular-cli: 1.0.0-beta.21
node: 6.9.1
os: linux x64

don't do it into the 'learn2' diretcory

madon@madona:~/angular/alfresco


ng new workshop-app

creates a brand new angular app


that download 300 or 400mb pof npm.
This is not what gets deployed! it much bigger.


madon@madona:~/angular/alfresco$ du -shc workshop-app/
216M	workshop-app/
216M	total


e2e:end to end testing


ng serve


creates a virtual filesystem in RAM


http://localhost:4200

./protractor.conf.js:  baseUrl: 'http://localhost:4200/',


ng build

same thing but saves on disk:

creates a dist


our app is in the src directory





we work in src

what is servered in what is loaded in memory (dist)

rm -rf dist/


webpack


./app/app.component.ts


http://swapp.angularbootcamp.com


madon@madona:~/angular/alfresco/workshop-app$ ng generate component welcomeScreen
installing component
  create src/app/welcome-screen/welcome-screen.component.css
  create src/app/welcome-screen/welcome-screen.component.html
  create src/app/welcome-screen/welcome-screen.component.spec.ts
  create src/app/welcome-screen/welcome-screen.component.ts



has automatically created compents app.module.ts

madon@madona:~/angular/alfresco/workshop-app$ ng generate component selectionScreen
installing component
  create src/app/selection-screen/selection-screen.component.css
  create src/app/selection-screen/selection-screen.component.html
  create src/app/selection-screen/selection-screen.component.spec.ts
  create src/app/selection-screen/selection-screen.component.ts



madon@madona:~/angular/alfresco/workshop-app$ find src
src
src/app
src/app/app.component.html
src/app/app.component.spec.ts
src/app/index.ts
src/app/app.module.ts
src/app/app.component.css
src/app/selection-screen
src/app/selection-screen/selection-screen.component.css
src/app/selection-screen/selection-screen.component.ts
src/app/selection-screen/selection-screen.component.html
src/app/selection-screen/selection-screen.component.spec.ts
src/app/app.component.ts
src/app/welcome-screen
src/app/welcome-screen/welcome-screen.component.css
src/app/welcome-screen/welcome-screen.component.spec.ts
src/app/welcome-screen/welcome-screen.component.html
src/app/welcome-screen/welcome-screen.component.ts
src/environments
src/environments/environment.ts
src/environments/environment.prod.ts
src/typings.d.ts
src/favicon.ico
src/tsconfig.json
src/main.ts
src/index.html
src/polyfills.ts
src/assets
src/assets/.gitkeep
src/styles.css
src/test.ts




ng generates route whatever (does not work yet)



======================================
2016/11/29
=====================================

live server: designed for dev with auto refresh
json server: designed to have a test json api

webpack 
ng serve (file watching, auto reload, niot designed for prod, a routine out of 1000: webpack figures out what is used, tree shaking or dead code removal

used to use brocoli (not as good)

cli doe snot expose what tool is used
shawn larkin webpack
https://github.com/TheLarkInn
https://twitter.com/thelarkinn


for prodction:
ng build

(not minified but almost good for production)



ng help

agulat cli deploy github
https://github.com/angular/angular-cli

cd workshop-app
npm install bootstrap --save

adds one line to the dependancy
and puts in node_modules
node_modules/bootstrap/dist/css


vi anglar-cli.json

need to restart ng serve

filtering different from autocomplete


===08====

4 boxes:
name, filter, list, characters

ng generate component characterName
ng generate component archetypeFilter
ng generate component archetypeList
ng generate component archetypeCard


or

ng gc

speaker 's version
https://bitbucket.org/od-training/angular-examples-17/




==========09=========

ngIf

*ngIf
the start means sugaring

madon@madona:~/angular/alfresco/learn2/09-built-in-directives$ more builtin.ts 

  todos: string[] = ['Eat Breakfast', 'Walk Dog', 'Breathe'];


        <ul class="collection">
          <li class="collection-item" *ngFor="let task of todos">{{task}}</li>
        </ul>



let ... of ....

other ngFor:

        <ul class="collection">
          <li class="collection-item"
              *ngFor="let task of todos; let i = index">Item {{i + 1}}: {{task}}
</li>
        </ul>



there is also ngSwitch (bigger version of ngIf)

at the limit: probably would need to be in the dev

I like to keep my templates simple

swappData.json
madon@madona:~/angular/alfresco/learn2/09-built-in-directives$ ls ../demo-data/

madon@madona:~/angular/alfresco/workshop-app/src/app/archetype-list$ more archetype-list.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archetype-list',
  templateUrl: './archetype-list.component.html',
  styleUrls: ['./archetype-list.component.css']
})
export class ArchetypeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

== the type:
not necessary


gradual typing

https://en.wikipedia.org/wiki/Gradual_typing

added to TypeScript, is optional static typing that enables static language analysis, which facilitates tooling and IDE support.
https://en.wikipedia.org/wiki/TypeScript

    swappData = [{
  "name": "Beru Whitesun Lars",
  "birthday": "47BBY",
  "weight": "75 kg",
  "height": 62,
  "strength": 13,
  "dexterity": 6,
  "hair color": "Brown",
  "race": "Human",
  "sex": "Female",
  "statPref": "str"
},{
  "name": "Biggs Darklighter",
  "birthday": "24BBY",
  "weight": "

or

    swappData any = [{


or


    swappData any [] = [{

===the ;
ASI: automatic semi column insertion

(regrets his decision, at design of javascript)

Better to put write them!

a good linter should be it.

https://github.com/palantir/tslint


ng lint

Brandon Eich
https://en.wikipedia.org/wiki/Brendan_Eich


use the dot (.) or [".."]

  <div *ngFor="let anarchetype of swappData">{{anarchetype.name}} with hair {{anarchetype["hair color"]}}</div>


https://brendaneich.com/2012/04/the-infernal-semicolon/


  constructor() { }
 no semi-column needed.



=============10=================

visual.ts

        [class.round-border]="n > 7"

makes the CSS class appear if n>7

You can also modify properties not just css classes.



5 rookie mistakes to avoid with angular 2

http://angularjs.blogspot.com/2016/04/5-rookie-mistakes-to-avoid-with-angular.html



======11=============

moment.js: a library for date manipulation

angular2-moment


the JSON pipe can be used for debugging


<pre>{{cars | json}}</pre>


truesy or falsy

curreny pipe (with parameters)

lesson 37


a pipe can be impure

v => v.indexOf(....)

arrow function (lambda)


================12===============

!!!!!!!!!!!!!send objects to a component!!!!!!!!!!!!!


top componet: manager



<order-list class="col s6" [orders]="appOrders"></order-list>


this compnet has a parameter


madon@madona:~/angular/alfresco/learn2/12-component-data-binding$ grep -i input *s
details.ts:import { Component, Input } from '@angular/core';
details.ts:  @Input('selectedOrderDetails') sod: IOrder;
header.ts:import { Component, Input } from '@angular/core';
header.ts:  @Input('customerName') customer: string;
items.ts:import { Component, Input } from '@angular/core';
items.ts:  @Input() items: IItem[];
list.ts:import { Component, Input } from '@angular/core';
list.ts:  // can override, @Input('name')
list.ts:  @Input() orders: IOrder[];





==========13=======

the event is now an @Output


madon@madona:~/angular/alfresco/learn2/13-component-events$ grep --color -i outp *
orderList.ts:import { Component, Input, Output, EventEmitter } from '@angular/core';
orderList.ts:  @Output() selectOrder = new EventEmitter<IOrder>();


madon@madona:~/angular/alfresco/learn2/13-component-events$ grep --color -i emit *
index.html:          <li><a target="_blank" href="https://angular.io/docs/ts/latest/api/core/index/EventEmitter-class.html">EventEmitter</a></li>
orderList.ts:import { Component, Input, Output, EventEmitter } from '@angular/core';
orderList.ts:  @Output() selectOrder = new EventEmitter<IOrder>();
orderList.ts:    this.selectOrder.emit(order);



lower.html:

 <button (click)="chooseThisArchetype(archetype)">Choose</button>

lower.ts

import { Output, EventEmitter} from '@angular/core';

 @Output() archetypeChosen = new EventEmitter();
chooseThisArchetype(a) {
    console.log('ArchetypeCardComponent: user clicked archetype', a);
    this.archetypeChosen.emit(a);
}

upper.html

<app-archetype-card
      *ngFor="let person of swappData"
      (archetypeChosen)="onArchetypeChosen($event)"
    ></app-archetype-card>

upper.ts

onArchetypeChosen(newlySelectedArchetype) {
   console.log('ArchetypeListComponent - archetype selected:', newlySelectedArchetype);
}
=======14=====

DI Dependancy Injuection

let's try to model a car

Create a car class

engine, 4 tyres, transmission

OK but implementation of car calls is intimently dependant on car implementation... that's high coupling: bad

all the dependancies will be injected


Allows easier testing (mocking).



Title service.

Pascal DI
http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html

import { Title } from '@angular/platform-browser';


  constructor(t: Title) {
    this.pageTitle = t.getTitle();
  }

import Title from ....;
import ccTyyyy from ...;
  constructor(t: Title, r: ccTyyyy) {


(no 15, 16, 17)
===============18=========


constructor(){

new gc

}


vs
constructor(gc: GreetingCalculator){


}



====34====
dependancy injection

drawback: like a global variable
shared mutable state

and performance issue

======18=====

we will get the data from a HTTP call


ng generate service workerData

for out custom app:

ng generate service swappData


madon@madona:~/angular/alfresco/workshop-app$ ng generate service swappData
installing service
  create src/app/swapp-data.service.spec.ts
  create src/app/swapp-data.service.ts
  WARNING Service is generated but not provided, it must be provided to be used


we used to have the data in

./archetype-list/archetype-list.component.ts:  "sex": "Female",


     constructor(private sds: SwappDataService) { }




=========19===============
text editor:
mvim



============forms======

seem over engineered
2 ways, we'll look at one of them

============15========
this is "forms"

ReactiveFormsModule

FormControl, Validators

====16=====

login button only appears when login/pass is something valid


<form [formGroup]="loginFormGroup" (ngSubmit)="onLogin()">
  <div class="row">
    <div class="col s4">
      <label for="username">Login</label>
      <input id="username" type="text" formControlName="login">
      {{loginFormGroup.controls.login.valid}}

.....

     <button class="btn" [disabled]="!loginFormGroup.valid"
    [class.disabled]="!loginFormGroup.valid">Login</button>
</form>



import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export class LoginComponent {
  loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginFormGroup = this.fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.minLength(3), Validators.required]],
      optional: ['angular bootcamp']
    });
  }



 white paper angular kara ericsson

http://angularconnect.com/2016/speakers/#kara-erickson
http://angularconnect.com/2016/sessions/
https://www.youtube.com/watch?v=xYv9lsrV0s4

naming convetion


angularconnect 2016



ng-book2

ari lerner


book biblio:
leanpub.com/router
Victor savkin
angular 2 router


Brad said Victor is the smartest guy in the team


loginFormGroup.controls.login?.errors | json

only goes after the question mark if not null


?. elvis operator
https://en.wikipedia.org/wiki/Elvis_operator




=======28======

check two passwords are the same



        <span *ngIf="loginFormGroup.errors?.mismatched">Passwords must match</sp


a function that returns a function


export function matchingFieldValidator(firstKey: string, secondKey: string, erro
rName: string) {
  return function (group: FormGroup): IValidationResult {
    let first = group.controls[firstKey];
    let second = group.controls[secondKey];
    if (first.value !== second.value) {
      return {
        [errorName]: true
      };
    }
....




==================29==============
async form validation
e.g. checking in a DB


zippopotam.us


api.zippopotam.us/us/90210

http://api.zippopotam.us/FR/63140

api.postcodes.io/









=============17==============
observable

you may have used list comprehensions

a lot of librareies in jabvascript: underscorejs.org or lodash.com

good if you have all the data

observable based on the idea you have some sort of collections of things arriving



observable is in the .ts:
    const cityChanges: Observable<string> =
        this.locationFormGroup.controls['city'].valueChanges;

    cityChanges.subscribe(val => {
      console.log('city: ', val);
    });



valueChanges is an observable
subscribe takes a callback as argument


http.get is an observable
forms

(~ promises in angular1 )


callbackhell.com

chris kowal q

$q is an hommage library to the q library


e.g password checker.


rxjs: is the library behind it

reactivexjs
http://reactivex.io/

ngFor cannot take an array

this can take an array

ships.html:      <li class="collection-item" *ngFor="let s of ships1 | async">
ships.html:      <li class="collection-item" *ngFor="let s of ships2 | async">




my-service.ts:  loadShips1(): Observable<IShip[]> {
my-service.ts:    return Observable.of(sampleShipData).delay(2000);
my-service.ts-  }



the 2nd one is the promise version



Ben presenation on angular connect

async doe sthe subscribe and unsubscribe
if you don't use |async, need to unsubscribe, if not will leak


=======21=======
observable and http


phones.ts

phones observable

use async pipe again


http.get() returns an observable


==============23===============


star wars api
https://swapi.co/


there is no subscribe in .ts

the subscribe is done in the  async


http://stackoverflow.com/questions/37671700/angular2-style-guide-property-with-dollar-sign

 $ suffix (popularized by Cycle.js) is used to indicate that the variable is an Observable. It could make it to the official style guide too but it's not there yet

==================26==========

incremental search

debounce: wait a a bit before sending so that we have a valid name


switchMap: put things in order

in the resources folder:

Ben Lesh rxjs 5 next big version
"observable all the things"
video "observable that make sense"
rxjs 5 thinking reactively









angularbootcamp.com/survey

======27=======
errors
Observable.interval(....)


observable "shared"

one call publish
refcount
#
cf ==24==
route driving data loading
http://localhost:8080/24-route-driven-data-loading/#/employees
http://localhost:8080/24-route-driven-data-loading/#/employee/3

example of sync pipe goes wrong: big mess

smart compenet
display component

go to ==25==
=====25===
Smart Component Pattern

http://localhost:8080/25-smart-component-pattern/#/employees
http://localhost:8080/25-smart-component-pattern/#/employee/3

code is much SIMPLER !


also called "container/template"


=========22=======

route parameters

madon@madona:~/angular/alfresco/learn2/22-route-parameters$ grep -C 6 who *app.ts-import { HomeComponent } from './home';
app.ts-import { NameComponent } from './name';
app.ts-
app.ts-const appRoutes: Routes = [
app.ts-  { path: '', redirectTo: 'home', pathMatch: 'full' },
app.ts-  { path: 'home', component: HomeComponent },
app.ts:  { path: 'hello/:who', component: NameComponent }
app.ts-];



use observable too....

injection of thye route:


name.ts-  constructor(route: ActivatedRoute) {
name.ts-    this.message = route.params
name.ts-      .do(params => console.log('Got new value for params', params))
name.ts-      .map(params => {
name.ts:        return params['who'];
name.ts-      });
name.ts-  }
name.ts-}


there is no subscribe as we are able to use the async pipe.


====24=====

madon@madona:~/angular/alfresco/learn2/24-route-driven-data-loading$ more routes.ts 
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employeeList';
import { EmployeeDetailComponent } from './employeeDetail';

const appRoutes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/:employeeId', component: EmployeeDetailComponent }
];




======30======

nested routing

... : spread operator


routes.ts:export const ROUTED_COMPONENTS = [Welcome, Contacts, ...CONTACT_ROUTED_COMPONENTS];


cf yada yada in perl6

http://search.cpan.org/~tmtm/Yada-Yada-Yada-1.00/Yada.pm

enableTracing allows tracing routes


=====31====

aux route

two router outlets




=======

ng test

karma will run all tests
