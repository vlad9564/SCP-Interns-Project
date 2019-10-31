
CD /D %~dp0
echo %cd%
rmdir /S /Q .\generated

java -jar ./swagger-codegen-cli-2.3.1.jar  generate -l spring -i swagger-pattor-model.yaml -c config.json -o generated/java
java -jar ./swagger-codegen-cli-2.3.1.jar  generate -l spring -i swagger-pattor.yaml       -c config.json -o generated/java

java -jar ./swagger-codegen-cli-2.3.1.jar  generate -l typescript-angular -i swagger-pattor-model.yaml -c config.json -o generated/angular
java -jar ./swagger-codegen-cli-2.3.1.jar  generate -l typescript-angular -i swagger-pattor.yaml       -c config.json -o generated/angular

pause