@ECHO OFF
ECHO S_INFO
ECHO WAIT
rd /s /Q node_modules
del package-lock.json /Q
call npm install
call npm cache verify
ECHO DONE!
PAUSE

