@ECHO OFF
java -jar swagger-codegen-cli-3.0.27.jar generate -i "http://localhost:4000/swagger/Potato API/swagger.json" -l typescript-angular -o .\swaggerTemp
mkdir "src/interfaces/swagger"
copy  swaggerTemp\model .\src\interfaces\swagger
@RD /S /Q swaggerTemp
pushd