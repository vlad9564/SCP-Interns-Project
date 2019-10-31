
CD /D %~dp0
echo %cd%
rmdir /S /Q .\generated

java -jar ./swagger-codegen-cli-2.3.1.jar  generate -l spring -i swagger-SCPInternsProjectBackend-model.yaml -c config.json -o generated/java
java -jar ./swagger-codegen-cli-2.3.1.jar  generate -l spring -i swagger-SCPInternsProjectBackend.yaml       -c config.json -o generated/java
pause