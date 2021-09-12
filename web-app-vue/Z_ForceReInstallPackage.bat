@ECHO OFF
ECHO S_INFO
ECHO WAIT (search outdated)
call npm outdated
rd /s node_modules
del /P package-lock.json
call npm install
call npm cache verify
ECHO DONE!
PAUSE

